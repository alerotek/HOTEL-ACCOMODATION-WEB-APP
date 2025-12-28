import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import RoomCard from "../components/RoomCard";

// app/booking/page.tsx
// Booking listing and booking form. This page demonstrates how the booking flow
// could be composed: a list of available rooms (from backend) and a booking form.
// Replace `rooms` with `fetchRooms()` (Supabase) in `app/utils/api.ts` when ready.

const rooms = [
  { id: "r1", title: "Hillview Suite", description: "Great sunset views.", price: 7500 },
  { id: "r2", title: "Savanna Double", description: "Close to the reserve.", price: 5200 },
];

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-6xl mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Available rooms</h2>
          <div className="grid gap-4">
            {rooms.map((r) => (
              <RoomCard key={r.id} id={r.id} title={r.title} description={r.description} price={r.price} />
            ))}
          </div>
        </div>

        <aside>
          <h3 className="text-xl font-semibold mb-4">Reservation</h3>
          <BookingForm />
          <p className="mt-4 text-sm text-gray-500">Payments: Mpesa simulation and optional receipt upload supported.</p>
        </aside>
      </section>
      <Footer />
    </main>
  );
}
