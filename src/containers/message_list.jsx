import React, { Component } from 'react';
import Message from '../components/message.jsx';
import MessageForm from '../containers/message_form.jsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages();
  }

  render () {
    return (
      <div className="message-list">
        <h1>Channel</h1>
        <div>
          {this.props.messages.map((message) =>
            <Message message={message} key={message.id} author={message.author} time={message.created_at} />)}
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
    messages: reduxState.messagesList
    //selectedChannel: reduxState.selectedChannel
  };
}

export default connect(ReduxStateToProps, DispatchToProps)(MessageList);
