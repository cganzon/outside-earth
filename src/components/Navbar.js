import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/" className="logo">
          Outside Earth
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/mars" className="nav-link">Mars</Link>
          </li>
          <li>
            <Link to="/asteroids" className="nav-link">Asteroids</Link>
          </li>
          <li>
            <Link to="/rovers" className="nav-link">Curiosity</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
