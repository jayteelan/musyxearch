import React from "react";
import { Route, Link } from "react-router-dom";
import Release from "../screens/Release";

const ResultList = props => {
  console.log("resultlist", props);

  return (
    <ul className="result-list">
      {props.arr.map((item, i) => (
        <li key={`${item}[${i}]`}>
          <Link key={props.arr[i]} to={item}>
            {/* image */}
            {item}
          </Link>
        </li>
      ))}

      {/* link each li to Release[posY] */}
      {/* <Route
        exact
        path="/:release_id"
        component={props => {
          return <Release release-id={props.match.params.release_id} />;
        }}
      /> */}
    </ul>
  );
};

export default ResultList;
