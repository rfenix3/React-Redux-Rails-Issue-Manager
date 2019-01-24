import React, { Component } from 'react';

export default class VoteButton extends Component {

  render() {

    return (
      <button onClick={this.props.handleClick}> {this.props.votes}
      </button>
    );
  }
}

