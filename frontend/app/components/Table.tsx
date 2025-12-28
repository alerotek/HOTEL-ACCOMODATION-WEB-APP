"use client";
import React from "react";

// Table.tsx
// Generic, reusable table component. Accepts headers and row render function.

type Props<T> = {
  headers: string[];
  items: T[];
  renderRow: (item: T, idx: number) => React.ReactNode;
};

export default function Table<T>({ headers, items, renderRow }: Props<T>) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full divide-y">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 text-left text-sm text-gray-600">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="border-t">{renderRow(item, idx)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
