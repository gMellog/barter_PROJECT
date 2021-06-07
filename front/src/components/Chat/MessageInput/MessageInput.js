import React from 'react';

import styles from './MessageInput.module.css';

const MessageInput = ({ setMessage, sendMessage, message }) => (
<form className={`${styles.form}`}>
    <input
      className={`${styles.input}`}
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className={`${styles.sendButton}`} onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default MessageInput;

