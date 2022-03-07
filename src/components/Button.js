import React from "react";
import MButton from "@mui/material/Button";

const Button = ({ onClick }) => {
  return (
    <>
      <MButton onClick={onClick} variant="text">
        Add
      </MButton>
      <MButton variant="contained">Contained</MButton>
    </>
  );
};

export default Button;
