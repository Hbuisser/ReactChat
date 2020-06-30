export default function(state, action) {
  if (state === undefined) {
    return null;
  }
  if (action.type === 'SELECT_CHANNELS') {
    return action.payload;
  } else {
    return state;
  }
}
