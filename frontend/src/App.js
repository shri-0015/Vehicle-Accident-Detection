import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 18.5808, // Replace with your default latitude
  lng: 73.9787, // Replace with your default longitude
};

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Vehicle Accident Detection and Management System</h1>
      <p>
        Your safety is our priority. This system detects accidents in real-time
        and provides necessary information to emergency contacts and services.
      </p>
      <h2>Real-Time Accident Location</h2>
      <LoadScript googleMapsApiKey=AIzaSyBx7YRWMGMdBfpQXsSd6rriqTJAbDa90uE>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Add map markers or other features here */}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

function Dashboard() {
  return <h2>Dashboard Page (Coming Soon)</h2>;
}

function VehicleRegistration() {
  return <h2>Vehicle Registration Page (Coming Soon)</h2>;
}

function EmergencyContacts() {
  return <h2>Emergency Contacts Page (Coming Soon)</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ background: "#eee", padding: "10px" }}>
        <ul style={{ display: "flex", listStyle: "none", gap: "20px", justifyContent: "center" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/vehicle-registration">Vehicle Registration</Link>
          </li>
          <li>
            <Link to="/emergency-contacts">Emergency Contacts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/vehicle-registration" element={<VehicleRegistration />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
      </Routes>
    </Router>
  );
}

export default App;
