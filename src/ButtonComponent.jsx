import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="drum-button" id={this.props.buttonId}>
        {this.props.buttonLetter}
      </div>
    );
  }
}

export default Button;
