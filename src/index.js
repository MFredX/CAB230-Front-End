import React from 'react';
import ReactDOM from "react-dom";
import Buttons from "./buttons.js";
import FormComp from "./form.js";
import './styles.css';


class App extends React.Component {

  render() {
    return (
      <div className="First">
      <h1>Getting Started with Crime (Updated)</h1>
      <Buttons/>
      <FormComp/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById("root")
);
