import React, { Component } from "react";
import fetchDiscography from "../API";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    console.log("form", props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit = e => {
  // 	e.preventDefault();
  // 	let query=
  // }

  render() {
    return (
      <form className="search-form">
        <h1>SEARCHFORM</h1>
        <input type="text" placeholder="enter an artist name" />
        <button>Start</button>
      </form>
    );
  }
}

export default SearchForm;
