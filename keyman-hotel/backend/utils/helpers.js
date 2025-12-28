// Shared helpers for backend logic
const crypto = require("crypto");

function generateId(prefix = "") {
  return prefix + crypto.randomBytes(6).toString("hex");
}

function calculateBookingPrice({ roomBase = 0, breakfast = false, guests = 1, capacity = 1, extraFee = 500, breakfastCost = 300 }) {
  // TODO: replace with pricing_config lookups and date-based pricing
  let total = roomBase;
  if (breakfast) total += breakfastCost;
  if (guests > capacity) total += (guests - capacity) * extraFee;
  return total;
}

module.exports = { generateId, calculateBookingPrice };
