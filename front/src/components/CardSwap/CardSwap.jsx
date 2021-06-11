import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchThunk } from "../../redux/actions/stuffAC"
import style from './CardSwap.module.css'
import { changeDeal, getUserDeals, toggleDeal } from '../../redux/actions/dealsAC'
import { authHeader } from "../../helpers/authHeader";
import { ReactSVG } from 'react-svg'
import vector from './vector.svg'
import message from './message.svg'
import hand from './hand.svg'
import del from './del.svg'


export default function CardSwap({ socket, currUser, anotherUser, deal }) {

  const history = useHistory();
  const dispatch = useDispatch();

  const readyToChat = currUser.ready && anotherUser.ready;

  const successClick = () => {

    if (!readyToChat) {
      if (!currUser.ready) {
        socket.emit('toggleReadyDeal', currUser.user.id, deal.id);
      }
    }
  }

  const refuseClick = () => {
    if (!readyToChat) {
      if (currUser.ready) {
        socket.emit('toggleReadyDeal', currUser.user.id, deal.id);
      }
      else {
        socket.emit('refuseDeal', deal.id);
      }
    }
  }

  const makeChat = async () => {

    if (readyToChat) {
      //we should check it in our chats that we have load it up
      if (!deal.chatCreated) {
        //TODO users are ready, create chat
        //SHOULD BE TAPPED ONLY ONCE
        const options = {
          method: 'POST',
          headers: {
            ...authHeader(),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userID: anotherUser.user.id, dealID: deal.id })
        }

        const res = await fetch('http://localhost:4000/chat', options);
        if (res.ok) {
          const deal = await res.json();
          if(deal)
          {
            dispatch(changeDeal(deal));
          }
          history.push('/chat')
        }
      }
      else 
      {
        history.push('/chat');
      }
    }
  }


  console.log('curr user is ', currUser);

  return (
    <div>
      <div className={style.card}>

        <div className={style.user}>
          <div className={style.img_wrapper}>
            <img src={`http://localhost:4000${currUser.product?.photoUrl[0]}`} alt="" />
          </div>
          <div className={style.avatar}>
            <img src={`http://localhost:4000${currUser.user?.avatar}`} alt="" />
          </div>
        </div>

        <div className={style.actions}>
          <div className={style.message} style={{ opacity: readyToChat ? 1 : 0.1 }} onClick={makeChat}>
            <ReactSVG src={message}></ReactSVG>
          </div>
          <div className={style.vector}>
            <ReactSVG src={vector}></ReactSVG>
          </div>
        </div>

        <div className={style.user}>
          <div className={style.img_wrapper} >
          <img src={`http://localhost:4000${anotherUser.product?.photoUrl[0]}`} alt="" />
          </div>
          <div className={`${style.avatar} ${style.avatar_left}`}>
            <img src={`http://localhost:4000${anotherUser.user?.avatar}`} alt="" />
          </div>
        </div>

        <div className={style.button}>
          <div className={style.success} style={{ display: !deal.declined ? 'block' : 'none', opacity: currUser.ready || readyToChat ? 0.25 : 1 }} onClick={successClick}>
            <ReactSVG src={hand}></ReactSVG>
          </div>
          <div className={style.failing} style={{ display: !deal.declined ? 'block' : 'none', opacity: readyToChat ? 0.25 : 1 }} onClick={refuseClick}>
            <ReactSVG src={del}></ReactSVG>
          </div>
        </div>
      </div>
    </div>);
}
