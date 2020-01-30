import React from "react";
import { fetchRelease } from "../API";

const TrackList = props => {
  // console.log("tracklist", props);
  const showTime = track => {
    if (props.info && track.duration.length !== 0) {
      return `[${props.info && track.duration}]`;
    }
  };
  return (
    <ul className="track-list">
      {props.info &&
        props.tracks.map(track => {
          return (
            <li key={track.position}>
              <span className="track-number">{track.position}</span>
              <span className="track-title">{props.info && track.title}</span>
              <span className="track-time">{showTime(track)}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default TrackList;
