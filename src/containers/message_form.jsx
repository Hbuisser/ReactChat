import React, { Component } from 'react';
import { createMessage } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.createMessage(this.props.channelFromParams, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    //selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, DispatchToProps)(MessageForm);
