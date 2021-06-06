import style from './style.module.css'
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
<<<<<<< HEAD
    <div className={style.back} >
      <div className={style.block}>

        {/* Активатор и модальное окно */}
        <span onClick={() => { toggle() } } >Вход и регистраиция!</span>
        { 
        
          modal && <Login toggle={toggle} />
        }
       </div>

      <div className={user ? `${style.menu} ${style.close}` : `${style.none}`}>
        <div onClick={(e) => { toggleMenu(e.target) }} className={style.arrow} data-arrow="arrow"></div>

        <nav className={user ? ' ' : style.navCener}>
          {user &&
            <ul>
              <li>
                <Link to='/createAd'>Создать объявление</Link>
              </li>
              <li>
                <Link to='/myAds'>Мои объявления</Link>
              </li>
              <li>
                <Link to='/offers'>Предложения</Link>
              </li>
              <li>
                <Link to='/message'>Сообщения</Link>
              </li>
              <li>
                <Link to='/myReviews'>Мои отзывы</Link>
              </li>
              <li>
                <Link to='/reviews'>Отзывы обо мне</Link>
              </li>
              <li>
                <Link to='/setting'>Настройки</Link>
              </li>
              <li>
                <Link to='/exit'>Выйти</Link>
              </li>
            </ul>

          }



          {/* <li>
            <div>Rating</div>
          </li> */}

        </nav>
      </div>
=======
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

>>>>>>> navMenu
    </div>
  )
}















