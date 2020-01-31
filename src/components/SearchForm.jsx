import React, { Component } from "react";

/* ---------- SEARCH INPUT AND BUTTON ---------- */
class SearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="search-form">
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
