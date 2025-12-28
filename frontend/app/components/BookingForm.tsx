"use client";
import React from "react";

// BookingForm.tsx
// Reusable booking form component. Controls inputs for room selection, guests,
// add-ons, dates, and optional receipt upload. This is a placeholder UI only.

export default function BookingForm() {
  return (
    <form className="space-y-4 p-4 border rounded">
      <h2 className="text-xl font-semibold">Booking form (placeholder)</h2>
      <div>
        <label className="block text-sm">Room type</label>
        <select className="mt-1 w-full border rounded p-2">
          <option>Single</option>
          <option>Double</option>
          <option>Suite</option>
        </select>
      </div>
      <div>
        <label className="block text-sm">Guests</label>
        <input type="number" defaultValue={1} className="mt-1 w-24 border rounded p-2" />
      </div>
      <div>
        <label className="block text-sm">Check-in</label>
        <input type="date" className="mt-1 w-full border rounded p-2" />
      </div>
      <div>
        <label className="block text-sm">Check-out</label>
        <input type="date" className="mt-1 w-full border rounded p-2" />
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-green-600 text-white rounded">Reserve</button>
        <button type="button" className="px-4 py-2 border rounded">Save draft</button>
      </div>
    </form>
  );
}
