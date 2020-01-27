import React, { Component } from "react";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  constructor(props) {
    super(props);
    console.log("search", props);

    this.state = {};
  }

  render() {
    return (
      <div className="search">
        <h1>SEARCH</h1>
        <SearchForm {...this.props} />
      </div>
    );
  }
}

export default Search;
