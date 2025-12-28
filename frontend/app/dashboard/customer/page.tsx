import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// app/dashboard/customer/page.tsx
// Customer dashboard placeholder for past bookings and receipts.

export default function CustomerDashboard() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Customer Dashboard (placeholder)</h2>
        <p className="text-sm text-gray-600">Here customers will see past bookings, downloadable receipts, and make new bookings.</p>
      </section>
      <Footer />
    </main>
  );
}
