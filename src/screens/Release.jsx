import React from "react";
import TrackList from "../components/TrackList";

const Release = props => {
  return (
    <div className="release">
      <ol>
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <TrackList />
      </ol>
    </div>
  );
};

export default Release;
