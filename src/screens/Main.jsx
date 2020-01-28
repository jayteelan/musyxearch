import React from "react";
import axios from "axios";
import Router from "react-router-dom";

const Main = props => {
  return (
    <div className="Main">
      <h1>MAIN</h1>
      {props.renderScreenY()}
    </div>
  );
};

export default Main;
