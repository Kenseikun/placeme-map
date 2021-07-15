import React from "react";
import { Button, TextField } from "@material-ui/core";

const Form = ({setCoordinates}) => {
  return (
    <form className="form" onSubmit={(e) => setCoordinates(e)}>
      <p>Add latitude</p>
      <TextField
        type="text"
        name="lat"
        placeholder="latitude"
        variant="outlined"
      />

      <p>Add longitude</p>

      <TextField
        type="text"
        name="lon"
        placeholder="longitude"
        variant="outlined"
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="form__btn"
      >
        Confirm your data
      </Button>
    </form>
  );
};

export default Form;
