import style from "./ProfilePanel.module.css";
import { useState, useEffect } from "react";
// import { useReducer } from "react";
import avatara from "./avatar.jpg";
import { ReactSVG } from "react-svg";
// Подключение SVG элементов для UI
import star from "./star.svg";
import pencil from "./bytesize_edit.svg";
import { Link } from "react-router-dom";

const ProfilePanel = () => {
  const [avatar, setAvatar] = useState()

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


  //Загрузка одного изображения
  async function uploadImageOne(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target.image.files[0])
    await fetch('http://localhost:3001/photo/avatar', {
      method: 'POST',
      body: formData,
    });
  }


  return (
    <div className={style.profile_panel_wrapper}>
      {/* -------------------------------------------------------- */}
      <div className={style.avatar_area}>
        {/* Проверка на аватар и выставления стандартной позиции */}
        {avatar ?
          <img />
          :
          <>

            <form onSubmit={e => uploadImageOne(e)}>
              <h1>One</h1>
              <input type="file" name="image" />
              <button type="submit">Upload</button>
            </form>
            <i class="fas fa-camera"></i>
          </>
        }
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
        <Link to="/ad/id"><h5>Создать объявление</h5></Link>
        <div className={style.control_line}></div>
        <Link to="/ad"><h5>Мои объявления</h5></Link>
        <div className={style.control_line}></div>

        <Link to="/offers/id"><h5>Предложения</h5></Link>

        <div className={style.control_line}></div>
        <Link to="/message/id"><h5>Сообщения</h5></Link>
        <div className={style.control_line}></div>
        <Link to="/exit"><h5>Выйти</h5></Link>
      </div>
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
      {/* -------------------------------------------------------- */}
    </div>
  );
};

export default ProfilePanel;
