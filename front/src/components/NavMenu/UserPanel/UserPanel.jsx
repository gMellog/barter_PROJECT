


import style from '../style.module.css'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { ReactSVG } from 'react-svg'
import like from '.././img/like.svg'
import message from '.././img/message.svg'


export default function UserPanel({ user }) {




  return (

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
        <Link  to='/profile/id'>
          <div className={style.profileLink} >
            {user.avatar ?

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















