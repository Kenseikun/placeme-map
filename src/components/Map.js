import React, { useState } from "react";

import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import { Button } from "@material-ui/core";


const Map = ({ position }) => {
  const [map, setMap] = useState(null);


  const FlyToButton = () => {
    const onClick = () => {
      map.flyTo(position, 12);
    };

    return (
      <Button onClick={onClick} variant="contained" color="secondary">
        Move to your direction
      </Button>
    );
  };

  return (
    <>
      <div className="coordinates">
        <p>latitude: {`${position[0]}`}</p>
        <p>longitude: {`${position[1]}`}</p>
        <FlyToButton />
      </div>
      <div className="map__container">
        <MapContainer center={position} zoom={12} whenCreated={setMap}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>Hello :D</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
