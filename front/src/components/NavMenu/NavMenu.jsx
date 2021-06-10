import style from './NavMenu.module.css'
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
    menu.classList.toggle(`${style.close}`)
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
          {/* daladno753    79850592945 */}
          { user ?
              <UserPanel user={user} />
            :
            <>
              <div className={style.linkReg} >
                {/* Активатор и модальное окно */}
                <span onClick={() => { toggle() }} >Вход и регистрация!</span>
                {modal && <Login toggle={toggle} />}
              </div>


            </>
          }

        </div>
        <Searcher />
      </div>
      <div className={style.headerImg} >
        <img src="/headerImg.png" alt="" />
      </div>

    </div >
  )
}















