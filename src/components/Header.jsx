import React from "react";
import { Route, Link } from "react-router-dom";
import Search from "../screens/Search";

const Header = props => {
  return (
    <div className="header">
      <h1>{props.headTitle}</h1>
    </div>
  );
};

export default Header;
