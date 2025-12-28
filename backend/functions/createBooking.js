// Edge Function stub: createBooking
// This file is a placeholder for the server-side booking creation logic.
// In production, this should validate availability, compute price, and call a DB RPC.

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method not allowed");

    const payload = req.body;
    // TODO: validate payload (room_type, checkin, checkout, guests_count, breakfast)
    // TODO: call Supabase RPC create_booking or transactional SQL

    return res.status(201).json({ booking_id: "stub-booking-id", message: "Booking created (stub)" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "internal_error" });
  }
}
