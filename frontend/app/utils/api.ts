// api.ts
// Helper functions for calling Supabase APIs for bookings, payments, rooms, staff, guests.
// These are placeholders; implement actual requests using `supabase` client.

import { supabase } from "./supabaseClient";

// api.ts
// High-level data access helpers. Replace the body of these functions with
// actual Supabase queries or RPC calls. For heavy aggregation use RPCs on the
// database (recommended) and call them from the frontend or edge functions.

export async function fetchBookings() {
  // Example (when supabase is configured):
  // const { data, error } = await supabase.from('bookings').select('*');
  // return data ?? [];
  return [] as any[]; // TODO
}

export async function fetchRooms() {
  // const { data } = await supabase.from('rooms').select('*').order('price', { ascending: true });
  // return data ?? [];
  return [] as any[]; // TODO
}

export async function fetchPayments() {
  // const { data } = await supabase.from('payments').select('*');
  // return data ?? [];
  return [] as any[]; // TODO
}
