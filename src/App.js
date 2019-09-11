import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mars from "./pages/Mars";
import Asteroids from "./pages/Asteroids";
import Rovers from "./pages/Rovers";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/mars" component={Mars} />
        <Route exact path="/asteroids" component={Asteroids} />
        <Route exact path="/rovers" component={Rovers} />
      </Router>
    </div>
  );
}

export default App;
