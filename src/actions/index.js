// TODO: add and export your own actions

export function fetchMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
    return {
      type: 'SELECT_CHANNEL',
      payload: promise
    };
}

export function setChannels() {
  return {
    type: 'SET_CHANNELS',
    payload: ['general', 'react', 'paris']
  }
}
