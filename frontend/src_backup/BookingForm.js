import React, {useState} from "react";

export default function BookingForm() {
  const [roomType, setRoomType] = useState("single");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: call backend Edge Function / RPC to create booking
    alert("Booking submission not implemented in scaffold");
  }

  return (
    <form onSubmit={handleSubmit} style={{display:'grid',gap:8,maxWidth:480}}>
      <label>Room type</label>
      <select value={roomType} onChange={e => setRoomType(e.target.value)}>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="twin">Twin</option>
      </select>
      <label>Check-in</label>
      <input type="datetime-local" value={checkin} onChange={e => setCheckin(e.target.value)} />
      <label>Check-out</label>
      <input type="datetime-local" value={checkout} onChange={e => setCheckout(e.target.value)} />
      <label>Guests</label>
      <input type="number" min={1} value={guests} onChange={e => setGuests(Number(e.target.value))} />
      <button type="submit">Request booking</button>
      {/* TODO: show price preview, availability check, error handling */}
    </form>
  );
}
