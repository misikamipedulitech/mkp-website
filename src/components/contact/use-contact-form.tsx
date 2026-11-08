"use client";

import { FocusEvent, FormEvent, useId, useState } from "react";
import { buildContactMailto } from "@/lib/mailto";

const contactFields = ["name", "email", "subject", "message"] as const;
type ContactField = (typeof contactFields)[number];
type ContactValues = Record<ContactField, string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(values: ContactValues) {
  const errors: Partial<Record<ContactField, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address, like name@example.com.";
  }
  if (!values.subject.trim()) errors.subject = "Please add a subject.";
  if (!values.message.trim()) errors.message = "Please write a message.";
  return errors;
}

function readValues(form: HTMLFormElement): ContactValues {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    subject: String(data.get("subject") ?? ""),
    message: String(data.get("message") ?? ""),
  };
}

function fieldName(target: EventTarget): ContactField | null {
  const name = (target as HTMLInputElement).name;
  return contactFields.includes(name as ContactField)
    ? (name as ContactField)
    : null;
}

const emptyValues: ContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

// Validates the contact form as the user types and opens a prefilled email on send.
// Errors appear for a field once the user has typed in it or left it.
export function useContactForm({ onSent }: { onSent?: () => void } = {}) {
  const idPrefix = useId();
  const [values, setValues] = useState(emptyValues);
  const [touched, setTouched] = useState<ReadonlySet<ContactField>>(new Set());

  const errors = validateContact(values);
  const canSubmit = Object.keys(errors).length === 0;

  function touch(target: EventTarget) {
    const name = fieldName(target);
    if (name && !touched.has(name)) setTouched(new Set(touched).add(name));
  }

  const formProps = {
    noValidate: true,
    onInput: (event: FormEvent<HTMLFormElement>) => {
      setValues(readValues(event.currentTarget));
      touch(event.target);
    },
    onBlur: (event: FocusEvent<HTMLFormElement>) => touch(event.target),
    onSubmit: (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const current = readValues(event.currentTarget);
      if (Object.keys(validateContact(current)).length > 0) {
        setValues(current);
        setTouched(new Set(contactFields));
        return;
      }
      window.location.href = buildContactMailto(current);
      onSent?.();
    },
  };

  function errorFor(name: ContactField) {
    return touched.has(name) ? errors[name] : undefined;
  }

  function errorId(name: ContactField) {
    return `${idPrefix}-${name}-error`;
  }

  function fieldProps(name: ContactField) {
    const error = errorFor(name);
    return {
      name,
      required: true,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? errorId(name) : undefined,
    };
  }

  function fieldError(name: ContactField) {
    const error = errorFor(name);
    if (!error) return null;
    return (
      <p id={errorId(name)} className="mt-1.5 text-xs text-destructive">
        {error}
      </p>
    );
  }

  return { formProps, fieldProps, fieldError, canSubmit };
}
