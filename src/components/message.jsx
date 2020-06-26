import React, { Component } from 'react';

class Message extends Component {

  render() {
    return(
      <div>{this.props.message.content} {this.props.currentUser}</div>
    )
  };
}

export default Message;
