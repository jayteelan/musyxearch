import React, { Component } from "react";
import TrackList from "../components/TrackList";
import { fetchRelease } from "../API";
import Directions from "../components/Directions";
import { Link } from "react-router-dom";
import "../css/release.css";
import "../css/desktop.css";

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
    // this.setState({ hed: info && info.title });

    // const nextIndex = this.props.posY + 2;
    // // console.log("posY", this.props.posY);
    // // console.log("next", nextIndex);
    // const nextReleaseId = this.props.arrY[nextIndex].id;
    // return "https://i.imgflip.com/3noj5y.jpg";

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
