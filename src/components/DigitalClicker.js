// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    // set our attribute "timesClicked" to an initial value 
    // of 0 
    state = {
        timesClicked: 0,
    }

    // when setState() it is passed an object which contains the
    // "previousState" of our components state.  We take this value
    // in an arrow function and then return an object which contains
    // the attribute:value pair that adds one to the previous(current)
    // value of the component's state attribute timeClicked.
    onClickHandler = () => {
        this.setState(previousState => {
            // console.log(previousState);
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    // create a button and add an synthetic onClick event handler
    // and set its call back function to onClickHandler.
    // Also, set the innerHTML of our <h1> tags to show the number
    // of times clicked (our state attribute)
    render() {
        return(
            <div>
                <button onClick={this.onClickHandler}>
                    <h1>{this.state.timesClicked}</h1>
                </button>
            </div>
        )
    }
}
