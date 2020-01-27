import React, { Component } from "react";

class Directions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 1,
      posY: 0,
      arrX: [0, 1, 2, 3, 4, 5],
      arrY: [0, 1]
    };
    console.log(props);
  }
  /* ---------- UPDATE posX/Y STATES ---------- */
  goUp = e => {
    console.log("up", this.state.posY);
    return this.state.posY === 0 ? (
      <div></div>
    ) : (
      this.setState(prevState => ({
        posY: prevState.posY - 1
      }))
    );
  };

  goDown = e => {
    console.log("down", this.state.posY);
    return this.state.posY === this.state.arrY.length - 1 ? (
      <div></div>
    ) : (
      this.setState(prevState => ({
        posY: prevState.posY + 1
      }))
    );
  };

  goLeft = e => {
    console.log("left", this.state.posX);
    return this.state.posX === 0 ? (
      <div></div>
    ) : (
      this.setState(prevState => ({
        posX: prevState.posX - 1
      }))
    );
  };

  goRight = e => {
    console.log("right", this.state.posX);
    return this.state.posX === this.state.arrX.length - 1 ? (
      <div></div>
    ) : (
      this.setState(prevState => ({
        posX: prevState.posX + 1
      }))
    );
  };

  render() {
    return (
      // conditional rendering for pos=0 or pos=arr.length-1
      <div className="directions">
        <p>DIRECTIONS</p>
        <i className="material-icons" onClick={this.goUp}>
          arrow_upward
        </i>
        <i className="material-icons" onClick={this.goLeft}>
          arrow_back
        </i>
        <i className="material-icons" onClick={this.goRight}>
          arrow_forward
        </i>
        <i className="material-icons" onClick={this.goDown}>
          arrow_downward
        </i>
      </div>
    );
  }
}

export default Directions;
