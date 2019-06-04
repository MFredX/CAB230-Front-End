import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles.css";

export function SplashScreen() {
  return (
    <div>
      <h1>Welcome to Splash</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Splash Screen</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
