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

    onBitrateClickHandler = () => {
        // this.setState(previousState => {
        //     settings: Object.assign(
        //         this.previousState, 
        //         this.settings, { bitrate: 12 }
        //     )
        // })
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12,
            }
        });
    }

    onResolutionClickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings, 
                video: {
                    ...this.state.settings.video,
                    resolution: '720p',
                }
            }
        });
    }

    // Create a button with the class 'bitrate'. Clicking this button changes 
    //      the settings.bitrate state property to 12.

    // Create a button with the class 'resolution'. Clicking this button changes 
    //      the settings.video.resolution state property to '720p'.

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.onBitrateClickHandler}>
                    Bitrate
                </button>
                <button className="resolution" onClick={this.onResolutionClickHandler}>
                    Resolution
                </button>
            </div>
        )
    }
}
