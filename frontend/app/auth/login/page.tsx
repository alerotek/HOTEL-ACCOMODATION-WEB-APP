"use client";
import React from "react";
import Navbar from "../../components/Navbar";

// app/auth/login/page.tsx
// Login page placeholder. Integrate Supabase auth on implementation.

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="mt-1 w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input type="password" className="mt-1 w-full border rounded p-2" />
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign in</button>
          </div>
        </form>
      </section>
    </main>
  );
}
