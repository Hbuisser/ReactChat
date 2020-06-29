export default function(state = null, action) {
  switch (action.type) {
    case 'POST_MESSAGE': {
      //return action.payload;
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    }
    case 'SELECT_CHANNELS': {
      return []; // Channel has changed. Clearing view.
    }
    case 'FETCH_MESSAGES': {
      return action.payload.messages;
    }
    default:
      return state
  }
}
