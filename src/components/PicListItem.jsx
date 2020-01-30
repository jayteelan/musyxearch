import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import reactStringReplace from "react-string-replace";

class PicListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 3
    };
  }

  /* ---------- RETRIEVE RELEASES FIRST TIME PicList RENDERS ---------- */
  componentDidMount() {
    // console.log("mount");
    this.props.handleDiscography();
    this.setState({ arrY: this.props.arr, isLoading: false });
  }
  /* ---------- RETRIEVE RELEASES IF posX CHANGES AND RE-RENDER ---------- */
  componentDidUpdate() {
    if (this.props.posX !== this.state.pos) {
      console.log(this.props.posX);
      this.props.handleDiscography();
      this.setState({
        pos: this.props.posX,
        arrY: this.props.arr
      });
    }
  }

  /* ---------- RENDER ---------- */
  render() {
    const albums = this.props.arr;
    return (
      <div className="li">
        {albums.map((album, i) => {
          return (
            <li key={`index${i}`} id={album.id}>
              <Link to={`/releases/${album.id}`} target="_blank">
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
