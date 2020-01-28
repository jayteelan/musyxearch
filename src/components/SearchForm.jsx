import React, { Component } from "react";
import { searchArtist, fetchDiscography } from "../API";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    console.log("form", props);
    // this.props.handleChange = this.props.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    let query = this.props.searchInput;
    searchArtist(query);
  };

  render() {
    return (
      <form className="search-form">
        <h1>SEARCHFORM</h1>
        <input
          type="text"
          name="searchbar"
          placeholder="enter an artist name"
          onChange={this.props.handleChange}
        />
        <button onClick={this.handleSubmit}>Start</button>
      </form>
    );
  }
}

export default SearchForm;
