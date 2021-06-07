import style from './style.module.css'
import React, { useEffect, useState } from "react";
import Login from '../Login/Login'
import Searcher from "../Searcher/Searcher"
import UserPanel from "./UserPanel/UserPanel"


//
import { ReactSVG } from 'react-svg'
import logoSvg from './img/Logo.svg'
import like from './img/like.svg'
import message from './img/message.svg'

import { getUserThunks } from '../../redux/actions/userAC';
import { useSelector, useDispatch } from 'react-redux';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function NavMenu() {
  //Определяет регистраицю пользователя 
  // const [user, setUser] = useState(false)

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserThunks())
  }, [])


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

          {JSON.stringify(user) === '{}' ?

            <div className={style.linkReg} >
              {/* Активатор и модальное окно */}
              <span onClick={() => { toggle() }} >Вход и регистрация!</span>
              {modal && <Login toggle={toggle} />}
            </div>
            :
            <UserPanel user={user} />

          }
        </div>
        <Searcher />
      </div>
      <div className={style.headerImg} >
        <img src="/headerImg.png" alt="" />
      </div>

    </div>
  )
}















