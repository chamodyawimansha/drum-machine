import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        onClick={this.props.handle}
        className="drum-pad drum-button select-off"
      >
        <audio
          className="clip"
          id={this.props.keyTrigger}
          src={this.props.url}
        ></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default Button;
