import React, { Component } from 'react';

class Player extends Component {
  
    render() {
        return (
            <div>
                <h3>{`Player Name:${this.props.playerName}`}</h3>
                <button onClick={this.props.callbackfunction}>Add To Score</button>
            </div>
        )
    };
};

export default Player;