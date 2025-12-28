// Edge Function stub: createPayment
// Placeholder for Mpesa STK Push trigger and manual payment recording.

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") return res.status(405).send("Method not allowed");
    const payload = req.body;
    // TODO: validate payload (booking_id, amount_kes, method)
    // TODO: trigger Mpesa STK Push for mpesa payments OR create payment record
    return res.status(201).json({ payment_id: "stub-payment-id", message: "Payment created (stub)" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "internal_error" });
  }
}
