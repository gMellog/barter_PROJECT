
import React from 'react'
import styles from './Conversation.module.css';

export default function Conversation({roomID,name, setRoomHandler}){
    return (
            <div className={`${styles.conversation}`} onClick={() => setRoomHandler(name,roomID)}>
                <h4>{name}</h4>
            </div>
    );
}
