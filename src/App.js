import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
      text: "sample",
    };

    this.volChange = this.volChange.bind(this);
  }

  volChange(event) {
    this.setState({
      volume: event.target.value,
      text: event.target.value,
    });
  }

  clearDisplay() {}

  componentDidMount() {}
  render() {
    return (
      <div className="App" id="drum-machine">
        <div id="switch-area">
          <div className="switch-container">
            <span className="switch-label">Power</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="switch-container">
            <span className="switch-label">Mode</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div id="display">
            <span id="display-text">{this.state.text}</span>
          </div>
          <div className="volume-slider">
            <input
              type="range"
              id="vol-slider"
              step="1"
              min="0"
              max="100"
              value={this.state.volume}
              onChange={this.volChange}
            />
          </div>
        </div>
        <div id="drum-button-area">
          <div className="drum-button">1</div>
          <div className="drum-button">2</div>
          <div className="drum-button">3</div>
          <div className="drum-button">4</div>
          <div className="drum-button">5</div>
          <div className="drum-button">6</div>
          <div className="drum-button">7</div>
          <div className="drum-button">8</div>
          <div className="drum-button">9</div>
        </div>
      </div>
    );
  }
}

export default App;
