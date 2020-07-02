import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import { Link } from 'react-router-dom';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  // handleClick = (channel) => {
  //   this.props.selectChannel(channel);
  // }

  renderChannel = (channel) => {
    return (
      <li key={channel}
          //onClick={() => this.handleClick(channel)}
          className={channel === this.props.channelFromParams ? 'active' : null}>
        <Link to={`/${channel}`}>
          #{channel}
        </Link>
      </li>
    )
  }

  render () {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
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

function mapStateToProps(state) {
  return {
    channels: state.channels,
    //selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, DispatchToProps)(ChannelList);
