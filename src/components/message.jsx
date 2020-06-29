import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    const { created_at, author, content } = this.props.message;
    const time = new Date(created_at).toLocaleTimeString();
    return(
      <div className="message-container">
        <i className="author">
          <div>{content}</div>
          <small>{time}</small>
        </i>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, null)(Message);
