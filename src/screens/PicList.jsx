import React from "react";
import { Route } from "react-router-dom";
import PicListItem from "../components/PicListItem";
import Release from "./Release";

/* ---------- LIST OF QUERY RESULTS WITH THUMBNAIL PICS ---------- */
const PicList = props => {
  return (
    <div className="piclist">
      <h1>{props.category()}s</h1>

      <PicListItem {...props} />
      <Route
        exact
        path="/releases/:release_id"
        component={props => {
          return (
            <Release
              {...props}
              release_id={props.match.params.release_id}
              hed={this.state.headTitle}
            />
          );
        }}
      />
    </div>
  );
};

export default PicList;
