import React from "react";
import { Route } from "react-router-dom";
import ResultList from "../components/ResultList";
import Release from "./Release";

const PicList = props => {
  console.log("picList", props);
  const category = () => {
    if (props.posX === 3) {
      return "Albums";
    } else if (props.posX === 4) {
      return "Singles and EPs";
    } else if (props.posX === 5) {
      return "Other Releases";
    }
  };
  return (
    <div className="piclist">
      <h1>{category()}</h1>
      <ul>
        <ResultList {...props} />
      </ul>
    </div>
  );
};

export default PicList;
