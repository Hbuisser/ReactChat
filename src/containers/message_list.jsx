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

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  //Updating messages every X seconds
  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  //Scrolling the message list
  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }


  render () {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <h1>Channels #{this.props.selectedChannel}</h1>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
             return <Message message={message} key={message.id} author={message.author} time={message.created_at} />
            })
          }
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
    messages: reduxState.messagesList,
    selectedChannel: reduxState.selectedChannel
  };
}

export default connect(ReduxStateToProps, DispatchToProps)(MessageList);
