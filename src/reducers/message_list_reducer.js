// const messagesListReducer = (state=null, action) => {
//   switch (action.type) {
//     case 'FETCH_MESSAGES': {
//       return action.payload.messages;
//     }
//     default:
//       return state;
//   }
// }

// export default messagesListReducer;

export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  if (action.type === 'FETCH_MESSAGES') {
    return action.payload.messages;
  } else {
    return state;
  }
}
