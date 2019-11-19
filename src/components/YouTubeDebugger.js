// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    changeBitrate = e => {
        this.setState({
            errors: [],
            user: null,
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
        })
    }
    changeResolution = e => {
        this.setState({
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '720p'
              }
            }
        })
    }

    render(){
        return ( 
            <div>
                <button onClick={this.changeBitrate} className="bitrate">Change Bitrate</button>
                <button onClick={this.changeResolution} className="resolution">Change Resolution</button>
            </div>
        )
    }
}
