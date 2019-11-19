// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  };

  bitHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  resHandler = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitHandler}>
          bitrate
        </button>
        <button className="resolution" onClick={this.resHandler}>
          resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
