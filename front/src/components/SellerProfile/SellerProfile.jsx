import style from "./SellerProfile.module.css";
import { useState, useEffect, useContext } from "react";
// import { useReducer } from "react";
import avatara from "./avatar.jpg";
import { ReactSVG } from "react-svg";
// Подключение SVG элементов для UI
import star from "./star.svg";
import pencil from "./bytesize_edit.svg";
import { Link, useParams } from "react-router-dom";
import { authHeader } from "../../helpers/authHeader";

import { getUserThunks, logoutUser } from '../../redux/actions/userAC';
import { useSelector, useDispatch } from 'react-redux';
import { useBarterContext } from '../../context/barterContext.js'





const SellerProfile = () => {
  const { seller, getSaller } = useBarterContext();


  const helloDefault =
    "Привет всем! Часто меняю всяческие вещички. Рад открытым людям, пишите лучше в сообщения!";
  const [flag_edit_hello, setFlag_edit_hello] = useState(true);
  const [hello, setHello] = useState(helloDefault);

  const {id} = useParams()
  useEffect(() => {
    getSaller(id);
  },[])

  return (
    <div className={style.profile_panel_wrapper}>
      {/* {JSON.stringify(seller)} */}
      {/* -------------------------------------------------------- */}
      <div className={style.avatar_area}>
        {/* Проверка на аватар и выставления стандартной позиции */}
        {seller && seller.avatar ?
          <img src={`http://localhost:4000${seller.avatar}`} />
          // <img src={`http://localhost:4000/avatar/image-1623061042832.png`} />
          :
          <>
            {/* <form onSubmit={e => uploadImageOne(e)}>
              <h1>One</h1>
              <input type="file" name="image" />
            </form> */}
            <i className={"fas fa-camera " + style.avatar_icon} ></i>
          </>
        }
      </div>
      {/* -------------------------------------------------------- */}
      <div className={style.user_name}>
        <h4>{seller && seller.name}</h4>
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
          <p>{seller && seller.description}</p>
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
    </div>
  );
};

export default SellerProfile;
