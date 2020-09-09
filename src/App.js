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
        <div id="drum-machine-panel">
          <div id="drum-machine-power">
            <p id="drum-machine-power-label" className="select-off">
              Power
            </p>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>

          <div id="drum-machine-display"></div>

          <div id="drum-machine-mode">
            <p id="drum-machine-mode-label" className="select-off">
              Mode
            </p>
            <span className="drum-machine-mode-label select-off">A</span>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label>
            <span className="drum-machine-mode-label select-off">B</span>
          </div>
          <div id="volume-slider">
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              class="volume-slider"
              id="volume-slider"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
