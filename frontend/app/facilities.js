import React from "react";
import FacilityCard from "../components/FacilityCard";

export default function Facilities() {
  return (
    <main style={{ padding: 20 }}>
      <h2>Facilities</h2>
      <p>List of facilities (Food & Drinks, Conference, Reading Rooms)</p>
      <FacilityCard />
      {/* TODO: implement facility filters, booking actions */}
    </main>
  );
}
