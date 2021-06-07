import React from "react";
import styles from "./OfferProduct.module.css";
import product_offer_1 from "./image/productOffer-1.png";
import product_offer_2 from "./image/productOffer-2.png";
import product_offer_3 from "./image/productOffer-3.png";
import product_offer_4 from "./image/productOffer-4.png";

export default function OfferProduct() {
  return (
    <>
      <div>
        <div className={styles.wrapper_available_offer_products}>
          <h3 className={styles.available_offer_title}>
            Доступны для предложения:
          </h3>
          <hr className={styles.watch_ad_change_line} />
          <div className={styles.wrapper_available_offer_product_content}>
            <div className={styles.available_offer_product_item}>
              <img
                src={product_offer_1}
                alt="product-icon"
                className={styles.available_product_icon}
              />
              <span className={styles.available_product_sign}>
                Джинсы Сomiks
              </span>
            </div>
            <div className={styles.available_offer_product_item}>
              <img
                src={product_offer_2}
                alt="product-icon"
                className={styles.available_product_icon}
              />
              <span className={styles.available_product_sign}>
                Шины Nichlen
              </span>
            </div>
            <div className={styles.available_offer_product_item}>
              <img
                src={product_offer_3}
                alt="product-icon"
                className={styles.available_product_icon}
              />
              <span className={styles.available_product_sign}>
                Часы PROLLIX
              </span>
            </div>
            <div className={styles.available_offer_product_item}>
              <img
                src={product_offer_4}
                alt="product-icon"
                className={styles.available_product_icon}
              />
              <span className={styles.available_product_sign}>
                Бампер для Mazda
              </span>
            </div>
          </div>
          <span className={styles.available_product_sign_offer_text}>
            предложено 2/3
          </span>
        </div>
          <div className={styles.btn_changer_green}>Предложить</div>
      </div>
    </>
  );
}
