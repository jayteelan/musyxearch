import React from "react";
import { Link } from "react-router-dom";

const About = props => {
  console.log("current position (X,Y)", props.posX, props.posY);

  return (
    <div className="about">
      <h1>musyXearch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deserunt
        quidem impedit, reprehenderit, laborum beatae rem corporis quae animi
        accusamus tempora consequatur quam odio blanditiis non modi sit incidunt
        <br />
        <br />
        background image from{" "}
        <a href="https://www.pexels.com" target="_blank">
          Pexels
        </a>
        <br />
        thanks to{" "}
        <a href="https://www.discogs.com" target="_blank">
          Discogs
        </a>{" "}
        for all the great data
        <br /> &copy; 2020 Jeffrey Lan
      </p>
    </div>
  );
};

export default About;
