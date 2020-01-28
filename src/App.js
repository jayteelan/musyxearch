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
      posY: 3,
      arrX: [
        "About",
        "Search",
        "Artist",
        "Album",
        "Single",
        "Other",
        "Release"
      ],
      arrY: [
        "Debut",
        "Post",
        "Homogenic",
        "Vespertine",
        "Medulla",
        "Volta",
        "Biophilia",
        "Vulnicura",
        "Utopia"
      ],
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
        // console.log("posX", this.state.posX);
        return <About />;
      case 1:
        // console.log("posX", this.state.posX);
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
        // console.log("posX", this.state.posX);
        return <Artist currentArtist={this.state.currentArtist} />;
      case 3:
        // console.log("posX", this.state.posX);
        return (
          <PicList
            {...this.props}
            posX={this.state.posX}
            posY={this.state.posY}
            arr={this.state.arrY}
            // onShow={this.handleDiscography}
          />
        );
      case 4:
        // console.log("posX", this.state.posX);
        return (
          <PicList
            {...this.props}
            posX={this.state.posX}
            arr={this.state.arrY}
          />
        );
      case 5:
        // console.log("posX", this.state.posX);
        return (
          <PicList
            {...this.props}
            posX={this.state.posX}
            arr={this.state.arrY}
          />
        );
      case 6:
        return <Release posX={this.state.posX} arr={this.state.arrY} />;
      default:
        return <p>an unexpected error occurred</p>;
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
    console.log(artistData);
    this.handleDiscography();
  };

  /* ---------- FETCH DISCOGRAPHY ---------- */
  // this.state.posX determines format
  handleDiscography = async () => {
    const artist = this.state.currentArtist.name;
    console.log("woot", artist);
    const albumList = await fetchDiscography(artist, "album");
    this.setState({ arrY: albumList.results });
    console.log("arrY", this.state.arrY);
    // switch (this.state.posX) {
    // 	case 3:
    // 		this.setState()
    // }
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
          renderScreenX={this.renderScreen}
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
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
