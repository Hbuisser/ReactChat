import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emojify } from 'react-emojione';


class Message extends Component {
  render() {
    const { created_at, author, content } = this.props.message;
    const time = new Date(created_at).toLocaleTimeString();
    return(
      <div className="message-container">
        <i className="author">
          <small>{time}</small>
        </i>
        <p>{emojify(content)}</p>
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
