import React from "react";
import { Route } from "react-router-dom";
import PicListItem from "../components/PicListItem";
import Release from "./Release";

const PicList = props => {
  // console.log(props.arr);
  return (
    <div className="piclist">
      <h1>{props.category()}s</h1>

      <PicListItem {...props} />
      <Route
        exact
        path="/releases/:release_id"
        component={props => {
          console.log("PicList props", props);
          return (
            <Release {...props} release_id={props.match.params.release_id} />
          );
        }}
      />
    </div>
  );
};

export default PicList;
