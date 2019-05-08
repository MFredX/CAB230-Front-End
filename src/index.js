import React from 'react';
import ReactDOM from "react-dom";
import Buttons from "./buttons.js";
import {FormComp} from "./form.js";
// import {SearchApp} from "./search.js";
import './styles.css';
//Figuring git out mate
function App() {
  return (
    <div className="First">
    <h1>Getting Started with Crime (Updated)</h1>
    <Buttons/>
    <FormComp/>
    {/* {SearchApp} */}
    </div>
  )

}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
