import React from "react";

const About = props => {
  console.log("current position (X,Y)", props.posX, props.posY);

  return (
    <div className="about">
      <h1>ABOUT</h1>
    </div>
  );
};

export default About;
