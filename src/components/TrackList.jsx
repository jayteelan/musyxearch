import React from "react";
import { fetchRelease } from "../API";

const TrackList = props => {
  console.log("tracklist", props);
  const showTime = track => {
    if (props.guard && track.duration.length !== 0) {
      return `[${props.guard && track.duration}]`;
    }
  };
  return (
    <ol className="track-list">
      {props.guard &&
        props.tracks.map(track => {
          return (
            <li>
              <span className="track-title">{props.guard && track.title}</span>
              <span className="running-time">{showTime(track)}</span>
            </li>
          );
        })}
    </ol>
  );
};

export default TrackList;
