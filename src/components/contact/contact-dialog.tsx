"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useContactForm } from "./use-contact-form";

const fieldClasses =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring aria-invalid:border-destructive";

export function ContactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { formProps, fieldProps, fieldError, canSubmit } = useContactForm({
    onSent: onClose,
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="contact-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl bg-popover p-0 text-popover-foreground shadow-xl backdrop:bg-black/50"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 id="contact-dialog-title" className="text-2xl font-bold">
            Support us
          </h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close"
            onClick={onClose}
            className="-m-2"
          >
            <X className="size-5" />
          </Button>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Want to help with funding, resources, or media, or just have a
          question? Send us a message.
        </p>

        <form className="mt-6 flex flex-col gap-4" {...formProps}>
          <div>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Name
              <input
                {...fieldProps("name")}
                type="text"
                autoComplete="name"
                className={fieldClasses}
              />
            </label>
            {fieldError("name")}
          </div>
          <div>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Email
              <input
                {...fieldProps("email")}
                type="email"
                autoComplete="email"
                className={fieldClasses}
              />
            </label>
            {fieldError("email")}
          </div>
          <div>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Subject
              <input
                {...fieldProps("subject")}
                type="text"
                className={fieldClasses}
              />
            </label>
            {fieldError("subject")}
          </div>
          <div>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Message
              <textarea
                {...fieldProps("message")}
                rows={5}
                className={`${fieldClasses} resize-y`}
              />
            </label>
            {fieldError("message")}
          </div>
          <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              {canSubmit
                ? "This opens your email app with your message ready to send."
                : "Fill in every field to send your message."}
            </p>
            <Button
              type="submit"
              disabled={!canSubmit}
              className="self-end sm:self-auto"
            >
              Send message
            </Button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
