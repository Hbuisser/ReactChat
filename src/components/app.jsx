import React, { Component } from 'react';
import ChannelList from '../containers/channel_list.jsx';
import MessageList from '../containers/message_list.jsx';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        Logo
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
}

export default App;
