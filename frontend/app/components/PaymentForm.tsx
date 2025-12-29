"use client";
import React, { useState } from "react";

// PaymentForm.tsx
// Client Component: handles payment input and triggers payment flows.
// Reason: uses local state and onSubmit handler, so it must be a Client Component.

type Props = {
  onPaid?: (receiptUrl?: string) => void;
};

export default function PaymentForm(_props: Props) {
  const [amount, setAmount] = useState<string>("");
  const [method, setMethod] = useState<string>("mpesa");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: call payment API or trigger STK Push via Edge Function
    alert("Payment handling not implemented in scaffold");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-2 max-w-md">
      <label className="text-sm">Amount (KES)</label>
      <input className="border rounded p-2" value={amount} onChange={e => setAmount(e.target.value)} />
      <label className="text-sm">Method</label>
      <select className="border rounded p-2" value={method} onChange={e => setMethod(e.target.value)}>
        <option value="mpesa">Mpesa</option>
        <option value="cash">Cash</option>
      </select>
      <button className="px-4 py-2 bg-amber-600 text-white rounded" type="submit">Pay</button>
      {/* TODO: show payment status, receipts upload */}
    </form>
  );
}
