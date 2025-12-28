import React from "react";

// Footer.tsx
// Simple footer shown on all pages. Replace links and contact details as needed.

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        © {new Date().getFullYear()} Keyman Hotel — All rights reserved.
      </div>
    </footer>
  );
}
