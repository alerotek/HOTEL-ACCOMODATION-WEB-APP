import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import DashboardCard from "../../../components/DashboardCard";

// app/dashboard/staff/page.tsx
// Staff dashboard skeleton: check-in/check-out, assigned bookings, quick actions.

export default function StaffDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Staff Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DashboardCard title="Assigned bookings" value={8} />
          <DashboardCard title="Check-ins today" value={6} />
          <DashboardCard title="Pending checkouts" value={2} />
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
          <h4 className="font-medium">Assigned bookings</h4>
          <p className="text-sm text-gray-500 mt-2">List of assigned bookings (pull via Supabase query filtered by staff id).</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
