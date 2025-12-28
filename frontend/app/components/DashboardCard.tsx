"use client";
import React from "react";

// DashboardCard.tsx
// Small card used across admin/staff/customer dashboards for metrics and quick actions.

type Props = { title: string; value?: string | number; children?: React.ReactNode };

export default function DashboardCard({ title, value, children }: Props) {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h4 className="text-sm text-gray-500">{title}</h4>
      <div className="mt-2 text-2xl font-bold">{value ?? "—"}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
