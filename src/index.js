import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Fixed } from "./Components/app";

import "./styles.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Fixed />
      </BrowserRouter>
      <p id="app"> </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
