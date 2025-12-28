import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoomCard from "./components/RoomCard";
import Link from "next/link";

// app/page.tsx
// Enhanced homepage inspired by the provided Dribbble shot.
// Notes:
// - Visual art is provided as simple SVGs in `public/` (hero-hills.svg, elephant.svg).
// - Integration points for backend data are annotated: replace placeholder arrays
//   with calls to `fetchRooms()` from `app/utils/api.ts` which should use Supabase.

const sampleRooms = [
  { id: "r1", title: "Hillview Suite", description: "Overlooks the Taiata hills.", price: 7500 },
  { id: "r2", title: "Savanna Double", description: "Near the wildlife reserve.", price: 5200 },
  { id: "r3", title: "Garden Room", description: "Quiet and shaded.", price: 3800 },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-white">
      <Navbar />

      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">Keyman Hotel — Taiata, Taveta</h1>
            <p className="mt-4 text-lg text-gray-700">Nestled in the hills of Mwatate, Keyman offers peaceful stays close to wildlife — enjoy scenic views and warm hospitality.</p>
            <div className="mt-6 flex gap-4">
              <Link href="/booking" className="px-6 py-3 bg-amber-600 text-white rounded-lg shadow">Book Now</Link>
              <Link href="/dashboard/customer" className="px-6 py-3 border rounded-lg">My Bookings</Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">Tip: Book early for hillview suites during migration season.</p>
          </div>

          <div className="relative">
            <img src="/hero-hills.svg" alt="Hills illustration" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            <img src="/elephant.svg" alt="Elephant silhouette" className="absolute -bottom-4 right-6 w-28 opacity-90" />
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured rooms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleRooms.map((r) => (
            // Do not pass event handler functions from this (server) component
            // into a Client Component. Instead, allow the client component to
            // navigate or handle local events. Removing `onBook` avoids the
            // Next.js runtime error about passing event handlers to Server
            // Components. To wire a booking flow, implement a client wrapper
            // or use links (e.g. `/booking?id=${r.id}`).
            <RoomCard key={r.id} id={r.id} title={r.title} description={r.description} price={r.price} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">Local experiences</h3>
            <p className="mt-2 text-sm text-gray-600">Guided hill walks and wildlife drives in nearby reserves.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">Flexible bookings</h3>
            <p className="mt-2 text-sm text-gray-600">Partial payments supported; upload receipts when checking in.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold">Secure payments</h3>
            <p className="mt-2 text-sm text-gray-600">Mpesa integration simulated in the frontend for testing flows.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

