import React from "react";
import BookingForm from "../components/BookingForm";

export default function Bookings() {
  return (
    <main style={{ padding: 20 }}>
      <h2>Bookings</h2>
      <BookingForm />
      {/* TODO: list existing bookings, calendar view, filters */}
    </main>
  );
}
