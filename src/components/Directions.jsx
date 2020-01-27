import React, { Component } from "react";

class Directions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      // conditional rendering for pos=0 or pos=arr.length-1
      <div className="directions">
        <p>DIRECTIONS</p>
        <i class="material-icons">arrow_upward</i>
        <i class="material-icons">arrow_back</i>
        <i class="material-icons">arrow_forward</i>
        <i class="material-icons">arrow_downward</i>
      </div>
    );
  }
}

export default Directions;
