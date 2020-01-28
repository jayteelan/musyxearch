import React from "react";
import { Route, Link } from "react-router-dom";
import Release from "../screens/Release";

const ResultList = props => {
  console.log("resultlist", props);

  return (
    <div className="li">
      {props.arr.map((item, i) => (
        <li key={`${item}[${i}]`}>
          <Link
            key={props.arr[i]}
            to={`/releases/${props.arr[i]}`}
            // onClick={props.setPosX6}
          >
            {/* image */}
            {item}
          </Link>
        </li>
      ))}

      {/* link each li to Release[posY] */}
      <Route
        exact
        path="/releases/:release_id"
        component={props => {
          return <Release set release-id={props.match.params.release_id} />;
        }}
      />
    </div>
  );
};

export default ResultList;
