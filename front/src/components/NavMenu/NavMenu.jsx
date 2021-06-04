import style from './style.module.css'
import React, { useState } from "react";
import Login from '../Login/Login'

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
    </div>
  )
}















