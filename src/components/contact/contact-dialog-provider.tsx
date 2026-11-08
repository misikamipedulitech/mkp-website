"use client";

import {
  ComponentProps,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import { ContactDialog } from "./contact-dialog";

type ContactDialogContextValue = {
  openContact: () => void;
};

const ContactDialogContext = createContext<ContactDialogContextValue | null>(
  null,
);

export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openContact = useCallback(() => setOpen(true), []);
  const closeContact = useCallback(() => setOpen(false), []);
  const value = useMemo(() => ({ openContact }), [openContact]);

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
      <ContactDialog open={open} onClose={closeContact} />
    </ContactDialogContext.Provider>
  );
}

export function useContactDialog() {
  const context = useContext(ContactDialogContext);
  if (!context) {
    throw new Error("useContactDialog must be used within ContactDialogProvider");
  }
  return context;
}

// Opens the Support us dialog; usable from server components.
export function SupportUsButton(props: Omit<ComponentProps<typeof Button>, "onClick">) {
  const { openContact } = useContactDialog();
  return <Button {...props} onClick={openContact} />;
}
