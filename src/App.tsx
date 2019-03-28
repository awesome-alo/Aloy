import React from "react";
import Home from "./components/Home/App";
import AppBar from "./components/AppBar/App";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="global-layout">
          <AppBar />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
