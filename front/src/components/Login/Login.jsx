import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import style from './style.module.css'
import InputMask from 'react-input-mask';

const ModalExample = ({toggle }) => {

  //показать регистрацию
  const [showRegistr, setShowRegistr] = useState(false)
  //показать поле для принятия смс
  const [showSms, setShowSms] = useState(true)
  //форма инфомации о пользователе
  const [formShowInfomatonUser, setFormShowInfomatonUser] = useState(false)
  //забыл пароль
  const [forgotPasswordShow, setForgotPasswordShow] = useState(false)
  //получение смс от пользователя
  const [forgotPasswordShowSMS, setForgotPasswordShowSMS] = useState(false)
  //Номер лежаший в input при регистрации
  const [number, setNumber] = useState()
  useEffect( () => {
    return () => {
      console.log('MODAL KILLED');
    }
  }, []);

  //Переключение между регистраицей и входом
  const toggleReg = () => setShowRegistr(!showRegistr);
  

  return (
    <div>
<<<<<<< HEAD
      <Modal isOpen={true} toggle={toggle} >
=======
      <Modal isOpen={true} toggle={toggle}  >
>>>>>>> navMenu
        {showRegistr ?
          //Регистрация
          showSms ?

            //Ввод номера
            <div className={style.modalRegistration}>
              <div className={style.title}>
                <h2>Регистрация</h2>
              </div>
              <div onSubmit={
                (e) => {
                  console.log(e.target);
                }
              }
                className={style.body}>
<<<<<<< HEAD
                <form action="">
=======
                <form  action="">
>>>>>>> navMenu
                  <InputMask autoFocus mask="+7\(999)-999-99-99" maskChar="_" className='mask-phone' type="tel" required placeholder='+7(___)-___-__-__'
                    value={number}
                    onChange={() => {
                      setNumber(number)
                    }}
                  />
                  {/* /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  переделать */}
                  <button onClick={() => setShowSms(!showSms)} type="button" className="btn btn-primary w-40 " >Продолжить</button>
                </form>
              </div>
              <ModalFooter >
                <div className={style.footer}>
                  <span>У вас уже есть профиль ?</span><p onClick={toggleReg}>Войти</p>
                </div>
              </ModalFooter>
            </div>
            :
            formShowInfomatonUser ?
              //Форма ввода информации о себе 
              <div className={style.modalRegistration}>
                <div className={style.title}>
                  <h2>Информация о пользователе</h2>
                </div>
                <div className={style.body}>
                  <form action="">
                  <input type="text" required placeholder='Имя' />
                  <input type="password" required placeholder='Пароль' />
                    
                    {/* /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  переделать */}
                    <button type="button" className="btn btn-primary w-40 " >Зарегестрироваться </button>
                  </form>
                </div>
                <ModalFooter >
                  <div className={style.footer}>
                    <span>У вас уже есть профиль ?</span><p onClick={toggleReg}>Войти</p>
                  </div>
                </ModalFooter>
              </div>
              :
              //Принятие смс
              <div className={style.modalRegistration}>

                <div className={style.title}>
                  <h2>Подтвердите номер телефона</h2>
                  <p>В течение 2 минут вы получите смс с кодом подтверждения</p>
                </div>
                <div className={style.body}>
                  <form action="">
                    <input autoFocus type="text" className='mask-phone' required placeholder='Код подтверждения' />
                    <span className={style.link}>Получить новый код</span>
                    <div className="d-flex mt-2">
                      <button onClick={() => { setFormShowInfomatonUser(!formShowInfomatonUser) }} type="button" className="btn btn-primary w-40 " >Подтвердить</button>
                      <button onClick={() => setShowSms(!showSms)} type="button" className="btn w-40  btn-secondary"  >Изменить номер </button>
                    </div>
                  </form>
                </div>
              </div>
          :
          //Зполение пользователем информации о себе 

          // Вход

          //Забыл пароль
          forgotPasswordShow ?
            <div className={style.modalRegistration}>
              <div className={style.title}>
                <h2>Восстановление пароля</h2>
              </div>
              <div onSubmit={
                (e) => {
                  console.log(e.target);
                }
              }
                className={style.body}>
                <form action="">
                  <InputMask autoFocus mask="+7\(999)-999-99-99" maskChar="_" className='mask-phone' type="tel" required placeholder='+7(___)-___-__-__'
                    value={number}
                    onChange={() => {
                      setNumber(number)
                    }}
                  />
                  {/* /!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  переделать */}
                  <button onClick={() => setShowSms(!showSms)} type="button" className="btn btn-primary w-40 " >Сбросить текущий пароль</button>
                </form>
              </div>

            </div>
            :
            <div className={style.modal}>
              <div className={style.title}>
                <h2>Вход</h2>
              </div>
              <div className={style.body}>
                <form action="">
                  <input type="text" className='mask-phone' required placeholder='Телефон или электронная почта' />
                  <input type="text" required placeholder='Пароль' />
                  <div className={style.bottomSettng}>

                    <div className="form-check">
                      <input className={`form-check-input ${style.checkbox}`} type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label -10" for="flexCheckChecked">
                        Запомнить пароль
                  </label>
                    </div>
                    <div onClick={() => { setForgotPasswordShow(!forgotPasswordShow) }} className={style.forgotPassword}>
                      <p>Забыли пароль ?</p>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary w-50 " >Войти</button>
                </form>
              </div>
              <ModalFooter >
                <div className={style.footer}>
                  <p onClick={toggleReg}>Зарегистрироваться</p>
                </div>
              </ModalFooter>
            </div>
        }
      </Modal>
    </div >
  );

}

export default ModalExample;
