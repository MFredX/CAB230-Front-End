import React from 'react';
import ReactDOM from "react-dom";
import {FormComp} from "./form.js";


import './styles.css';
//Figuring git out mate
function App() {
  return (
    <div className="First">
    <h1><i><b>If crime data is what you want, that's what you get</b></i></h1>
    <FormComp/>
    <h5 id="app"></h5>
    </div>
  )

}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
