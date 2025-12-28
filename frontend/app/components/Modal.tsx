"use client";
import React from "react";

// Modal.tsx
// Lightweight modal wrapper for dialogs. This is a placeholder — integrate
// focus handling and ARIA attributes when converting to production code.

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
}
