import style from "./SearchResult.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchResult = () => {
  const stuffArray = useSelector((state) => state.stuffArray);
  return (
    <div className={style.main_wrapper}>
      <div className={style.content_wrapper}>
        <div className={style.filter_wrapper}>
          {/* Левая панель с фильтрами */}
          <ul>
            <li>По дате размещения</li>
            <li></li>
          </ul>
        </div>

        <div className={style.search_result_wrapper}>
          {/* Центральная линия с выводом результата поиска */}
          {stuffArray.map((el) => {
            return (
              <div className={style.item_wrapper}>
                <div className={style.image_area}>
                  <img src={el.photoUrl[0]} />
                </div>
                <div className={style.info_area}>
                  <h4>{el.name}</h4>
                  <p>{el.description}</p>
                </div>
                <div className={style.control_panel}>
                  <button>Предложить</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className={style.advise_area}>
          {/* Полоса размещения рекламы и дополнительного контента */}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
