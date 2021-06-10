import ProductCarusel from "../ProductCarousel/ProductCarusel";
import ShowProducts from "../ShowProducts/ShowProducts";
import style from "./MainScreen.module.css";
import {useRef, useEffect, useState} from "react";
import Login from '../Login/Login'


export default function MainScreen() {
  const [modalShow, setModalShow] = useState(false);
  const toggle = () => {
    setModalShow(!modalShow)
  };

  useEffect(() => {
    eval(
      `try {
         TagCanvas.Start(
           'myCanvas',
           '',
           {textColour: 'orange',
           outlineColour: '#0000', 
           zoom: 1.1,
           initial: [0.14, 0.08],
           weightMode: "outline",
           weightSize: 3.0
          }
         );
       }
       catch(e) {
         document.getElementById('myCanvasContainer').style.display = 'none';
       }`
     );
  }, [])
  
    
  
  return (
    // <div className={style.main_screen_wrapper}>
    // <ProductCarusel />
    // <ShowProducts />
    // </div>

    // Если user undefined
    <div className={style.main_screen_wrapper2}>
    <div className={style.greeting_area}>
      <div className={style.greeting_words}>
      <h2>Приветствуем вас</h2>
      <h2>в приложении</h2>
      <h1>CHANGER</h1>
      <p>Для того что бы использовать приложение, пожалуйста, зарегистрируйтесь.</p>
      {modalShow && <Login toggle={toggle} />}
      <button onClick={() => { toggle() }} className={style.button_register}>Зарегистрироваться</button>
      </div>
      </div>
    <div className={style.tags_area}> 
      <canvas width="700" height="700" id="myCanvas" >
                <ul>
                    <li><a href="#">Шапка</a></li>
                    <li><a href="#">Часы</a></li>
                    <li><a href="#">Телефон</a></li>
                    <li><a href="#">Стул</a></li>
                    <li><a href="#">Шахматы</a></li>
                    <li><a href="#">Кеды</a></li>
                    <li><a href="#">Кроссовки</a></li>
                    <li><a href="#">Куртка</a></li>
                    <li><a href="#">Джинсы</a></li>
                    <li><a href="#">Трусы</a></li>
                    <li><a href="#">Купальник</a></li>
                    <li><a href="#">Шкатулка</a></li>
                    <li><a href="#">Ваза</a></li>
                    <li><a href="#">Картина</a></li>
                    <li><a href="#">Журнал</a></li>
                    <li><a href="#">Книга</a></li>
                    <li><a href="#">Пальто</a></li>
                    <li><a href="#">Ботинки</a></li>
                    <li><a href="#">Лыжи</a></li>
                    <li><a href="#">Коньки</a></li>
                    <li><a href="#">Коробка</a></li>
                    <li><a href="#">Матрас</a></li>
                    <li><a href="#">Подушка</a></li>
                    <li><a href="#">Плед</a></li>
                    <li><a href="#">Кастрюля</a></li>
                    <li><a href="#">Гаечный ключ</a></li>
                    <li><a href="#">Стол</a></li>
                    <li><a href="#">Диван</a></li>
                </ul>
            </canvas>
            </div>
    </div>
  )
}
