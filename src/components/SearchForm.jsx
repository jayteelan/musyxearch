import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    // console.log("form", props);
  }

  render() {
    return (
      <form className="search-form">
        <h1>SEARCHFORM</h1>
        <input
          type="text"
          name="searchbar"
          placeholder="enter an artist name"
          onChange={this.props.handleInputChange}
        />
        <button onClick={this.props.handleSubmit}>Start</button>
      </form>
    );
  }
}

export default SearchForm;
