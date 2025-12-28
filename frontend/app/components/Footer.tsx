"use client";
import React, { useEffect, useState } from "react";

// Footer.tsx
// Marked as a Client Component because it renders a dynamic value (current year).
// We set the year on the client using useEffect/useState to avoid server/client
// hydration mismatches that can occur with Date() or locale-sensitive values.

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Set the year on the client only to keep server HTML stable.
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        © {year ?? ""} Keyman Hotel — All rights reserved.
      </div>
    </footer>
  );
}
