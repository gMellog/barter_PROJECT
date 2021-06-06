import style from './NavMenu.module.css'
import React, { useState } from "react";
import Login from '../Login/Login'
import Searcher from "../Searcher/Searcher"


//
import { ReactSVG } from 'react-svg'
import logoSvg from './img/Logo.svg'
import pfofile from './img/pfofile.jpg'
import like from './img/like.svg'
import message from './img/message.svg'


import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function NavMenu() {
  //Определяет регистраицю пользователя 
  // const [user, setUser] = useState(false)
  const [user, setUser] = useState(true)

  // для открытия модального окна
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal)
  };

  //функция для раскрытия и закрытия меню 
  function toggleMenu(e) {
    let menu = e.parentNode;
    console.log(menu.classList);
    menu.classList.toggle(`${style.close}`)
    console.log(menu.classList);
  }



  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to='/'>
          <ReactSVG src={logoSvg} />
        </Link>
      </div>
      <div className={style.left} >
        <div className={style.row} >
          <div className={style.notify, style.icon} >
            <Link to='/notify/id'>
              <ReactSVG src={like} />
              <div className={style.counter} >
                1
              </div>
            </Link>
          </div>
          <div className={style.like, style.icon} >
            <Link to='/like/id' >
              <ReactSVG src={like} />
              <div className={style.counter} >
                1
              </div>
            </Link>
          </div>
          <div className={style.messgae, style.icon} >
            <Link to='/message/id'>
              <ReactSVG src={message} />
              <div className={style.counter} >
                1
              </div>
            </Link>
          </div>
          <div className={style.profile, style.icon} >
            <Link to='/profile/id'>
              <div className={style.profileLink} >
                <img src={pfofile} alt="" />
              </div>
            </Link>
          </div>
          <div className={style.linkReg} >
            {/* Активатор и модальное окно */}
            <span onClick={() => { toggle() }} >Вход и регистрация!</span>
            {modal && <Login toggle={toggle} />}
          </div>
        </div>
        <Searcher />
      </div>
      <div className={style.headerImg} >
        <img src="/headerImg.png" alt="" />
      </div>

    </div>
  )
}















