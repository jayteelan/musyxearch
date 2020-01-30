import React, { Component } from "react";
import TrackList from "../components/TrackList";
import { fetchRelease } from "../API";
import Directions from "../components/Directions";
import { Link } from "react-router-dom";

class Release extends Component {
  constructor(props) {
    super(props);
    console.log("Release props", this.props);
    // this.setState({ releaseProps: this.props });
    // console.log("release", props.match.match.params.release_id);
    // this.state = {
    //   // demDeets: []
    //   // releaseLoad: false
    // };
  }

  componentDidMount = async () => {
    if (!this.props.releaseLoad) {
      await this.props.handleRelease(this.props.match.match.params.release_id);
    }
  };
  // }

  /* ---------- RENDER ---------- */
  render() {
    // const info = this.state.demDeets;
    // const guard = this.state.releaseLoad;
    const info = this.props.currentRelease;

    console.log("currentRelease", info);

    // const nextIndex = this.props.posY + 2;
    // // console.log("posY", this.props.posY);
    // // console.log("next", nextIndex);
    // const nextReleaseId = this.props.arrY[nextIndex].id;

    return (
      <div className="release">
        {/* <Link to="/">
          <i className="material-icons left">arrow_back</i>
        </Link> */}
        {/* <Directions /> */}
        <img src={info && info.images && info.images[0].resource_url} />
        <h1>{info && info.images && info.title}</h1>
        <p>released {info && info.images && info.year}</p>
        <TrackList tracks={info && info.images && info.tracklist} info={info} />
      </div>
    );
  }
}

export default Release;
