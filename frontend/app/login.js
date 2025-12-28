"use client";
import React, {useState} from "react";
// This file is an interactive Client Component (handles form state and submit).
// Added 'use client' so React event handlers (onSubmit/onChange) work in the App Router.
// Import the named `supabase` export from the app utils. Adjust when real client is ready.
import { supabase } from "./utils/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    // TODO: call supabase auth signInWithPassword
    // await supabase.auth.signInWithPassword({ email, password })
    alert("Login logic not implemented in scaffold");
  }

  return (
    <main style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
