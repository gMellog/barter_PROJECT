import { useReducer } from "react";
import avatara from "./avatar.jpg";
import style from "./ProfilePanel.module.css";
import star from "./star.svg";
import { ReactSVG } from "react-svg";

const ProfilePanel = () => {
  const user = {
    name: "Aleksandr Khabarov",
    stars: 5,
    hello:
      "Привет всем!Часто меняю всяческие вещички. Рад открытым людям, пишите лучше в сообщения!",
  };
  return (
    <div className={style.profile_panel_wrapper}>
      {/* -------------------------------------------------------- */}
      <div className={style.avatar_area}>
        <img src={avatara} />
      </div>
      {/* -------------------------------------------------------- */}
      <div className={style.user_name}>
        <h3>{user.name}</h3>
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
      <div className={style.text_section}>
        <p>{user.hello}</p>
      </div>
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
