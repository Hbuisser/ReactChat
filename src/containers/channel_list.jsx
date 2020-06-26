import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions';
import Channel from'./channel.jsx';

class ChannelList extends Component {
  componentWillMount() {
    this.props.setChannels();
  }

  render () {
    return (
      <div className="channel-list">
        <h1>Redux Chat</h1>
        {this.props.channels.map((channel) => <Channel channel={channel} key={channel}/>)}
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
