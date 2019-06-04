import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles.css";

export function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/charts">Charts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
