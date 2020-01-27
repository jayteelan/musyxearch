import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
