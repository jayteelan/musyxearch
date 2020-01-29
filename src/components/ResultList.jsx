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
  parseTitle = title => {
    reactStringReplace(`${title}`, `${this.props.artist} - `, () => "");
  };
  render() {
    // const artist = this.props.artist;
    const albums = this.props.arr;
    const parsedAlbums = albums.map(album => this.parseTitle(`${album.title}`));

    console.log(parsedAlbums);

    return (
      <div className="li">
        {albums.map(album => {
          return (
            <li key={album.id} id={album.id}>
              <Link to={`/releases/${album.id}`}>
                <img src={album.thumb} alt="thumbnail" />{" "}
                {!this.props.isLoading && album.title}
                {/* {this.parseTitle({ [album.title]})} */}
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
