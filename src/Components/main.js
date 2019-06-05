import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { LoginScreen } from "./login";
import { RegisterPage } from "./register";
import { DisplayResult } from "./displayresult";
import { SearchPage } from "./searchpage";
import "../styles.css";

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/graphs" component={RegisterPage} />
        <Route path="/searchResults" component={DisplayResult} />
      </Switch>
    </main>
  );
}
