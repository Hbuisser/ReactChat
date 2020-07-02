import React, { Component } from 'react';
import ChannelList from '../containers/channel_list.jsx';
import MessageList from '../containers/message_list.jsx';

const App = (props) => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        Logo
      </div>
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
}

export default App;
