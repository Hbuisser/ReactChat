import React, { Component } from 'react';
import ChannelList from '../containers/channel_list.jsx';
import MessageList from '../containers/message_list.jsx';


const App = () => {
  return (
    <div className="app">
        <p>Logo</p>
        <ChannelList />
        <MessageList />
    </div>
  );
};

export default App;
