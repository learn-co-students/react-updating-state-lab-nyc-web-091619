// Code DigitalClicker Component Here
import React, { Component } from "react";

export class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };

  clickIncrementor = () => {
    this.setState(prevState => {
      return {
        timesClicked: prevState.timesClicked + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickIncrementor}>
          {this.state.timesClicked}
        </button>
      </div>
    );
  }
}

export default DigitalClicker;
