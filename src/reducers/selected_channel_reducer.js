// const selectedChannelReducer = (state=null, action) => {
//   switch (action.type) {
//     case 'SELECT_CHANNELS':
//       return action.payload;
//     default:
//       return state
//   }
// }

// export default selectedChannelReducer;


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

