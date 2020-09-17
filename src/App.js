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
      modeOne: [
        {
          keyCode: 81,
          keyTrigger: "Q",
          name: "Heater 1",
          id: "Heater-1",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        {
          keyCode: 87,
          keyTrigger: "W",
          name: "Heater 2",
          id: "Heater-2",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
        {
          keyCode: 69,
          keyTrigger: "E",
          name: "Heater 3",
          id: "Heater-3",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
        {
          keyCode: 65,
          keyTrigger: "A",
          name: "Heater 4",
          id: "Heater-4",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
        {
          keyCode: 83,
          keyTrigger: "S",
          name: "Clap",
          id: "Clap",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
        {
          keyCode: 68,
          keyTrigger: "D",
          name: "Open HH",
          id: "Open-HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
        {
          keyCode: 90,
          keyTrigger: "Z",
          name: "Kick n' Hat",
          id: "Kick-n'-Hat",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
        {
          keyCode: 88,
          keyTrigger: "X",
          name: "Kick",
          id: "Kick",
          url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        {
          keyCode: 67,
          keyTrigger: "C",
          name: "Closed HH",
          id: "Closed-HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
      ],
    };
    this.volChange = this.volChange.bind(this);
    this.handleDrumPadClick = this.handleDrumPadClick.bind(this);
  }

  //This method clears the display
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
  }

  handleDrumPadClick(event) {
    let sound = this.state.modeOne.find((item) => item.id == event.target.id);
    let audio = new Audio(sound.url);
    audio.play();
    this.setState({
      text: sound.name,
    });
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
          {this.state.modeOne.map((btn) => {
            return (
              <Button
                keyTrigger={btn.keyTrigger}
                id={btn.id}
                key={btn.keyTrigger}
                url={btn.url}
                handle={this.handleDrumPadClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
