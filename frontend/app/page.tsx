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
            <RoomCard key={r.id} id={r.id} title={r.title} description={r.description} price={r.price} onBook={() => { /* open booking flow */ }} />
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
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
