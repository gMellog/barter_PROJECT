
import React from 'react'
import Conversations from '../Conversations/Conversations';
import styles from './Chats.module.css';

export default function Chats({setRoomHandler}){
    return (
        <div className={`${styles.chats}`}>
            <div className={`${styles.chatsLabel}`}>
                <h3>Chats</h3>
            </div>
            <Conversations setRoomHandler={setRoomHandler}/>
        </div>
    );
}
