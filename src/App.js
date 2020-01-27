import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./screens/Main";
import Directions from "./components/Directions";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posX: 1,
      posY: 0,
      arrX: [0, 1, 2, 3, 4, 5],
      arrY: [0, 1],
      headTitle: "musYXearch",
      searchInput: "",
      currentArtist: ""
    };
  }
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
        />
        <Main
          isLoading={this.state.isLoading}
          posX={this.state.posX}
          posY={this.state.posY}
          searchInput={this.state.searchInput}
          currentArtist={this.state.currentArtist}
        />
      </div>
    );
  }
}

export default App;
