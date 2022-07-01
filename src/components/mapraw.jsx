import React from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import nat1 from "../data/IskarStruma1.json";
import nat2 from "../data/DunavChernoMore2.json";
import nat3 from "../data/YantraMaritsa3.json";
import nat4 from "../data/Predbalkan4.json";
import nat5 from "../data/Ludogorie5.json";
import nat6 from "../data/Podbalkanski6.json";
import nat7 from "../data/Chernomorski7.json";
import nat8 from "../data/ViaDiagonalis8.json";
import nat10 from "../data/IronCurtainTrail10.json";

export default function Map() {
  return (
    <div className="map_container">
      <MapContainer center={[42.705, 25.09]} zoom={7.4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={nat1.features} style={{ color: "#ffeb3b" }}>
          <Popup>Национален маршрут 1 - Искър-Струма</Popup>
        </GeoJSON>
        <GeoJSON data={nat2.features} style={{ color: "#3b83d1" }}>
          <Popup>EuroVelo 6 - Atlantic Ocean - Black Sea</Popup>
        </GeoJSON>
        <GeoJSON data={nat3.features} style={{ color: "#827717" }}>
          <Popup>Национален маршрут 3 - Янтра-Марица-Арда</Popup>
        </GeoJSON>
        <GeoJSON data={nat4.features} style={{ color: "green" }}>
          <Popup>Национален маршрут 4 - Предбалкан</Popup>
        </GeoJSON>
        <GeoJSON data={nat5.features} style={{ color: "orange" }}>
          <Popup>Национален маршрут 5 - Лудогорие</Popup>
        </GeoJSON>
        <GeoJSON data={nat6.features} style={{ color: "#7cb342" }}>
          <Popup>Национален маршрут 6 - Подбалкански</Popup>
        </GeoJSON>
        <GeoJSON data={nat7.features} style={{ color: "#2042b3" }}>
          <Popup>Национален маршрут 7 - Черноморски</Popup>
        </GeoJSON>
        <GeoJSON data={nat8.features} style={{ color: "#8e24aa" }}>
          <Popup>Национален маршрут 8 - Виа Диагоналис</Popup>
        </GeoJSON>
        <GeoJSON data={nat10.features} style={{ color: "#d32f2f" }}>
          <Popup>EuroVelo 13 - Iron Curtain Trail</Popup>
        </GeoJSON>
      </MapContainer>
    </div>
  );
}
