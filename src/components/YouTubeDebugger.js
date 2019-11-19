import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor(props) {
        super(props)
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
    }// end constructor

    bitrateButton = () => {
        this.setState({
            settings:  {...this.state.settings, bitrate: 12}
        })

        // this.setState({
        //     settings: {...this.state.settings, video: {...this.state.settings.video, resolution: "beef"}}
        // })

        // this.setState({
        //     errors: [...this.state.errors, 'beef']
        // })
    }

    resolutionButton = () => {
        this.setState({
            settings: {...this.state.settings, video: {...this.state.settings.video, resolution: '720p'}}
        })
    }


    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrateButton}></button>
                <button className='resolution' onClick={this.resolutionButton}></button>
            </div>
        )
    }

}//end class
