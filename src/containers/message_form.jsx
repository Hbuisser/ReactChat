import React, { Component } from 'react';
import { createMessage } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input  type="text"
                  className="form-control"
                  value={this.state.value}
                  onChange={this.handleChange}
                  ref={(input) => { this.messageBox = input; }}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function DispatchToProps(dispatch) {
  return bindActionCreators(
    //{ currentUser: currentUser },
    { createMessage: createMessage },
    dispatch
  );
}

function ReduxStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  }
}

export default connect(null, DispatchToProps)(MessageForm);
