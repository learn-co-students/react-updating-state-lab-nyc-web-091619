import React from 'react'

class YouTubeDebugger extends React.Component {

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

    updateResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                  ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    updateBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <button className="bitrate" onClick={this.updateBitrate}> {this.state.settings.bitrate} </button>
                </div>
                <div>
                    <button className="resolution" onClick={this.updateResolution}> {this.state.settings.video.resolution} </button>
                </div>
            </div>
        )
    }
    
}

export default YouTubeDebugger