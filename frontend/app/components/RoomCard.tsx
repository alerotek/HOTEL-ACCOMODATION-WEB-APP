"use client";
import React from "react";

// RoomCard.tsx
// Reusable UI component showing room information and a call-to-action.
// Purpose: Placeholder UI for room listing; replace with real markup and styles.

export type RoomCardProps = {
  id?: string;
  title: string;
  description?: string;
  price?: number;
  image?: string;
  onBook?: (id?: string) => void;
};

export default function RoomCard({ title, description, price, image, id, onBook }: RoomCardProps) {
  return (
    <article className="p-4 border rounded-lg shadow-sm">
      <div className="h-40 bg-gray-100 rounded-md mb-3 flex items-center justify-center">
        {image ? <img src={image} alt={title} className="object-cover h-full w-full rounded-md" /> : <span className="text-gray-400">No image</span>}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description ?? "Room description placeholder"}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-medium">{price ? `KSH ${price}` : "Price N/A"}</span>
        <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={() => onBook?.(id)}>
          Book
        </button>
      </div>
    </article>
  );
}
