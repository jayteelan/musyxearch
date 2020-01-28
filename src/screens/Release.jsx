import React, { Component } from "react";
import TrackList from "../components/TrackList";

class Release extends Component {
  constructor(props) {
    super(props);
    console.log("release", props);
  }

  // RELEASE COMPONENT NEEDS TO CHANGE posY on render

  /* ---------- RENDER ---------- */
  render() {
    console.log("release");
    return (
      <div className="release">
        <h1>RELEASE</h1>
        <TrackList />
      </div>
    );
  }
}

export default Release;
