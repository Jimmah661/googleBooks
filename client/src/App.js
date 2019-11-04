import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import "./App.css";

function App() {
    return (
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
