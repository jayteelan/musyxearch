import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import Release from "../screens/Release";
import reactStringReplace from "react-string-replace";

class PicListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 3
    };
  }

  componentDidMount() {
    console.log("mount");
    // console.log("cat", this.props);
    this.props.handleDiscography();
    this.setState({ isLoading: false });
  }
  componentDidUpdate() {
    if (this.props.posX != this.state.pos) {
      console.log(this.props.posX);
      this.props.handleDiscography();
      this.setState({
        pos: this.props.posX
      });
    }
    // console.log(this.props.category());
    // this.props.handleDiscography(this.props.artist, `${this.props.category}`);
    // this.setState({ isLoading: false });
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

export default PicListItem;
