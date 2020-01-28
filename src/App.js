import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./screens/Main";
import Directions from "./components/Directions";
import Header from "./components/Header";

import { searchArtist, fetchDiscography } from "./API";
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
      arrY: ["jello", "fries", "soda"],
      headTitle: "musYXearch",
      searchInput: "",
      currentArtist: ""
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
        return <Artist currentArtist={this.state.currentArtist} />;
      case 3:
        return (
          <PicList
            {...this.props}
            posX={this.state.posX}
            posY={this.state.posY}
            arr={this.state.arrY}
          />
        );
      case 4:
        return (
          <PicList
            {...this.props}
            posX={this.state.posX}
            arr={this.state.arrY}
          />
        );
      case 5:
        return (
          <PicList
            {...this.props}
            posX={this.state.posX}
            arr={this.state.arrY}
          />
        );
      default:
        return console.log("oops");
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
      ) : posX <= 2 ? (
        (posY = 0)
      ) : (
        <Release />
      );
      // } else {
      //   return (posY = 0);
    }
    // // return this.state.posY === 0 ? (
    //   this.renderScreenX()
    // ) : this.state.posX <= 2 ? (
    //   this.state.posY === 0
    // ) : this.state.posY < this.state.arrY.length - 1 ? (
    //   <Release />
    // ) : (
    //   this.state.posY === this.state.arrY.length - 1
    // );
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
    console.log(artistData);
  };

  /* ---------- FETCH DISCOGRAPHY ---------- */
  handleDiscography = async () => {
    const artist = this.state.currentArtist.name;
    let releaseType = "";
    switch (this.state.posX) {
      case 3:
        releaseType = "album";
        break;
      case 4:
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
    this.setState({ arrY: releaseArr.results });
    console.log("arrY", this.state.arrY);
  };

  /* ---------- RENDER ---------- */
  render() {
    return (
      <div className="App">
        <h1>APP</h1>
        <Header headTitle={this.state.headTitle} />
        <Directions
          posX={this.state.posX}
          posY={this.state.posY}
          arrX={this.state.arrX}
          arrY={this.state.arrY}
          handleDiscography={this.handleDiscography}
          renderScreenX={this.renderScreen}
          renderScreenY={this.renderScreenY}
          reducePosition={this.reducePosition}
          increasePosition={this.increasePosition}
        />
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
      </div>
    );
  }
}

export default App;
