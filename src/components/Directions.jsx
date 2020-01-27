import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Directions extends Component {
  constructor(props) {
    super(props);
    console.log("direction", props);
    this.goUp = this.goUp.bind(this);
  }
  /* ---------- UPDATE posX/Y STATES ---------- */
  goUp(e) {
    // e.stopPropagation();

    console.log("up", this.props.posY);
    if (this.props.posY !== 0) {
      this.props.updatePosition("posY");
    }
  }

  goDown = e => {
    e.stopPropagation();

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
    console.log("right", this.props.posX);
    if (this.props.posX !== 0) {
      this.props.updatePosition("posX");
    }
  };

  goRight = e => {
    e.stopPropagation();
    console.log("right", this.props.posX);
    // console.log("plus1", this.props.posX + 1);
    return this.props.posX === this.props.arrX.length - 1 ? (
      <div></div>
    ) : (
      this.setState(prevState => ({
        posX: prevState.posX + 1
      }))
      // this.updateX()
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
