import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./ButtonComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
      text: "",
      buttons: ["q", "w", "e", "a", "s", "d", "z", "x", "c"],
    };

    this.volChange = this.volChange.bind(this);
  }

  //This method will clear the display
  componentDidUpdate(prevProps, prevState) {
    if (this.state.text !== "") {
      setTimeout(() => {
        this.setState({
          text: "",
        });
      }, 3000);
    }
  }

  // change the volume
  volChange(event) {
    this.setState({
      volume: event.target.value,
      text: event.target.value,
    });

    // return
  }

  componentDidMount() {}
  render() {
    return (
      <div id="drum-machine">
        <div id="switch-panel">
          <div id="switch-panel_power">
            <p id="power-label" className="select-off switch-label">
              Power
            </p>
            <label id="power-switch" className="panel-switch">
              <input
                type="checkbox"
                id="power-input"
                className="panel-switch-input"
              />
              <span id="power-slider" className="panel-switch-slider"></span>
            </label>
          </div>
          <div id="switch-panel_display">
            <div id="display-panel">{this.state.text}</div>
          </div>
          <div id="switch-panel_mode">
            <p id="" className="select-off switch-label">
              Mode
            </p>
            <span id="mode-a-label" className="select-off">
              A
            </span>
            <label id="mode-switch" className="panel-switch">
              <input
                type="checkbox"
                id="mode-input"
                className="panel-switch-input"
              />
              <span id="mode-slider" className="panel-switch-slider"></span>
            </label>
            <span id="mode-b-label" className="select-off">
              B
            </span>
          </div>
          <div id="switch-panel_volume">
            <input
              type="range"
              min="1"
              max="100"
              value={this.state.volume}
              className="slider"
              id="vol-slider"
              onChange={this.volChange}
            ></input>
          </div>
        </div>
        <div id="button-panel">
          {this.state.buttons.map((letter) => {
            return (
              <Button buttonLetter={letter} buttonId={"letter-" + letter} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
