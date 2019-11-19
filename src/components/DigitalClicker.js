import React from 'react'

class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0 
    }

    incrementClicker = () => {
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked+1
        }))
        // return (this.state.timesClicked + 1)
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
            </div>
        )
    }

}

export default DigitalClicker