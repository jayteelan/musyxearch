import React, { Component } from "react";
import { Link } from "react-router-dom";
import reactStringReplace from "react-string-replace";
import "../css/picList.css";

/* ---------- LIST OF RELEASES WITH THUMBNAILS --------- */
class PicListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos: 3
    };
  }

  /* ---------- RETRIEVE RELEASES FIRST TIME PicList RENDERS ---------- */
  componentDidMount() {
    this.props.handleDiscography();
    this.setState({ arrY: this.props.arr, isLoading: false });
  }

  /* ---------- RETRIEVE RELEASES IF posX CHANGES AND RE-RENDER ---------- */
  componentDidUpdate() {
    if (this.props.posX !== this.state.pos) {
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
      <div className="pic-li">
        <ul>
          {albums.map((album, i) => {
            return (
              <Link to={`/releases/${album.id}`} target="_blank">
                <li key={`index${i}`} id={album.id}>
                  <img src={album.thumb} alt="thumbnail" />
                  <span className="year-title">
                    <span className="year">
                      {!this.props.isLoading && album.year}
                    </span>
                    <br />
                    <span className="title">
                      {/* the API returns album titles in "Artist - Title" format,
                      so reactStringReplace gets rid of the "Artist - " bit
                      since React doesn't like str.replace() */}
                      {!this.props.isLoading &&
                        `${reactStringReplace(
                          `${album.title}`,
                          `${this.props.currentArtist} - `,
                          () => ""
                        )}`}
                    </span>
                  </span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PicListItem;
