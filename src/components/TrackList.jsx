import React from "react";

/* ---------- PARSES API DATA AND RETURNS A LIST OF TRACKS ---------- */
const TrackList = props => {
  const showTime = track => {
    if (props.info && track.duration.length !== 0) {
      return `[${props.info && track.duration}]`;
    }
  };

  return (
    // this was originally an <ol>, but the numbers showed up to the left of the box around the list (i.e., in the margin), so I turned it into a <ul> and relied on the API for track numbers instead
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
