import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Root.scss";

import { CircularProgress } from "@material-ui/core";
import Form from "../components/Form";
import Map from "../components/Map";

const Root = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [isLoading, setIsLoading] = useState(true);

  const latitudeValidation =
    "^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?[0-8]\\d((\\.)|\\.\\d{1,6})?)|(0*?90((\\.)|\\.0{1,6})?))$";
  const longitudeValidation =
    "^(\\+|-)?((\\d((\\.)|\\.\\d{1,6})?)|(0*?\\d\\d((\\.)|\\.\\d{1,6})?)|(0*?1[0-7]\\d((\\.)|\\.\\d{1,6})?)|(0*?180((\\.)|\\.0{1,6})?))$";

  const getCoordinates = () => {
    axios
      .get(`https://devcube.placeme.pl/api/getGeoJSON?lat=51.12&lng=20.12`)
      .then((response) => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCoordinates();
  }, []);

  const setCoordinates = (e) => {
    e.preventDefault();
    const latitude = +e.target.lat.value;
    const longitude = +e.target.lon.value;

    setPosition([latitude, longitude]);

    e.target.reset();
  };


  return (
    <>
      {!isLoading ? (
        <>
          <Form setCoordinates={setCoordinates} />
          <Map position={position} />
        </>
      ) : (
        <>
          <CircularProgress color="secondary" />
        </>
      )}
    </>
  );
};

export default Root;
