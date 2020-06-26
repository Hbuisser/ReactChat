const currentUserReducer = (state=null, action) => {
  switch (action.type) {
    case 'SELECT_CHANNEL':
      return action.payload;
    default:
      return state
  }
}

export default currentUserReducer;