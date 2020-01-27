import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import "./App.css";
import Main from "./screens/Main";
import Directions from "./components/Directions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posX: 1,
      posY: 0,
      searchInput: "",
      currentArtist: ""
    };
  }
  render() {
    return (
      <div className="App">
        <h1>APP</h1>
        <Directions posX={this.state.posX} posY={this.state.posY} />
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
