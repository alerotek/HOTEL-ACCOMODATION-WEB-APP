"use client";
import React from "react";
import Navbar from "../../components/Navbar";

// app/auth/signup/page.tsx
// Signup page placeholder. Hook into Supabase sign-up flow on implementation.

export default function SignupPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-md mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm">Full name</label>
            <input className="mt-1 w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input type="email" className="mt-1 w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input type="password" className="mt-1 w-full border rounded p-2" />
          </div>
          <div>
            <button className="px-4 py-2 bg-green-600 text-white rounded">Sign up</button>
          </div>
        </form>
      </section>
    </main>
  );
}
