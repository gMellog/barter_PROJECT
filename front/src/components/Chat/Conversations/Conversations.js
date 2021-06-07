
import React, { useEffect, useState } from 'react'
import Conversation from '../Conversation/Conversation';
import styles from './Conversations.module.css';
import { authHeader } from '../../../helpers/authHeader';


export default function Conversations({setRoomHandler}){

    const [chats,setChats] = useState([]);

    const options = {
        method: 'GET',
        headers: authHeader()
    };

    useEffect(() => {
        fetch('http://localhost:4000/chat/userChats', options)
        .then( res => res.json())
        .then( chats => setChats(chats));
    },[]);
    
    return (
            <div className={`${styles.conversations}`}>
                {
                    chats.length >= 1 && 
                    chats.map( chat => <Conversation key={chat.roomID} roomID={chat.roomID} name={chat.name} setRoomHandler={setRoomHandler}/>)
                }
            </div>
    );
}
