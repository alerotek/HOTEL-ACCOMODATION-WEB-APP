"use client";
import Link from "next/link";
import React from "react";

// Navbar.tsx
// Primary navigation for the site. Keep minimal and accessible.

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">Keyman Hotel</Link>
        <div className="flex gap-3">
          <Link href="/booking">Book</Link>
          <Link href="/dashboard/customer">Dashboard</Link>
          <Link href="/auth/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}
