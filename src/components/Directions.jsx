import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

class Directions extends Component {
  constructor(props) {
    super(props);
    // console.log("direction", props);
    this.goUp = this.goUp.bind(this);
    this.goDown = this.goDown.bind(this);
  }
  /* ---------- UPDATE posX/Y STATES ---------- */
  goUp = e => {
    // console.log("Y", this.props.posY);
    if (this.props.posY > 0) {
      this.props.reducePosition("posY");
    }
    console.log("current position (X,Y)", this.props.posX, this.props.posY);
  };

  goDown = e => {
    // console.log("Y", this.props.posY);
    console.log("arrY", this.props.arrY.length);
    if (this.props.posX > 2 && this.props.posY < this.props.arrY.length) {
      this.props.increasePosition("posY");
    } else {
      this.setState({ posY: 0 });
    }
    console.log("current position (X,Y)", this.props.posX, this.props.posY);
  };

  goLeft = e => {
    // console.log("X", this.props.posX);
    if (this.props.posX !== 0) {
      this.props.reducePosition("posX");
    }
    console.log("current position (X,Y)", this.props.posX, this.props.posY);
  };

  goRight = e => {
    e.stopPropagation();
    // console.log("X", this.props.posX);
    if (
      (this.props.currentArtist === "" && this.props.posX === 0) ||
      (this.props.currentArtist !== "" &&
        this.props.posX < this.props.arrX.length - 1)
    ) {
      this.props.increasePosition("posX");
      console.log("current position (X,Y)", this.props.posX, this.props.posY);
    }
  };
  /* ---------- RENDER ---------- */
  render() {
    return (
      // conditional rendering for pos=0 or pos=arr.length-1
      <div className="directions">
        <p>DIRECTIONS</p>
        <i className="material-icons" onClick={e => this.goUp(e)}>
          arrow_upward
        </i>
        <i className="material-icons" onClick={e => this.goLeft(e)}>
          arrow_back
        </i>
        <i className="material-icons" onClick={e => this.goRight(e)}>
          arrow_forward
        </i>
        <i className="material-icons" onClick={e => this.goDown(e)}>
          arrow_downward
        </i>
      </div>
    );
  }
}

export default Directions;
