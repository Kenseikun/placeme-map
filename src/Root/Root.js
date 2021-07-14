import React, { useState } from "react";
import "./Root.scss";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Root = () => {
  const [position, setPosition] = useState([52.229676, 21.012229]);

  return (
    <div className="map__container">
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>Hello :D</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Root;
