const channelsReducer = (state=null, action) => {
  //const initChannels = ['general', 'react', 'paris'];
  switch (action.type) {
    case 'SET_CHANNELS':
      return action.payload;
    default:
      return state;
  }
}

export default channelsReducer;
