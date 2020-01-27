import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./screens/Main";
import Directions from "./components/Directions";
import Header from "./components/Header";

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
      arrX: ["About", "Search", "Artist", "Album", "Single", "Other"],
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
      searchInput: "woobly",
      currentArtist: "fleezle"
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

  /* ---------- UPDATE currentArtist ---------- */
  setArtist(e) {
    this.setState({ currentArtist: e.target.value });
  }

  /* ---------- CHANGE CURRENT SCREEN BASED ON posX ---------- */
  renderScreen = () => {
    switch (this.state.posX) {
      case 0:
        // console.log("posX", this.state.posX);
        return <About />;
      case 1:
        // console.log("posX", this.state.posX);
        return (
          <Search
            searchInput={this.state.searchInput}
            currentArtist={this.state.currentArtist}
          />
        );
      case 2:
        // console.log("posX", this.state.posX);
        return <Artist />;
      case 3:
        // console.log("posX", this.state.posX);
        return <PicList posX={this.state.posX} arr={this.state.arrY} />;
      case 4:
        // console.log("posX", this.state.posX);
        return <PicList posX={this.state.posX} arr={this.state.arrY} />;
      case 5:
        // console.log("posX", this.state.posX);
        return <PicList posX={this.state.posX} arr={this.state.arrY} />;
      default:
        return <p>an unexpected error occurred</p>;
    }
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
          renderScreen={this.renderScreen}
          reducePosition={this.reducePosition}
          increasePosition={this.increasePosition}
        />
        <Main
          isLoading={this.state.isLoading}
          posX={this.state.posX}
          posY={this.state.posY}
          searchInput={this.state.searchInput}
          currentArtist={this.state.currentArtist}
          renderScreen={this.renderScreen}
        />
        {/* <Route
          exact
          path="/:release_id"
          component={props => {
            return <Release release-id={props.match.params.release_id} />;
          }}
        /> */}
      </div>
    );
  }
}

export default App;
