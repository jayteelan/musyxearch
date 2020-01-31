import React, { Component } from "react";
import TrackList from "../components/TrackList";
import "../css/release.css";
import "../css/desktop.css";

/* ---------- DETAILED INFORMATION ON A SELECTED RELEASE ---------- */
class Release extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    if (!this.props.releaseLoad) {
      await this.props.handleRelease(this.props.match.match.params.release_id);
    }
  };

  render() {
    const info = this.props.currentRelease;

    return (
      <div className="release">
        <i class="material-icons close" onClick={() => window.close()}>
          close
        </i>
        {/* <div className="title-pic"> */}
        <h1 className="grid-title">{info && info.title}</h1>
        <img src={info && info.images[0].resource_url} className="grid-pic" />
        {/* </div> */}

        <div className="info-text grid-text">
          <h3>released {info && info.year}</h3>
          <TrackList tracks={info && info.tracklist} info={info} />
        </div>
      </div>
    );
  }
}

export default Release;
