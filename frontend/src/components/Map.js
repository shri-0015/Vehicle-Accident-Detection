import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ location }) => {
  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={{ width: "100%", height: "400px" }} zoom={10} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
