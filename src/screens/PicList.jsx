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

  // const handleLoading = () => {
  //   return props.isLoading === true ? (
  //     <h1>Loading...</h1>
  //   ) : (
  //     <ResultList {...props} />
  //   );
  // };

  return (
    <div className="piclist">
      <h1>{category()}</h1>
      {/* {handleLoading()} */}

      <ResultList {...props} />
      <Route
        exact
        path="/releases/:release_id"
        component={props => {
          return <Release release-id={props.match.params.release_id} />;
        }}
      />
    </div>
  );
};

export default PicList;
