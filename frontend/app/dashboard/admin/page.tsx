import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import DashboardCard from "../../../components/DashboardCard";

// app/dashboard/admin/page.tsx
// Admin dashboard placeholder with key metric cards.

export default function AdminDashboard() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard (placeholder)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DashboardCard title="Rooms booked" value={42} />
          <DashboardCard title="Rooms available" value={18} />
          <DashboardCard title="Accounts report" value="View" />
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">Other reports (targets, projections, month-to-month, repeat customers) will be added here.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
