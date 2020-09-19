import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./ButtonComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: false,
      volume: 0,
      text: "",
      mode: [],
    };

    this.handleDeviceOnState = this.handleDeviceOnState.bind(this);
    this.handleModeChange = this.handleModeChange.bind(this);
    this.handleVolChange = this.handleVolChange.bind(this);
    this.handleDrumPadClick = this.handleDrumPadClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  profileOne = [
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
  ];

  profileTwo = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      name: "Chord 1",
      id: "Chord_1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      name: "Chord 2",
      id: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      name: "Chord 3",
      id: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      name: "Shaker",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      name: "Open HH",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      name: "Closed HH",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      name: "Punchy Kick",
      id: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      name: "Side-Stick",
      id: "Side Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      name: "Snare",
      id: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  handleDeviceOnState() {
    this.setState((state) => ({
      power: state.power === false ? true : false,
    }));
  }

  handleModeChange() {
    if (this.state.power === false) return;

    this.setState((state) => ({
      mode: state.mode === this.profileOne ? this.profileTwo : this.profileOne,
    }));
  }
  handleVolChange(event) {
    if (this.state.power === false) return;
    this.setState({
      volume: event.target.value,
      text: event.target.value,
    });
  }

  handleDrumPadClick(event) {
    if (this.state.power === false) return;

    let audioElement = event.target.children[0];
    audioElement.volume = this.state.volume / 100;
    audioElement.play();

    // show name on the display
    let sound = this.state.mode.find((item) => item.id === event.target.id);
    this.setState({
      text: sound.name,
    });
  }

  handleKeyPress(event) {
    if (this.state.power === false) return;

    let sound = this.state.mode.find((item) => item.keyCode === event.keyCode);

    if (sound) {
      var audioElement = document.getElementById(sound.id).childNodes[0];
      audioElement.volume = this.state.volume / 100;
      audioElement.play();

      this.setState({
        text: sound.name,
      });
    }
  }

  componentDidMount() {
    this.setState({
      mode: this.profileOne,
    });

    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

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
                onChange={this.handleDeviceOnState}
                type="checkbox"
                id="power-input"
                className="panel-switch-input"
              />
              <span id="power-slider" className="panel-switch-slider"></span>
            </label>
          </div>
          <div id="switch-panel_display">
            <div id="display">{this.state.text}</div>
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
                onChange={this.handleModeChange}
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
              min="0"
              max="100"
              value={this.state.volume}
              className="slider"
              id="vol-slider"
              onChange={this.handleVolChange}
            ></input>
          </div>
        </div>
        <div id="button-panel">
          {this.state.mode.map((btn) => {
            return (
              <Button
                keyTrigger={btn.keyTrigger}
                id={btn.id}
                key={btn.keyTrigger}
                url={btn.url}
                handle={this.handleDrumPadClick}
                // ref={btn.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
