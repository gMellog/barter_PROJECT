import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchThunk } from "../../redux/actions/stuffAC"
import style from './style.module.css'


import { ReactSVG } from 'react-svg'
import vector from './vector.svg'
import message from './message.svg'
import hand from './hand.svg'
import del from './del.svg'



export default function ProductCard() {

  const stuffArray = useSelector((state) => state.user);

  const dispatch = useDispatch();


  return (
    <div>
      <div className={style.card}>

        <div className={style.user}>
          <div className={style.img}>
            <img src="" alt="" />
          </div>
          <div className={style.avatar}>
            <img src="" alt="" />
          </div>
        </div>

        <div className={style.actions}>
          <div className={style.data}>
            29 апреля 2021
          </div>
          <div className={style.message}>
            <ReactSVG src={message}></ReactSVG>
          </div>
          <div className={style.vector}>
            <ReactSVG src={vector}></ReactSVG>
          </div>
        </div>

        <div className={style.user}>
          <div className={style.img}>
            <img src="" alt="" />
          </div>
          <div className={`${style.avatar} ${style.avatar_left}`}>
            <img src="" alt="" />
          </div>
        </div>

        <div className={style.button}>
          <div className={style.success}>
            <ReactSVG src={hand}></ReactSVG>
          </div>
          <div className={style.failing}>
            <ReactSVG src={del}></ReactSVG>
          </div>
        </div>
      </div>
    </div>
  );
}
