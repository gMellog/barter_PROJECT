import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchThunk } from "../../redux/actions/stuffAC";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

export default function ProductCard({ item }) {
  const { name, description, photoUrl, id } = item;
  console.log("ghhg", item);
  // const stuffArray = useSelector((state) => state.stuffArray);
  // console.log(stuffArray);
  //Нужно при получении массива с картинками создать массив объектов с полем src и адресом до картинки
  // const items = arrOfImg.map(el => {src: el})
  // var items = [
  //   {
  //     src: "https://sobakevi4.ru/wp-content/uploads/2020/10/shelti_01.jpg",
  //   },
  //   {
  //     src: "http://forumimage.ru/uploads/20200517/15897013366079418.jpg",
  //   },
  // ];

  const items = photoUrl.map(photo => ({src:photo}))

  function Item(props) {
    return (
      <Paper>
        <img src={props.item.src} />
      </Paper>
    );
  }

  return (
    <div className={style.card_wrapper}>
    
      <div className={style.card_title}>
        <Link to={`/watch/${id}`}>
          {name}
        </Link>
      </div>
      <div className={style.card_mainImg}>
        <Carousel autoPlay={false}>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div className={style.card_describtion}>
        <p>
          {description}
        </p>
        {/* <p>{product.describtion}</p> */}
      </div>
      {/* Только для зареганых пользователей */}
      <div className={style.control_area}>Предложить обмен</div>

      {/* </>); */}
    </div>
  );
}
