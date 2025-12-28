import React from "react";
import PaymentForm from "../components/PaymentForm";

export default function Payments() {
  return (
    <main style={{ padding: 20 }}>
      <h2>Payments</h2>
      <PaymentForm />
      {/* TODO: show payment history, receipts, balances */}
    </main>
  );
}
