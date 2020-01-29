import React from "react";

const Artist = props => {
  console.log("artist", props);
  return (
    <div className="artist">
      <h1>{props.currentArtist[0].title}</h1>
      <img src={props.currentArtist[0].cover_image} alt="profile_photo" />
      <p>{props.currentArtist[1].profile}</p>
    </div>
  );
};

export default Artist;
