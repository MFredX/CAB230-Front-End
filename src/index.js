import React from 'react';
import ReactDOM from "react-dom";
import Buttons from "./buttons.js";
import {FormComp} from "./form.js";


import './styles.css';
//Figuring git out mate
function App() {
  return (
    <div className="First">
    <h1>Getting git done mate (Updated)</h1>
    <Buttons/>
    <FormComp/>
    {/* {SearchApp} */}
    <h5 id="app"></h5>
    </div>
  )

}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
