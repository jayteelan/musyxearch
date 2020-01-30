import React from "react";
// import axios from "axios";
// import Router from "react-router-dom";
import "../css/main.css";

const Main = props => {
  return (
    <div className="Main">
      {props.renderScreenY()}
    </div>
  );
};

export default Main;
