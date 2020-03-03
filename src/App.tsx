// https://blog.crowdbotics.com/setup-a-react-app-with-typescript-storybook-and-crowdbotics/
import path = require("path");
import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const logoFileImage = path.resolve(__dirname, "../images/logo.svg");

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logoFileImage} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>./src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
