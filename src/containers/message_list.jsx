import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectedChannel } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.props.selectedChannel(this.props.selectedChannel);
  }

  render () {
    return (
      <div>
        Helloooooooo
      </div>
    )
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedChannel: selectedChannel },
    dispatch
  );
}

function ReduxStateToProps(reduxState) {
  return {
    messages: reduxState.messages
  }
}

export default connect(ReduxStateToProps, DispatchToProps)(MessageList);
