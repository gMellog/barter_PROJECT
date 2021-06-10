import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import style from "./style.module.css";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { getUserThunks, setUser } from "../../redux/actions/userAC";
import {setTags} from "../../redux/actions/tagsAC"
import { useHistory } from "react-router-dom";
import { setDeals } from "../../redux/actions/dealsAC";

//Simply checks Russian Number
function isValidNumber(number) {
  return number.split("").filter((ch) => !isNaN(Number(ch))).length === 11;
}

function isValidCode(code) {
  return code.length === 4;
}

const ModalExample = ({ toggle }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showRegistr, setShowRegistr] = useState(false);
  const [showSms, setShowSms] = useState(false);
  const [formShowInfomatonUser, setFormShowInfomatonUser] = useState(false);
  const [forgotPasswordShow, setForgotPasswordShow] = useState(false);
  const [forgotPasswordShowSMS, setForgotPasswordShowSMS] = useState(false);

  const [login, setLogin] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //Переключение между регистраицей и входом
  const toggleReg = () => {
    setShowRegistr(!showRegistr);
  };

  const sendPhoneNumberHandler = () => {
    //* check for operators
    //Typical russian number digits
    if (isValidNumber(login)) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number: login, code }),
      };

      fetch("http://localhost:4000/user/reg", options).then(async (res) => {
        if (res.status === 200) {
          setShowSms(!showSms);
        }
      });
    } else {
      console.log("INVALID NUMBER");
    }
  };

  const verifyCode = () => {
    if (isValidCode(code)) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number: login, code }),
      };

      fetch("http://localhost:4000/user/code", options).then(async (res) => {
        if (res.status === 200) {
          setFormShowInfomatonUser(!formShowInfomatonUser);
        }
      });
    } else {
      console.log("INVALID CODE");
    }
  };

  const isSpaceAdd = (prevValue, newValue) => {
    if (
      prevValue.length > newValue.length ||
      prevValue.length === newValue.length
    ) {
      return false;
    }

    return newValue[newValue.length - 1] === " ";
  };

  const endRegistrationHandler = () => {
    if (name && password && login) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number: login, name, password }),
      };

      fetch("http://localhost:4000/user/reg", options).then(async (res) => {
        if (res.status === 200) {
          console.log("End of reg!");
          setName("");
          setLogin("");
          setPassword("");
          setShowSms(false);
          toggleReg();
        }
      });
    }
  };

  const loginHandler = () => {
    if (login && password) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      };

      fetch("http://localhost:4000/user/login", options).then(async (res) => {
        if (res.status === 200) {
          const { user, token, tags, deals } = await res.json();
          console.log('TAGS! ', tags);
          dispatch(setUser(user));
          dispatch(setTags(tags));
          dispatch(setDeals(deals));
          localStorage.setItem("user", JSON.stringify({ id: user.id, token }));
          toggle();
        } else {
          console.log("WRONG LOGIN!!!!");
        }
      });
    }
  };

  const changeNumberHandler = () => {
    setLogin("");
    setShowSms(!showSms);
  };

  const drawRegByNumber = () => (
    <div className={style.modalRegistration}>
      <div className={style.title}>
        <h2>Регистрация</h2>
      </div>
      <div onSubmit={(e) => {}} className={style.body}>
        <form action="">
          <InputMask
            autoFocus
            mask="+7\(999)-999-99-99"
            maskChar="_"
            className="mask-phone"
            type="tel"
            required
            placeholder="+7(___)-___-__-__"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          {/* /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  переделать */}
          <button
            onClick={() => sendPhoneNumberHandler() /*setShowSms(!showSms)*/}
            type="button"
            className="btn btn-primary w-40 "
          >
            Продолжить
          </button>
        </form>
      </div>
      <ModalFooter>
        <div className={style.footer}>
          <span>У вас уже есть профиль ?</span>
          <p onClick={toggleReg}>Войти</p>
        </div>
      </ModalFooter>
    </div>
  );

  const drawSuccessCodeShow = () => (
    <div className={style.modalRegistration}>
      <div className={style.title}>
        <h2>Информация о пользователе</h2>
      </div>
      <div className={style.body}>
        <form action="">
          <input
            type="text"
            required
            placeholder="Имя"
            value={name}
            onChange={(e) => {
              if (!isSpaceAdd(name, e.target.value)) setName(e.target.value);
            }}
          />
          <input
            type="password"
            required
            placeholder="Пароль"
            value={password}
            onChange={(e) => {
              if (!isSpaceAdd(password, e.target.value))
                setPassword(e.target.value);
            }}
          />

          {/* /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  переделать */}
          <button
            type="button"
            className="btn btn-primary w-40 "
            onClick={() => endRegistrationHandler()}
          >
            Зарегистрироваться{" "}
          </button>
        </form>
      </div>
    </div>
  );

  const drawTakeSmsShow = () => (
    <div className={style.modalRegistration}>
      <div className={style.title}>
        <h2>Подтвердите номер телефона</h2>
        <p>В течение 2 минут вы получите смс с кодом подтверждения</p>
      </div>
      <div className={style.body}>
        <form action="">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            autoFocus
            type="text"
            className="mask-phone"
            required
            placeholder="Код подтверждения"
          />
          <span className={style.link}>Получить новый код</span>
          <div className="d-flex mt-2">
            <button
              onClick={() => {
                verifyCode();
              }}
              type="button"
              className="btn btn-primary w-40 "
            >
              Подтвердить
            </button>
            <button
              onClick={() => changeNumberHandler()}
              type="button"
              className="btn w-40  btn-secondary"
            >
              Изменить номер{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const drawForgotPassShow = () => (
    <div className={style.modalRegistration}>
      <div className={style.title}>
        <h2>Восстановление пароля</h2>
      </div>
      <div
        onSubmit={(e) => {
          console.log(e.target);
        }}
        className={style.body}
      >
        <form action="">
          <InputMask
            autoFocus
            mask="+7\(999)-999-99-99"
            maskChar="_"
            className="mask-phone"
            type="tel"
            required
            placeholder="+7(___)-___-__-__"
          />
          {/* /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  переделать */}
          <button
            onClick={() => setShowSms(!showSms)}
            type="button"
            className="btn btn-primary w-40 "
          >
            Сбросить текущий пароль
          </button>
        </form>
      </div>
    </div>
  );

  const drawStandardEntry = () => (
    <div className={style.modal}>
      <div className={style.title}>
        <h2>Вход</h2>
      </div>
      <div className={style.body}>
        <form action="">
          <input
            type="text"
            className="mask-phone"
            value={login}
            onChange={(e) => {
              if (!isSpaceAdd(login, e.target.value)) setLogin(e.target.value);
            }}
            required
            placeholder="Телефон или электронная почта"
          />
          <input
            type="password"
            onKeyPress={(e) => (e.key === "Enter" ? loginHandler() : null)}
            required
            value={password}
            onChange={(e) => {
              if (!isSpaceAdd(password, e.target.value))
                setPassword(e.target.value);
            }}
            placeholder="Пароль"
          />
          <div className={style.bottomSettng}>
            <div className="form-check">
              <input
                className={`form-check-input ${style.checkbox}`}
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label -10" for="flexCheckChecked">
                Запомнить пароль
              </label>
            </div>
            <div
              onClick={() => {
                setForgotPasswordShow(!forgotPasswordShow);
              }}
              className={style.forgotPassword}
            >
              <p>Забыли пароль ?</p>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-primary w-50 "
            onClick={loginHandler}
          >
            Войти
          </button>
        </form>
      </div>
      <ModalFooter>
        <div className={style.footer}>
          <p
            onClick={() => {
              setLogin("");
              setPassword("");
              setShowSms(true);
              toggleReg();
            }}
          >
            Зарегистрироваться
          </p>
        </div>
      </ModalFooter>
    </div>
  );

  return (
    <div>
      <Modal isOpen={true} toggle={toggle}>
        {showRegistr
          ? showSms
            ? drawRegByNumber()
            : formShowInfomatonUser
            ? drawSuccessCodeShow()
            : drawTakeSmsShow()
          : forgotPasswordShow
          ? drawForgotPassShow()
          : drawStandardEntry()}
      </Modal>
    </div>
  );
};

export default ModalExample;
