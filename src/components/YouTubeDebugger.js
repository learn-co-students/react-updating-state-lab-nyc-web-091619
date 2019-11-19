// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    bitrate: 12
                } 
            }

        }, console.log(this.state))
    }

    changeResolution = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...previousState.settings,
                    video: {
                        resolution: '720p'
                    }
                } 
            }

        }, console.log(this.state))
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.changeResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}