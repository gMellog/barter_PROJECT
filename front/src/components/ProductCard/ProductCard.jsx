import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSearchThunk } from "../../redux/actions/stuffAC";
import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

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

  function Item(props) {
    return (
      <Paper>
        <img src={props.photoUrl} />
      </Paper>
    );
  }

  return (
    <div className={style.card_wrapper}>
      {stuffArray.map((stuff) => {
        return (
          <Link to={`/watch/${stuff.id}`}>
            <div className={style.card_title}>
              {/* {product.title} */}Product Title
            </div>
            <div className={style.card_mainImg}>
              <Carousel autoPlay={false}>
                {stuff.photoUrl.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </Carousel>
            </div>
            <div className={style.card_describtion}>
              <p>
                Выглядят как настоящий Паль-йот. Однако совсем не работают
                Думаю можно починить рублей за 500.
              </p>
              {/* <p>{product.describtion}</p> */}
            </div>
            {/* Только для зареганых пользователей */}
            <div className={style.control_area}>Предложить обмен</div>
          </Link>
        );
      })}
    </div>
  );
}
