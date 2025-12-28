import React, {useState} from "react";
import supabase from "../../frontend/utils/supabaseClient";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    // TODO: call supabase.auth.signUp and handle profile creation
    alert("Signup logic not implemented in scaffold");
  }

  return (
    <main style={{ padding: 20 }}>
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Create account</button>
      </form>
    </main>
  );
}
