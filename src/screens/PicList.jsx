import React from "react";
import { Route } from "react-router-dom";
import ResultList from "../components/ResultList";
import Release from "./Release";

const PicList = props => {
  // console.log("picList", props);

  const category = () => {
    if (props.posX === 3) {
      return "Albums";
    } else if (props.posX === 4) {
      return "EPs";
    } else if (props.posX === 5) {
      return "Singles";
    }
  };

  return (
    <div className="piclist">
      <h1>{category()}</h1>
      <ResultList {...props} />
      {/* <Route
        exact
        path="/:release_id"
        component={props => {
          return <Release release-id={props.match.params.release_id} />;
        }}
      /> */}
    </div>
  );
};

export default PicList;
