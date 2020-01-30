import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./screens/Main";
import Directions from "./components/Directions";
import Header from "./components/Header";

import { searchArtist, fetchDiscography, fetchRelease } from "./API";
import About from "./screens/About";
import Artist from "./screens/Artist";
import PicList from "./screens/PicList";
import Search from "./screens/Search";
import Release from "./screens/Release";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posX: 1,
      posY: 0,
      arrX: ["About", "Search", "Artist", "Album", "EP", "Single"],
      arrY: [],
      headTitle: "musYXearch",
      searchInput: "",
      currentArtist: "",
      currentRelease: []
    };
    this.reducePosition = this.reducePosition.bind(this);
    this.increasePosition = this.increasePosition.bind(this);
  }

  /* ---------- INCREMENT SCREEN POSITIONS ---------- */
  reducePosition(dir) {
    this.setState(prevState => ({
      [dir]: prevState[dir] - 1
    }));
  }
  increasePosition(dir) {
    this.setState(prevState => ({
      [dir]: prevState[dir] + 1
    }));
  }

  /* ---------- DETERMINE RELEASE CATEGORY ---------- */
  category = () => {
    if (this.state.posX === 3) {
      return "album";
    } else if (this.state.posX === 4) {
      return "EP";
    } else if (this.state.posX === 5) {
      return "single";
    }
  };

  /* ---------- CHANGE CURRENT SCREEN BASED ON posX ---------- */
  renderScreenX = () => {
    switch (this.state.posX) {
      case 0:
        return <About />;
      case 1:
        return (
          <Search
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            setCurrentArtist={this.setCurrentArtist}
            searchInput={this.state.searchInput}
            currentArtist={this.state.currentArtist}
          />
        );
      case 2:
        return (
          <Artist {...this.props} currentArtist={this.state.currentArtist} />
        );
      case 3:
        return (
          <PicList
            {...this.props}
            handleDiscography={this.handleDiscography}
            category={this.category}
            isLoading={this.state.isLoading}
            posX={this.state.posX}
            posY={this.state.posY}
            arr={this.state.arrY}
          />
        );
      case 4:
        {
          // console.log("state 4");
        }
        return (
          <PicList
            {...this.props}
            handleDiscography={this.handleDiscography}
            category={this.category}
            isLoading={this.state.isLoading}
            posX={this.state.posX}
            posY={this.state.posY}
            arr={this.state.arrY}
          />
        );
      case 5:
        return (
          <PicList
            {...this.props}
            handleDiscography={this.handleDiscography}
            category={this.category}
            isLoading={this.state.isLoading}
            posX={this.state.posX}
            posY={this.state.posY}
            arr={this.state.arrY}
          />
        );
      default:
    }
  };

  /* ---------- CHANGE CURRENT SCREEN BASED ON posY ---------- */
  renderScreenY = () => {
    const posX = this.state.posX;
    let posY = this.state.posY;
    let maxY = this.state.arrY.length;
    if (posY <= maxY) {
      return posY === 0 ? (
        this.renderScreenX()
      ) : posX < 2 ? (
        (posY = 0)
      ) : (
        <Release {...this.props} currentArtist={this.state.currentArtist} />
      );
    }
  };

  /* ---------- UPDATE searchInput STATE ---------- */
  handleInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  /* ---------- UPDATE currentArtist STATE ---------- */
  setCurrentArtist = data => {
    this.setState({ currentArtist: data });
  };

  /* ---------- FETCH ARTIST DATA ---------- */
  handleSubmit = async e => {
    e.preventDefault();
    const query = this.state.searchInput;
    const artistData = await searchArtist(query);
    this.setCurrentArtist(artistData);
    this.increasePosition("posX");
    // console.log("artistData", artistData);
  };

  /* ---------- FETCH DISCOGRAPHY ---------- */
  handleDiscography = async () => {
    // console.log("handleDiscography", this.state.posX);
    const artist = this.state.currentArtist[1].name;
    let releaseType = "";
    switch (this.state.posX) {
      case 3:
        // console.log("here 3");
        releaseType = "album";
        break;
      case 4:
        // console.log("now here 4");
        releaseType = "EP";
        break;
      case 5:
        releaseType = "single";
        break;
      default:
        releaseType = "album";
        break;
    }
    const releaseArr = await fetchDiscography(artist, releaseType);
    this.setState({ arrY: releaseArr.results, isLoading: false });
    // console.log("arrY", this.state.arrY);
  };

  /* ---------- RENDER ---------- */
  render() {
    // console.log("APP PROPS", ...this.props);
    return (
      <div className="App">
        <h1>APP</h1>
        <Header headTitle={this.state.headTitle} />
        {/* <Route
          exact
          path="/"
          component={match => {
            return ( */}
        <Directions
          {...this.props}
          // match={match}
          posX={this.state.posX}
          posY={this.state.posY}
          arrX={this.state.arrX}
          arrY={this.state.arrY}
          currentArtist={this.state.currentArtist}
          handleDiscography={this.handleDiscography}
          renderScreenX={this.renderScreen}
          renderScreenY={this.renderScreenY}
          reducePosition={this.reducePosition}
          increasePosition={this.increasePosition}
        />
        {/* );
          }}
        /> */}
        {/* thanks to Corey for figuring out this switchy workaround to get the release screen to render properly */}
        <Switch>
          <Route exact path="/">
            <Main
              {...this.props}
              isLoading={this.state.isLoading}
              posX={this.state.posX}
              posY={this.state.posY}
              searchInput={this.state.searchInput}
              currentArtist={this.state.currentArtist}
              renderScreenX={this.renderScreenX}
              renderScreenY={this.renderScreenY}
              handleInputChange={this.handleInputChange}
            />
          </Route>
          <Route
            exact
            path="/releases/:release_id"
            component={match => (
              <Release
                {...this.props}
                match={match}
                handleRelease={this.handleRelease}
                currentRelease={this.state.currentRelease}
                arrY={this.state.arrY}
                posY={this.state.posY}
                isLoading={this.state.isLoading}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
