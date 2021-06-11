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
  const items = photoUrl.map(photo => ({src:`http://localhost:4000${photo}`}))
  
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
      <div className={style.control_area}><Link to={`/watch/${id}`}>Предложить обмен</Link></div>
    </div>
  );
}
