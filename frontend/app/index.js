import React from "react";

// Landing page  show rooms and CTA to login/signup
export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Keyman Hotel & Accommodation</h1>
      <p>Mobile-first hotel booking experience  demo scaffold.</p>
      {/* TODO: list featured rooms, facilities, and booking CTA */}
      <p>
        <a href="/login">Login</a> | <a href="/signup">Signup</a>
      </p>
    </main>
  );
}
