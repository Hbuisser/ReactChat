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
    this.props.fetchMessages(this.props.channelFromParams);
  }

  //Updating messages every X seconds
  componentDidMount() {
    //this.refresher = setInterval(this.fetchMessages, 5000);
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
          <span>Channel #{this.props.channelFromParams}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message message={message} key={message.id}/>
            })
          }
        </div>
        <MessageForm channelFromParams={this.props.channelFromParams}/>
      </div>
    )
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}

function ReduxStateToProps(state) {
  return {
    messages: state.messages,
    //selectedChannel: state.selectedChannel
  };
}

export default connect(ReduxStateToProps, DispatchToProps)(MessageList);
