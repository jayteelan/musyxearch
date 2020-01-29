import React, { Component } from "react";
import TrackList from "../components/TrackList";
import { fetchRelease } from "../API";

class Release extends Component {
  constructor(props) {
    super(props);
    // console.log("release", props.match.match.params.release_id);
  }
  handleRelease = async () => {
    const releaseDeets = await fetchRelease(
      this.props.match.match.params.release_id
    );
    this.setState({ currentRelease: releaseDeets.results, isLoading: false });
    console.log("handleRelease", this.props.arrY);
  };

  componentDidMount() {
    this.handleRelease();
  }

  /* ---------- RENDER ---------- */
  render() {
    console.log("props", this.props.currentRelease);
    return (
      <div className="release">
        <h1>RELEASE</h1>
        <TrackList />
      </div>
    );
  }
}

export default Release;
