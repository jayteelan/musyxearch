import React from "react";

const About = props => {
  console.log("current position (X,Y)", props.posX, props.posY);

  return (
    <div className="about">
      <h1>musyXearch</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deserunt
        quidem impedit, reprehenderit, laborum beatae rem corporis quae animi
        accusamus tempora consequatur quam odio blanditiis non modi sit incidunt
        mollitia!
      </p>
      <p>&copy; 2020 Jeffrey Lan</p>
    </div>
  );
};

export default About;
