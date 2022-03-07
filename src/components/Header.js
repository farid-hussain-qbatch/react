import React from "react";
import PropTypes from "prop-types";
import MButton from "@mui/material/Button";

const Header = ({ name, title, setTasks, tasks }) => {
  // console.log(name);
  const changeState = () => {
    setTasks();
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <h1>{name}</h1>
      <MButton onClick={changeState}>Change State</MButton>
    </header>
  );
};
Header.prototype = {
  title: PropTypes.string.isRequired,
};
export default Header;
