import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import DashboardCard from "../../../components/DashboardCard";

// app/dashboard/admin/page.tsx
// Admin dashboard skeleton. Replace placeholders with Supabase queries.
// Recommended data flows:
// - fetchBookings(): total bookings and month-to-month data
// - fetchPayments(): accounts and targets
// - repeat-customer analysis can be computed via RPC or client-side grouping

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DashboardCard title="Rooms booked" value={42} />
          <DashboardCard title="Rooms available" value={18} />
          <DashboardCard title="Accounts (KSH)" value={"1,240,000"} />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium">Target vs Achieved</h4>
            <p className="text-sm text-gray-500 mt-2">Placeholder chart area — use Chart.js or Recharts here.</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium">Repeat Customer Analysis</h4>
            <p className="text-sm text-gray-500 mt-2">Show percentage of returning customers and trends.</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500">Notes: Use Supabase RPCs for heavy aggregation or compute in frontend for interactive charts.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
