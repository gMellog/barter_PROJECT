import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getAllSearchThunk} from "../../redux/actions/stuffAC";
import style from "./ProductCard.module.css";

export default function ProductCard() {
  const { name } = useParams();
  const stuffArray = useSelector((state) => state.stuffArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSearchThunk(name));
  }, [name]);

  return (
    // Так было пока сюда не влез Хабаров
    // <div>
    //   {stuffArray.map((stuff) => (
    //     <div key={stuff._id}>
    //       <h3>{stuff.name}</h3>
    //     </div>
    //   ))}
    // </div>
    //Так стало:
    stuffArray.map((stuff) => {
      return (
        <div className={style.card_wrapper}>
          <div className={style.card_title}>
            Title
          </div>
          <div className={style.card_mainImg}>
            <img src="" alt="" />Image
          </div>
          <div >
            Describtion
          </div>
        </div>
      )})
  );
}
