import _messages from './messages.json'

const TIMEOUT = 100

// TODO from to
export default {
  getMessages: (cb, timeout) => setTimeout(() => cb(_messages), timeout || TIMEOUT)
}
