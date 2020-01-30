import React from "react";
import "../css/desktop.css";

const Artist = props => {
  // console.log("artist", props);
  console.log("current position (X,Y)", props.posX, props.posY);

  return (
    <div className="artist">
      <h1 className="grid-title">{props.currentArtist[0].title}</h1>
      <img
        src={props.currentArtist[0].cover_image}
        alt="profile_photo"
        className="grid-pic"
      />
      <p className="grid-text">{props.currentArtist[1].profile}</p>
    </div>
  );
};

export default Artist;
