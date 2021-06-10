import React from "react";
import { useSelector } from "react-redux";
import style from "./ProductCarusel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./style.css"
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const ProductCarusel = () => {
  const stuffArray = useSelector((state) => state.stuffArray);
  return (
    <div className={style.main_wrapper}>
      <h5>Недавно добавленны:</h5>
      <Swiper
        spaceBetween={35}
        slidesPerView={5}
        onInit={(swiper) => { }}
        onSlideChange={(swiper) => { }}
        onReachEnd={() => console.log("Swiper end reached")}
      >
        {stuffArray.map((stuff) => {
          return (
            <SwiperSlide key={stuff.id} className={style.item_wrapper}>
              <Link to={`/watch/${stuff.id}`}>
                <img
                  src={`http://localhost:3000/${stuff.photoUrl[0]}`}
                  alt="item_icon"
                />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductCarusel;
