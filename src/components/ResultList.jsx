import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import Release from "../screens/Release";
import reactStringReplace from "react-string-replace";

class ResultList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.handleDiscography(this.props.artist, "album");
    this.setState({ isLoading: false });
  }

  render() {
    const albums = this.props.arr;

    return (
      <div className="li">
        {albums.map(album => {
          return (
            <li key={album.id} id={album.id}>
              <Link to={`/releases/${album.id}`}>
                <img src={album.thumb} alt="thumbnail" />{" "}
                {!this.props.isLoading &&
                  `${reactStringReplace(
                    album.title,
                    `${this.props.artist} - `,
                    () => ""
                  )}`}
                {/* ^^ parses "artist - title" to "title" */}
                {!this.props.isLoading && album.year}
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}

export default ResultList;
