import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";

// app/booking/page.tsx
// Booking page that hosts the booking form. Placeholder UI only.

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Book a room</h2>
        <BookingForm />
      </section>
      <Footer />
    </main>
  );
}
