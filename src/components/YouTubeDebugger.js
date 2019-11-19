// Code YouTubeDebugger Component Here
import React from "react"

class YouTubeDebugger extends React.Component {

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

    resolutionHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: "720p"
                }
            }
        }

        )
    }

    bitrateHandler = () => {
        this.setState( {
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })  
    }
    

    render() {
        return (
            <div>
                <button
                className= "bitrate"
                onClick= {this.bitrateHandler}>
                </button>

                <button
                className= "resolution"
                onClick= {this.resolutionHandler}>
                </button>
            </div>
        )
    }

}

export default YouTubeDebugger;