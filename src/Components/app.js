import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SplashScreen } from "./login";
import { Register } from "./register";
import { Header } from "./header";
import { Main } from "./main";
import "../styles.css";

export function Fixed() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
