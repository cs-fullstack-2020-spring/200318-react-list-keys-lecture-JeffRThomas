import React, { Component } from 'react';
import Player from './Player';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Grand_Total: 0
        };
    };

    addToScore = () => {
        console.log("Button Clicked");
        let new_total = parseInt(this.state.Grand_Total) + 1
        this.setState(
            {
                Grand_Total: new_total
            }
        )
    };

    render() {
        return (
            <div>
                <h1>Play the Game</h1>
                <h3>{`Total Score ${this.state.Grand_Total}`}</h3>
                <Player playerName="Player One" callbackfunction={this.addToScore}/>
            </div>
        )
    };
};

export default AppContainer;