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

// History of the browser
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// reducers
import messagesReducer from './reducers/messages_reducer.js';
const identityReducer = (state = null) => state;

// define middlewares
const middlewares = applyMiddleware(reduxPromise, logger);

// State and reducers
const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  //currentUser: prompt("What is your username?"),
  currentUser: 'Hbuisser',
  //selectedChannel: 'general'
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  //selectedChannel: selectedChannelReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
