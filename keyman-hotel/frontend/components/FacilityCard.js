import React from "react";

export default function FacilityCard(){
  // Simple card placeholder for facility
  return (
    <div style={{border:"1px solid #ccc",padding:12,borderRadius:8,maxWidth:320}}>
      <h3>Conference Room</h3>
      <p>Capacity: 30</p>
      <p>Price: 2000 KES</p>
      <button>Book</button>
      {/* TODO: link to booking flow and availability */}
    </div>
  );
}
