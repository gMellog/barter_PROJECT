import style from "../NavMenu.module.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { ReactSVG } from 'react-svg'
import like from '.././img/like.svg'
import message from '.././img/message.svg'
import { useSelector } from "react-redux";


export default function UserPanel({ user }) {



  return (

    <div className={style.row} >


      <div className={style.messgae, style.icon} >
        <Link to='/message/id'>
          <ReactSVG src={message} />
        </Link>
      </div>
      <div className={style.profile, style.icon} >
        <Link  to='/profile'>
          <div className={style.profileLink} >
            {user ?

              <img src={`http://localhost:4000${user.avatar}`} alt="" />
              :
              <i className={"fas fa-camera " + style.avatar_icon_mini} ></i>
            }
          </div>
        </Link>
      </div>
    </div>
  )
}















