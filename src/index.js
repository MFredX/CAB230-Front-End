import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { SplashScreen } from "./Components/login";
import { Register } from "./Components/register";
import { Header } from "./Components/header";
import { Main } from "./Components/main";
import "./styles.css";
import { Fixed } from "./Components/app";

function App() {
  return (
    <BrowserRouter>
      <Fixed />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
