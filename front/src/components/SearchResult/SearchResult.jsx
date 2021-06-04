import style from "./SearchResult.module.css";
import { useState } from "react";

const SearchResult = () => {
  const [buba, setBuba] = useState([
    {
      name: "Ершик туалетный",
      photoUrl:
        "https://lemikids.ru/upload/iblock/8d5/8d5d191e10c010b74f03ae516d40fcee.jpg",
      address: "Москва, ул. Генерала Пилюли д.8",
      infoOwner: "Саша",
      exchange: "Вантус",
      description:
        "В хорошем состоянии. Почти не использовался, только по праздникам.",
      actual: true,
    },
    {
      name: "Ершик туалетный",
      photoUrl:
        "https://lemikids.ru/upload/iblock/8d5/8d5d191e10c010b74f03ae516d40fcee.jpg",
      address: "Москва, ул. Генерала Пилюли д.8",
      infoOwner: "Саша",
      exchange: "Вантус",
      description:
        "В хорошем состоянии. Почти не использовался, только по праздникам.",
      actual: true,
    },
    {
      name: "Ершик туалетный",
      photoUrl:
        "https://lemikids.ru/upload/iblock/8d5/8d5d191e10c010b74f03ae516d40fcee.jpg",
      address: "Москва, ул. Генерала Пилюли д.8",
      infoOwner: "Саша",
      exchange: "Вантус",
      description:
        "В хорошем состоянии. Почти не использовался, только по праздникам.",
      actual: true,
    },
  ]);

  return (
    <div className={style.main_wrapper}>
      <div className={style.content_wrapper}>
        <div className={style.filter_wrapper}>
          {/* Левая панель с фильтрами */}
        </div>

        <div className={style.search_result_wrapper}>
          {/* Центральная линия с выводом результата поиска */}
          {buba.map((el) => {
            return (
              <div className={style.item_wrapper}>
                <div className={style.image_area}>
                  <img src={el.photoUrl} />
                </div>
                <div className={style.info_area}>
                  <h3>{el.name}</h3>
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
