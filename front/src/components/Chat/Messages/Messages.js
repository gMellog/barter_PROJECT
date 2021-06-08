import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import styles from './Messages.module.css';

const Messages = ({ messages }) => (
  <ScrollToBottom className={`${styles.messages}`}>
    {messages.map((message, i) => { console.log(i); return (<div key={i}><Message name={message.ownerName} message={message.message}/></div>)} )}
  </ScrollToBottom>
);

export default Messages;
