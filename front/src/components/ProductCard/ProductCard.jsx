import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import {getAllSearchThunk} from "../../redux/actions/stuffAC";
import style from "./ProductCard.module.css";
=======
import { getAllSearchThunk } from "../../redux/actions/stuffAC";
import style from "./ProductCard.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
>>>>>>> test

export default function ProductCard() {
  const { name } = useParams();
  const stuffArray = useSelector((state) => state.stuffArray);
  console.log(stuffArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSearchThunk(name));
  }, [name]);
  //Нужно при получении массива с картинками создать массив объектов с полем src и адресом до картинки
  // const items = arrOfImg.map(el => {src: el})
  var items = [
    {
      src: "https://sobakevi4.ru/wp-content/uploads/2020/10/shelti_01.jpg",
    },
    {
      src: "http://forumimage.ru/uploads/20200517/15897013366079418.jpg",
    },
  ];

  function Item(props) {
    return (
      <Paper>
        <img src={props.item.src} />
      </Paper>
    );
  }

  return (
    // <div>
    //   {stuffArray.map((stuff) => (
    //     <div key={stuff._id}>
    //       <h3>{stuff.name}</h3>
    //     </div>
    //   ))}
    // </div>
    stuffArray.map((stuff) => {
      return (
        <div className={style.card_wrapper}>
          <div className={style.card_title}>{/* {product.title} */}Product Title</div>
          <div className={style.card_mainImg}>
            <Carousel autoPlay={false}>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
          <div className={style.card_describtion}>
            <p>
              Выглядят как настоящий Паль-йот. Однако совсем не работают :(
              Думаю можно починить рублей за 500.
            </p>
            {/* <p>{product.describtion}</p> */}
          </div>
          {/* Только для зареганых пользователей */}
          <div className={style.control_area}>Предложить обмен</div>
        </div>
      );
    })
  );
}
