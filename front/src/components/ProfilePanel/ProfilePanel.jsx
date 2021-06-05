import style from "./ProfilePanel.module.css";
import { useState, useEffect } from "react";
// import { useReducer } from "react";
import avatara from "./avatar.jpg";
import { ReactSVG } from "react-svg";
// Подключение SVG элементов для UI
import star from "./star.svg";
import pencil from "./bytesize_edit.svg";

const ProfilePanel = () => {
  const user = {
    name: "Aleksandr Khabarov",
    stars: 5,
    hello:
      "Привет всем!Часто меняю всяческие вещички. Рад открытым людям, пишите лучше в сообщения!",
  };
  const helloDefault =
    "Привет всем! Часто меняю всяческие вещички. Рад открытым людям, пишите лучше в сообщения!";
  const [flag_edit_hello, setFlag_edit_hello] = useState(true);
  const [hello, setHello] = useState(helloDefault);
  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [input]);
  // const onBlurActionFunction = () => {
  //   if (document.textarea.value)
  // };

  return (
    <div className={style.profile_panel_wrapper}>
      {/* -------------------------------------------------------- */}
      <div className={style.avatar_area}>
        <img src={avatara} />
      </div>
      {/* -------------------------------------------------------- */}
      <div className={style.user_name}>
        <h4>{user.name}</h4>
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
          <p>{hello}</p>
          <ReactSVG src={pencil} className={style.pencil} />
        </div>
      ) : (
        <div className={style.text_section}>
          <textarea
            rows="5"
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
        <h5>Создать объявление</h5>
        <div className={style.control_line}></div>
        <h5>Мои объявления</h5>
        <div className={style.control_line}></div>
        <h5>Предложения</h5>
        <div className={style.control_line}></div>
        <h5>Сообщения</h5>
        <div className={style.control_line}></div>
        <h5>Выйти</h5>
      </div>
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
    </div>
  );
};

export default ProfilePanel;
