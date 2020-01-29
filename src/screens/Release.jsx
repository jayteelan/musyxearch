import React, { Component } from "react";
import TrackList from "../components/TrackList";
import { fetchRelease } from "../API";

class Release extends Component {
  constructor(props) {
    super(props);
    // console.log("release", props.match.match.params.release_id);
    this.state = {
      releaseLoad: false
    };
  }

  /* ---------- FETCH RELEASE DATA ---------- */
  handleRelease = async () => {
    const releaseDeets = await fetchRelease(
      this.props.match.match.params.release_id
    );
    this.setState({ demDeets: releaseDeets, releaseLoad: true });
  };

  componentDidMount() {
    this.handleRelease();
  }
  // }

  /* ---------- RENDER ---------- */
  render() {
    console.log("render", this.state.releaseLoad, this.state.demDeets);
    const info = this.state.demDeets;
    const guard = this.state.releaseLoad;
    return (
      <div className="release">
        <img src={guard && info.images[0].resource_url} />
        <h1>{guard && info.title}</h1>
        <p>released {guard && info.year}</p>
        <TrackList tracks={guard && info.tracklist} guard={guard} />
      </div>
    );
  }
}

export default Release;
