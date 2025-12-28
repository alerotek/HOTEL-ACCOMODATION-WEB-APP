// Edge Function stub: facilityBooking
// Handles conference and reading room bookings and food order attachments.

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method not allowed");
    const payload = req.body;
    // TODO: validate facility availability, capacity, and pricing
    // TODO: insert into conference_bookings or reading_room_sessions
    return res.status(201).json({ id: "stub-facility-booking", message: "Facility booking (stub)" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "internal_error" });
  }
}
