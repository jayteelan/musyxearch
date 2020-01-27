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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posX: 3,
      posY: 2,
      arrX: [0, 1, 2, 3, 4, 5],
      arrY: [0, 1],
      headTitle: "musYXearch",
      searchInput: "",
      currentArtist: ""
    };
    this.updatePosition = this.updatePosition.bind(this);
  }
  updatePosition(dir) {
    this.setState(prevState => ({
      [dir]: prevState[dir] - 1
    }));
  }
  /* ---------- CHANGE CURRENT SCREEN BASED ON posX ---------- */
  renderScreen = () => {
    switch (this.state.posX) {
      case 0:
        console.log("posX", this.state.posX);
        return <About />;
      case 1:
        console.log("posX", this.state.posX);
        return <Search />;
      case 2:
        console.log("posX", this.state.posX);
        return <Artist />;
      case 3:
        console.log("posX", this.state.posX);
        return <PicList />;
      case 4:
        console.log("posX", this.state.posX);
        return <PicList />;
      case 5:
        console.log("posX", this.state.posX);
        return <PicList />;
      default:
        return <p>an unexpected error occurred</p>;
    }
  };

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
          updatePosition={this.updatePosition}
        />
        <Main
          isLoading={this.state.isLoading}
          posX={this.state.posX}
          posY={this.state.posY}
          searchInput={this.state.searchInput}
          currentArtist={this.state.currentArtist}
          renderScreen={this.renderScreen}
        />
      </div>
    );
  }
}

export default App;
