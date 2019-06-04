import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { LoginScreen } from "./login";
import { Register } from "./register";

import "../styles.css";

export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/register" component={Register} />
        <Route path="/search" component={Register} />
        <Route path="/graphs" component={Register} />
        <Route path="/charts" component={Register} />
      </Switch>
    </main>
  );
}
