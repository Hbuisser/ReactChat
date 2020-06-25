// TODO: add and export your own actions
// export function setFlats() {
//   const promise = fetch('https://raw.githubusercontent.com/[..]flats.json')
//     .then(response => response.json());
//     return {
//       type: 'SET_FLATS',
//       payload: promise
//     };
// }

export function setChannels() {
  return {
    type: 'SET_CHANNELS',
    payload: ['general', 'react', 'paris']
  }
}

export function selectedChannel(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  }
}
