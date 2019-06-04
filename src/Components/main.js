import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { SplashScreen } from "./splash";
import { Register } from "./register";
//import { Header } from "./Components/header";
import "../styles.css";

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path={"/"} component={SplashScreen} />
        <Route path={"/register"} component={Register} />
      </Switch>
    </main>
  );
}
