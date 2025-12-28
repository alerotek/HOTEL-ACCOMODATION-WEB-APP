import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import DashboardCard from "../../../components/DashboardCard";

// app/dashboard/staff/page.tsx
// Staff dashboard placeholder for check-in/check-out and assigned bookings.

export default function StaffDashboard() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Staff Dashboard (placeholder)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardCard title="Assigned bookings" value={8} />
          <DashboardCard title="Today: check-ins" value={6} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
