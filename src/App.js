import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./ButtonComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
      text: "sample",
      buttons: ["q", "w", "e", "a", "s", "d", "z", "x", "c"],
    };

    this.volChange = this.volChange.bind(this);
  }

  volChange(event) {
    this.setState({
      volume: event.target.value,
      text: event.target.value,
    });
  }

  componentDidMount() {}
  render() {
    return (
      <div id="drum-machine">
        <div id="switch-panel">
          <div id="switch-panel_power">
            <p id="power-label">Power</p>
            <label id="power-switch">
              <input type="checkbox" id="power-input" />
              <span id="power-slider"></span>
            </label>
          </div>
          <div id="switch-panel_display"></div>
          <div id="switch-panel_mode"></div>
          <div id="switch-panel_volume"></div>
        </div>
      </div>
    );
  }
}

export default App;
