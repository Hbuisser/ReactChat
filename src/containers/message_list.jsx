import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message.jsx';
import MessageForm from '../containers/message_form.jsx';
import messages from'../messages.js';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.channel);
  }

  render () {
    return (
      <div className="message-list">
        <h1>Channel</h1>
        <div>
          {messages.map((message) => <Message message={message} key={message.created_at}/>)}
        </div>
        <MessageForm />
      </div>
    )
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function ReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages
  }
}

export default connect(ReduxStateToProps, DispatchToProps)(MessageList);
