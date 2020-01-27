import React, { Component } from "react";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="search">
        <h1>SEARCH</h1>
        <SearchForm />
      </div>
    );
  }
}

export default Search;
