import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { SplashScreen } from "./Components/splash";
import { Register } from "./Components/register";
import { Header } from "./Components/header";
import { Main } from "./Components/main";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
