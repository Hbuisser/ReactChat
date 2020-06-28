// TODO: add and export your own actions

export function fetchMessages() {
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
    return {
      type: 'FETCH_MESSAGES',
      payload: promise
    };
}

const channels = ['general', 'react', 'paris'];
export function setChannels() {
  return {
    type: 'SET_CHANNELS',
    payload: channels
  }
}

export function createMessage(channel, author, content) {
  const body = { channel: channel, author: author, content: content };
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
      type: 'POST_MESSAGE',
      payload: promise
    };
}

