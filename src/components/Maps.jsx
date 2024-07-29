import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Maps.module.css";

const MapComponent = () => {
  const position = [8.568611, 76.873111];
  const customIcon = new L.Icon({
    iconUrl: "marker.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div className={styles.mapContainer}>
      <h3>Maps</h3>
      <MapContainer center={position} zoom={13} className={styles.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>{position[0] + "," + position[1]}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
