/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import User from "./utils/Stores/User";
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
import {
  Navbar
} from "./components";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <User.Provider>
          <Navbar />
          <Routes />
        </User.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
