import React, { Component } from "react";
import "../css/directions.css";

/* ---------- NAVIGATION BUTTONS ---------- */
class Directions extends Component {
  constructor(props) {
    super(props);
  }

  /* ---------- UPDATE posX STATES ---------- */
  goLeft = e => {
    if (this.props.posX !== 0 && this.props.posY === 0) {
      this.props.reducePosition("posX");
    }
  };

  goRight = e => {
    e.stopPropagation();
    if (
      (this.props.currentArtist === "" &&
        this.props.posX === 0 &&
        this.props.posY === 0) ||
      (this.props.currentArtist !== "" &&
        this.props.posX < this.props.arrX.length - 1 &&
        this.props.posY === 0)
    ) {
      this.props.increasePosition("posX");
    }
  };

  /* ---------- RENDER ---------- */
  render() {
    return (
      <div className="directions">
        <i className="material-icons left" onClick={e => this.goLeft(e)}>
          arrow_back
        </i>
        <i className="material-icons right" onClick={e => this.goRight(e)}>
          arrow_forward
        </i>
      </div>
    );
  }
}

export default Directions;
