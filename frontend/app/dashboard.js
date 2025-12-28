import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: 20 }}>
        <h2>Dashboard</h2>
        <p>Customer / Staff / Admin dashboards will go here.</p>
        {/* TODO: implement role-specific KPI cards and lists */}
      </main>
    </div>
  );
}
