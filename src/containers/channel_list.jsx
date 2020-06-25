import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions';

class ChannelList extends Component {
  componentWillMount() {
    this.props.setChannels();
  }

  render () {
    return (
      <div>
        {this.props.channels}
      </div>
    )
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { setChannels: setChannels },
    dispatch
  );
}

function ReduxStateToProps(reduxState) {
  return {
    channels: reduxState.channels
  }
}

export default connect(ReduxStateToProps, DispatchToProps)(ChannelList);
