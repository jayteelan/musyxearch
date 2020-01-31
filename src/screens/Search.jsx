import React, { Component } from "react";
import SearchForm from "../components/SearchForm";

/* ---------- HOMESCREEN ---------- */
class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <h1>musyXearch</h1>
        <SearchForm {...this.props} />
      </div>
    );
  }
}

export default Search;
