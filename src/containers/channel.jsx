import React, { Component } from 'react';
import selectChannel from '../actions';

class Channel extends Component {
  // handleClick = (event) => {
  //   this.props.selectChannel(this.props.channel);
  // }

  render() {
    return (
      //<div className="channel" onClick={this.handleClick}>
      <div>
        {this.props.channel}
      </div>
    )
  }
}

export default Channel;
