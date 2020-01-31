import React from "react";
import "../css/main.css";

/* ---------- CONTAINER COMPONENT FOR APP ---------- */
const Main = props => {
  return <div className="Main">{props.renderScreenY()}</div>;
};

export default Main;
