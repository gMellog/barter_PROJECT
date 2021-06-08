import style from "./ProfilePanel.module.css";
import { useState, useEffect } from "react";
// import { useReducer } from "react";
import avatara from "./avatar.jpg";
import { ReactSVG } from "react-svg";
// Подключение SVG элементов для UI
import star from "./star.svg";
import pencil from "./bytesize_edit.svg";
import { Link } from "react-router-dom";
import { authHeader } from "../../helpers/authHeader";

import { getUserThunks,logoutUser } from '../../redux/actions/userAC';
import { useSelector, useDispatch } from 'react-redux';


const ProfilePanel = () => {

  console.log('hwe23414214124124');
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const helloDefault =
    "Привет всем! Часто меняю всяческие вещички. Рад открытым людям, пишите лучше в сообщения!";
  const [flag_edit_hello, setFlag_edit_hello] = useState(true);
  const [hello, setHello] = useState(helloDefault);

  //Загрузка одного изображения
  async function uploadImageOne(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target.files[0])
    await fetch('http://localhost:4000/photo/avatar', {
      method: 'POST',
      headers: authHeader(),
      body: formData,
    });
    dispatch(getUserThunks())
  }

  return (
    <div className={style.profile_panel_wrapper}>
      {/* {JSON.stringify(user)} */}
      {/* -------------------------------------------------------- */}
      <div className={style.avatar_area}>
        {/* Проверка на аватар и выставления стандартной позиции */}
        {user && user.avatar ?
          <img src={`http://localhost:4000${user.avatar}`} />
          // <img src={`http://localhost:4000/avatar/image-1623061042832.png`} />
          :
          <>
            {/* <form onSubmit={e => uploadImageOne(e)}>
              <h1>One</h1>
              <input type="file" name="image" />
            </form> */}
            <form onChange={e => uploadImageOne(e)}>
              <input type="file" name="image" size="1" />
              {/* <button type="submit">Upload</button> */}
            </form>
            <i className={"fas fa-camera " + style.avatar_icon} ></i>
          </>
        }
      </div>
      {/* -------------------------------------------------------- */}
      <div className={style.user_name}>
        <h4>{user && user.name}</h4>
      </div>
      {/* -------------------------------------------------------- */}
      <div className={style.stars_section}>
        <ReactSVG src={star} />
        <ReactSVG src={star} />
        <ReactSVG src={star} />
        <ReactSVG src={star} />
        <ReactSVG src={star} />
        <h6>5.0</h6>
      </div>
      {/* -------------------------------------------------------- */}
      {flag_edit_hello ? (
        <div
          className={style.text_section}
          onClick={() => setFlag_edit_hello(false)}
        >
          <p>{user && user.description}</p>
          <ReactSVG src={pencil} className={style.pencil} />
        </div>
      ) : (
        <div className={style.text_section}>
          <textarea
            rows="6"
            className={style.text_section_textarea}
            onChange={(e) => {
              setHello(e.target.value);
            }}
            onBlur={(e) => {
              setFlag_edit_hello(true);
            }}
            onMouseOver={(e) => e.target.focus()}
          >
            {hello}
          </textarea>
        </div>
      )}
      {/* -------------------------------------------------------- */}
      <div className={style.controls}>
        <Link to="/ad/add"><h5>Создать объявление</h5></Link>
        <div className={style.control_line}></div>
        <Link to="/ad"><h5>Мои объявления</h5></Link>
        <div className={style.control_line}></div>

        <Link to="/offers"><h5>Предложения</h5></Link>

        <div className={style.control_line}></div>
        <Link to="/message"><h5>Сообщения</h5></Link>
        <div className={style.control_line}></div>
        <Link onClick={()=>{
          localStorage.removeItem('user');
          dispatch(logoutUser());
          window.location = '/'
          }} to="/exit"><h5>Выйти</h5></Link>
      </div>
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
    </div>
  );
};

export default ProfilePanel;
