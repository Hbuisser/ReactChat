// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import selectedChannelReducer from './reducers/selected_channel_reducer.js';
import messagesReducer from './reducers/messages_reducer.js';
import channelsReducer from './reducers/channels_reducer.js';
import currentUserReducer from './reducers/current_user_reducer.js';
import messagesListReducer from './reducers/message_list_reducer.js';



const middlewares = applyMiddleware(reduxPromise, logger);

// State and reducers
const initialState = {
  channels: ['general', 'react', 'paris'],
  currentUser: prompt("What is your username?"),
  selectedChannel: 'general'
};

const reducers = combineReducers({
  selectedChannel: selectedChannelReducer,
  messages: messagesReducer,
  messagesList: messagesListReducer,
  channels: channelsReducer,
  currentUser: currentUserReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
