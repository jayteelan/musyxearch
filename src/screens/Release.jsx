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
    return (
      <div className="release">
        <h1>{this.state.releaseLoad && this.state.demDeets.title}</h1>
        <p>{this.state.releaseLoad && this.state.demDeets.title}</p>
        <TrackList
          demDeets={this.state.demDeets}
          releaseLoad={this.state.releaseLoad}
        />
      </div>
    );
  }
}

export default Release;
