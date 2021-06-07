import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import Messages from './Messages/Messages';
import InfoBar from './InfoBar/InfoBar';
import MessageInput from './MessageInput/MessageInput';

import styles from './Chat.module.css';
import Chats from "./Chats/Chats";
import { authHeader, getOnlyToken } from "../../helpers/authHeader";


const ENDPOINT = 'http://localhost:4000/';

let socket;

const Chat = ({ location }) => {
  const [selectedName, setSelectedName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const setRoomHandler = (selectName,newRoomID) => {

    setSelectedName(selectName);
    socket = io(ENDPOINT, {
      extraHeaders: authHeader()
    });

    socket.on('init messages', (messages) => {
      setMessages(messages);
    })

    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    

    const id = JSON.parse(localStorage.getItem('user')).id;

    socket.emit('join', { id, roomID: newRoomID });
  }

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className={`${styles.outerContainer}`}>
    <Chats setRoomHandler = {setRoomHandler}/>
      <div className={`${styles.container}`}>
          <InfoBar  name={selectedName}/>
          <Messages messages={messages} name={selectedName} />
          <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default Chat;
