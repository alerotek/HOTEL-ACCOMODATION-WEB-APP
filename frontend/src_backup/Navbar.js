import React from "react";

export default function Navbar(){
  return (
    <nav style={{display:"flex",padding:12,justifyContent:"space-between",borderBottom:"1px solid #eee"}}>
      <div><strong>Keyman Hotel</strong></div>
      <div>
        <a href="/dashboard" style={{marginRight:12}}>Dashboard</a>
        <a href="/bookings" style={{marginRight:12}}>Bookings</a>
        <a href="/payments" style={{marginRight:12}}>Payments</a>
      </div>
    </nav>
  );
}
