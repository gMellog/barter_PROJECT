import React, { useState, useEffect } from "react";
import styles from "./OfferProduct.module.css";
import { useSelector } from "react-redux";
import { useBarterContext } from "../../context/barterContext"
import { useHistory } from "react-router-dom";


export default function OfferProduct({ id, offer, setOffer }) {
  const user = useSelector(state => state.user);
  const stuffArray = useSelector((state) => state.stuffArray);
  const deals = useSelector(state => state.deals);
  const validDeals = deals.filter(deal => !deal.declined);

  const history = useHistory();

  const { count, setCount, selectMyProduct, addDealHandler } = useBarterContext();


  useEffect( () => {
    return () => {
      setCount([]);
    }
  }, []);


  const dealMan = stuffArray.filter(stuff => stuff.id === id)[0]
  const onOfferHandler = () => {

    //pass {dealMan, id} {user.id} { userID: user.id, productID: count[i] }

    addDealHandler({ userID: dealMan.infoOwner, productID: id }, user.id);

    history.push("/offers");
  }

  const productInValidDeals = (product) => {
    return validDeals.find(deal => deal.participants.find(guy => guy.productID.id === product.id));
  }

   let availableToChange = 3;
   if(stuffArray.length)
   {
    validDeals.forEach(deal => {
    
      const guy = deal.participants.find(guy => guy.userID.id === stuffArray.find(stuff => stuff.id === id).infoOwner)
    
    if(guy)
    {
      availableToChange -= 1;
    }

  })
  }


  return (
    <>
      <div className={(offer ? styles.wrapper_available_offer_products_show : styles.wrapper_available_offer_products_hide)}>
        <h3 className={styles.available_offer_title}>
          Доступны для предложения:
          </h3>
        <hr className={styles.watch_ad_change_line} />
        <div className={styles.wrapper_available_offer_product_content}>
          {stuffArray.filter(stuff => (stuff.infoOwner === user.id && !productInValidDeals(stuff))).map(stuff => {
            return (<div onClick={(e) => selectMyProduct(e, stuff.id)} key={stuff.id} className={styles.available_offer_product_item}>
              <img
                src={`http://localhost:4000/${stuff.photoUrl[0]}`}
                alt="product-icon"
                className={styles.available_product_icon}
              />
              <span className={styles.available_product_sign}>
                {stuff.name}
              </span>
            </div>)
          })}

        </div>
          <span className={styles.available_product_sign_offer_text}>
            предложено {count.length}/{availableToChange}
          </span>
        <div className={styles.button_group}>
          <div  onClick={() => offer ? setOffer(false) : setOffer(true)}
            className={`${styles.btn_changer_red}   ${offer ? styles.one_product_offset : ""}`}
          >Закрыть</div>
          <div onClick={() => onOfferHandler()} className={styles.btn_changer_green}>Предложить</div>
        </div>
      </div>
    </>
  );
}
