import React from 'react';

import styles from './Message.module.css';

import ReactEmoji from 'react-emoji';

const Message = ({name, message}) => {
  
  let isSentByCurrentUser = false;

  const currUsername = JSON.parse(localStorage.getItem('user')).name;

  if(name === currUsername) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className={`${styles.messageContainer} ${styles.justifyEnd}`}>
          <p className={`${styles.sentText} pr-10`}>You</p>
          <div className={`${styles.messageBox} ${styles.backgroundBlue}`}>
            <p className={`${styles.messageText} ${styles.colorWhite}`}>{ReactEmoji.emojify(message)}</p>
          </div>
        </div>
        )
        : (
          <div className={`${styles.messageContainer} ${styles.justifyStart}`}>
            <div className={`${styles.messageBox} ${styles.backgroundLight}`}>
              <p className={`${styles.messageText} ${styles.colorDark}`}>{ReactEmoji.emojify(message)}</p>
            </div>
            <p className={`${styles.sentText}  pl-10 mt-2`}>{name}</p>
          </div>
        )
  );
}

export default Message;
