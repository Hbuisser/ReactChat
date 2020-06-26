import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import Message from '../components/message.jsx';
import MessageForm from '../containers/message_form.jsx';


class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.channel);
  }

  render () {
    return (
      <div>
        <Message />
        <MessageForm />
      </div>
    )
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    //{ selectedChanne: selectedChannel },
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
