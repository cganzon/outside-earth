import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Asteroids from "./pages/Asteroids";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/asteroids" component={Asteroids} />
      </Router>
    </div>
  );
}

export default App;
