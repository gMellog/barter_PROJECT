import style from './style.module.css'
import React, { useState } from "react";
import Login from '../Login/Login'
import Searcher from "../Searcher/Searcher"

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
        logo
      </div>
      <div className={style.left} >
        <div className={style.row} >
          <div className={style.linkReg} >
            {/* Активатор и модальное окно */}
            <span onClick={() => { toggle() }} >Вход и регистрация!</span>
            {
              modal && <Login toggle={toggle} />
            }
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















