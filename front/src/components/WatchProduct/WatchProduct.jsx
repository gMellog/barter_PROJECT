import React, { useEffect, useState } from "react";
import styles from "./WatchProduct.module.css";
import map from "./image/maps.png";
import product from "./image/product-icon-big.png";
import product_small from "./image/product-icon-small.png";
import { useParams } from "react-router-dom";

export default function WatchProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(async () => {
    const response = await fetch(`http://localhost:4000/product/${id}`);
    const productDB = await response.json();
    setProduct(productDB);
    console.log(productDB);
  }, []);

  const thereIsPhotos = product.photoUrl && product.photoUrl.length;
  const moreThanOnePhoto = product.photoUrl && product.photoUrl.length > 1;
  const onlyOneProduct = product.photoUrl && product.photoUrl.length === 1;

  return (
    <>
      <div className={styles.wrapper_section_watch_ad}>
        <div className={styles.title_ad}>Просмотр объявления</div>
        <hr className={styles.title_ad_line} />
        <div className={styles.watch_ad_content}>
          <div className={styles.watch_ad_content_product}>
            <div className={styles.watch_ad_product_title}>{product.name}</div>

            <img
              src={thereIsPhotos ? product.photoUrl[0] : null} //TODO вставить default picture(фотоаппарат)
              alt="product-icon"
              className={styles.icon_watch_ad_product}
            />

            {moreThanOnePhoto && (
              <div className={styles.wrapper_visual_watch_ad_product}>
                {product.photoUrl.slice(1).map((photo) => {
                  return (
                    <img
                      src={photo}
                      alt="product-icon-small"
                      className={styles.icon_visual_ad_product_small}
                    />
                  );
                })}
              </div>
            )}
            <div
              className={`${styles.btn_changer_green} ${
                onlyOneProduct ? styles.one_product_offset : ""
              }`}
            >
              Предложить
            </div>
          </div>

          <div className={styles.watch_ad_description}>
            <p className={styles.watch_ad_text}>{product.description}</p>

            <h3 className={styles.watch_ad_change_title}>
              Готов поменяться на:
            </h3>
            <hr className={styles.watch_ad_change_line} />
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
