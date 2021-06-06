import React from "react";
import styles from "./AddProduct.module.css";
import map from "./image/maps.png";
import product from "./image/product-icon-big.png";
import product_small from "./image/product-icon-small.png";

export default function AddProduct() {
  return (
    <>
      <div className={styles.wrapper_section_watch_ad}>
        <div className={styles.title_ad}>Просмотр объявления</div>
        <hr className={styles.title_ad_line}/>
        <div className={styles.watch_ad_content}>
          <div className={styles.watch_ad_content_product}>
            <div className={styles.watch_ad_product_title}>
              Кроссовки BUCCI ROCKETS
            </div>
            <img
              src={product}
              alt="product-icon"
              className={styles.icon_watch_ad_product}
            />
            <div className={styles.wrapper_visual_watch_ad_product}>
              <img
                src={product_small}
                alt="product-icon-small"
                className={styles.icon_visual_ad_product_small}
              />
              <img
                src={product_small}
                alt="product-icon-small"
                className={styles.icon_visual_ad_product_small}
              />
              <img
                src={product_small}
                alt="product-icon-small"
                className={styles.icon_visual_ad_product_small}
              />
            </div>
            <div className={styles.btn_changer_green}>Предложить</div>
          </div>

          <div className={styles.watch_ad_description}>
            <p className={styles.watch_ad_text}>
              Данная модель отлично сохраняет тепло благодаря сочетанию в
              отделке искусственного меха в качестве утеплителя и натуральной
              кожи. Такой тандем обезопасит стопы от промозглого ветра, влаги и
              подтаявшего снега. Цельная и гладкая кожа предотвращает попадание
              пыли. В изделии нет лишних деталей и украшений, которые могли бы
              потерять первоначальный вид или оторваться, эти кроссовки
              исключительно функциональны и хороши для города или поездок.
            </p>

            <h3 className={styles.watch_ad_change_title}>
              Готов поменяться на:
            </h3>
            <hr className={styles.watch_ad_change_line}/>
            <div className={styles.wrapper_watch_ad_changes}>
              <div className={styles.watch_ad_change_item_blue}>велосипед</div>
              <div className={styles.watch_ad_change_item_yellow}>книги</div>
              <div className={styles.watch_ad_change_item_green}>кальян</div>
              <div className={styles.watch_ad_change_item_red}>
                на все что угодно
              </div>
            </div>
            <img src={map} alt="map" className={styles.watch_ad_change_map} />
          </div>
        </div>
      </div>
    </>
  );
}
