import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions';
import { selectChannel } from '../actions';
import Channel from'./channel.jsx';

class ChannelList extends Component {
  // componentWillMount() {
  //   this.props.setChannels();
  // }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }

  renderChannel = (channel) => {
    return (
      <li key={channel} onClick={() => this.handleClick(channel)}>
        {channel}
      </li>
    )
  }

  render () {
    return (
      <div className="channel-list">
        <h1>Redux Chat</h1>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
        <h1>{this.selectedChannel}</h1>
      </div>
    )
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel: selectChannel },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, DispatchToProps)(ChannelList);
