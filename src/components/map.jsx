import React from "react";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import nat2 from "../data/DunavChernoMore2.json";
import nat10 from "../data/IronCurtainTrail10.json";

export default function Map() {
  return (
    <div className="map_container">
      <MapContainer center={[42.705, 25.09]} zoom={7.4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={nat2.features} style={{ color: "#3b83d1" }}>
          <Popup>EuroVelo 6 - Atlantic Ocean - Black Sea</Popup>
        </GeoJSON>
        <GeoJSON data={nat10.features} style={{ color: "#d32f2f" }}>
          <Popup>EuroVelo 13 - Iron Curtain Trail</Popup>
        </GeoJSON>
      </MapContainer>
    </div>
  );
}
