import React, {useState} from "react";

export default function PaymentForm() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("mpesa");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: call payment API or trigger STK Push via Edge Function
    alert("Payment handling not implemented in scaffold");
  }

  return (
    <form onSubmit={handleSubmit} style={{display:'grid',gap:8,maxWidth:480}}>
      <label>Amount (KES)</label>
      <input value={amount} onChange={e => setAmount(e.target.value)} />
      <label>Method</label>
      <select value={method} onChange={e => setMethod(e.target.value)}>
        <option value="mpesa">Mpesa</option>
        <option value="cash">Cash</option>
      </select>
      <button type="submit">Pay</button>
      {/* TODO: show payment status, receipts upload */}
    </form>
  );
}
