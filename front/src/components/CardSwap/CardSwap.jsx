import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchThunk } from "../../redux/actions/stuffAC"
import style from './style.module.css'
import {getUserDeals, toggleDeal} from '../../redux/actions/dealsAC'

import { ReactSVG } from 'react-svg'
import vector from './vector.svg'
import message from './message.svg'
import hand from './hand.svg'
import del from './del.svg'
import { authHeader } from "../../helpers/authHeader";

function bindUserAndProduct(participant)
{
  return {
    user: participant.userID,
    product: participant.productID,
    ready: participant.ready
  }
}


export default function ProductCard() {

  const user = useSelector(state => state.user);
  const deals = useSelector(state => state.deals);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDeals());
  },[]);

  return (
    
    deals.length >= 1 && deals.map(deal => {
      
      let currUser;
      let anotherUser;


      if(deal.participants[0].userID.id === user.id)
      {
        currUser = bindUserAndProduct(deal.participants[0])
        anotherUser = bindUserAndProduct(deal.participants[1])
      }
      else
      {
        currUser = bindUserAndProduct(deal.participants[1])
        anotherUser = bindUserAndProduct(deal.participants[0])
      }
      
      const readyToChat = currUser.ready && anotherUser.ready;

      const successClick = () => {

        if(!readyToChat)
        {
          if(!currUser.ready)
          {
            dispatch(toggleDeal(deal.id));
          }
        }
      }

      const refuseClick = () => {
        if(!readyToChat)
        {
          if(currUser.ready)
          {
            dispatch(toggleDeal(deal.id));
          }
          else
          {
            //TODO call refuse deal
          }
        }
      }

      const makeChat = async () => {
  
        if(readyToChat)
        {
          //TODO users are ready, create chat
          //SHOULD BE TAPPED ONLY ONCE
          const options = {
            method: 'POST',
            headers: {
              ...authHeader(),
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userID: anotherUser.user.id})
          }

          const res = await fetch('http://localhost:4000/chat', options);
          if(res.ok)
          {
            console.log('chat created!');
            history.push('/chat')
          }
        }
      }

      return (
      <div>
        <div className={style.card}>
  
          <div className={style.user}>
            <div className={style.img}>
              <img src={`${currUser.product.photoUrl[0]}`} alt="" />
            </div>
            <div className={style.avatar}>
              <img src={`http://localhost:4000${currUser.user.avatar}`}  alt="" />
            </div>
          </div>
  
          <div className={style.actions}>
            <div className={style.data}>
              29 апреля 2021
            </div>
            <div className={style.message} style={{opacity : readyToChat ? 1 : 0.1}} onClick={makeChat}>
              <ReactSVG src={message}></ReactSVG>
            </div>
            <div className={style.vector}>
              <ReactSVG src={vector}></ReactSVG>
            </div>
          </div>
  
          <div className={style.user}>
            <div className={style.img}>
              <img src={`${anotherUser.product.photoUrl[0]}`} alt="" />
            </div>
            <div className={`${style.avatar} ${style.avatar_left}`}>
              <img src={`http://localhost:4000${anotherUser.user.avatar}`} alt="" />
            </div>
          </div>
  
          <div className={style.button}>
            <div className={style.success} style={{opacity:  currUser.ready || readyToChat ? 0.25 : 1}} onClick={successClick}>
              <ReactSVG src={hand}></ReactSVG>
            </div>
            <div className={style.failing} style={{opacity:  readyToChat ? 0.25 : 1}} onClick={refuseClick}>
              <ReactSVG src={del}></ReactSVG>
            </div>
          </div>
        </div>
      </div>);
      })
    )
}
