import React, { useEffect, useReducer, useState } from "react";
import styles from "./WatchProduct.module.css";
import map from "./image/maps.png";
import { useParams } from "react-router-dom";
import OfferProduct from "../OfferProduct/OfferProduct"
import { authHeader } from "../../helpers/authHeader";
import { useSelector } from "react-redux";

export default function WatchProduct() {

  const user = useSelector(state => state.user);
  const stuffArray = useSelector(state => state.stuffArray);
  const deals = useSelector(state => state.deals);
  const [offer, setOffer] = useState(false)
  const [product, setProduct] = useState(null);
  const [isUserProduct, setIsUserProduct] = useState(false);
  const { id } = useParams();

  console.log(deals);

  const availableProducts = stuffArray.filter(stuff => stuff.infoOwner === user?.id && !deals.find(deal => !deal.declined && deal.participants.find(guy => guy.productID.id === stuff.id))).length;

  useEffect(() => {
    fetch(`http://localhost:4000/product/${id}`)
      .then(res => res.json())
      .then(res => 
        {
          setIsUserProduct(res.infoOwner === user?.id);
          setProduct(res);
        })
  }, []);

  // product.photoUrl = [...new Set(product.photoUrl)]
  const thereIsPhotos = product && product.photoUrl && product.photoUrl.length;
  const moreThanOnePhoto = product && product.photoUrl && product.photoUrl.length > 1;
//  const onlyOneProduct = product.photoUrl && product.photoUrl.length === 1;



  return (
    <>
      <div className={styles.wrapper_section_watch_ad}>
        <div className={styles.title_ad}>Просмотр объявления</div>
        <hr className={styles.title_ad_line} />
        <div className={styles.watch_ad_content}>
          <div className={styles.watch_ad_content_product}>
            <div className={styles.watch_ad_product_title}>{product && product.name}</div>

            <img
              src={
                thereIsPhotos ? 'http://localhost:4000/' + product.photoUrl[0] : null} //TODO вставить default picture(фотоаппарат)
              alt="product-icon"
              className={styles.icon_watch_ad_product}

            />

            {moreThanOnePhoto && (
              <div className={styles.wrapper_visual_watch_ad_product}>

                {product.photoUrl[1] && product.photoUrl.slice(1).map((photo) => {
                  return (
                    // photo ?
                    <img
                      src={`http://localhost:4000/${photo}`}
                      alt="product-icon-small"
                      className={styles.icon_visual_ad_product_small}
                    />
                    // : ''
                  );
                })}
              </div>
            )}
            {
              product && !isUserProduct && availableProducts ? 
              <div onClick={() => setOffer(true)}
                className={`${styles.btn_changer_green} `}
              >{"Предложить"}
              </div>
              :
              null
              }
          </div>

          <div className={styles.watch_ad_description}>
            <p className={styles.watch_ad_text}>{product && product.description}</p>

            <h3 className={styles.watch_ad_change_title}>
              Готов поменяться на:
            </h3>
            <hr className={styles.watch_ad_change_line} />
            <div className={styles.wrapper_watch_ad_changes}>

              {product && product.exchange.map((tagText,i) => {

                let divClass;

                switch(i)
                {
                  case 0:
                    divClass = styles.watch_ad_change_item_blue;
                  break;

                  case 1:
                    divClass = styles.watch_ad_change_item_yellow;
                  break;

                  case 2:
                    divClass = styles.watch_ad_change_item_green;
                  break;

                  case 3:
                    divClass = styles.watch_ad_change_item_red;
                  break;
                }

                return (
                  <div className={divClass}>{ tagText }</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <OfferProduct setOffer={setOffer} id={id} offer={offer} />
    </>
  );
}
