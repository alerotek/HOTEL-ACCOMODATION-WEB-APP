import React from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

// app/dashboard/customer/page.tsx
// Customer dashboard skeleton: list past bookings, download receipts, start new booking.

export default function CustomerDashboard() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Your bookings</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Booking #BK-00123</div>
                <div className="text-sm text-gray-500">Hillview Suite • 2026-01-10 → 2026-01-13</div>
              </div>
              <div className="flex gap-2">
                <a className="px-3 py-1 border rounded" href="#">Download receipt</a>
                <a className="px-3 py-1 bg-amber-600 text-white rounded" href="/booking">Book again</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
