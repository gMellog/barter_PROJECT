import React, { useState, useEffect } from "react";
import styles from "./OfferProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useBarterContext } from "../../context/barterContext"
import { useHistory } from "react-router-dom";
import axios from 'axios'
import { addDeal } from "../../redux/actions/dealsAC";

export default function OfferProduct({ id, offer, setOffer }) {
  const user = useSelector(state => state.user);
  const stuffArray = useSelector((state) => state.stuffArray);
  const deals = useSelector(state => state.deals);
  const validDeals = deals.filter(deal => !deal.declined);
  const [selectedItems, setSelectedItems] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  // const { count, setCount, selectMyProduct, addDealHandler } = useBarterContext();


  const dealMan = stuffArray.filter(stuff => stuff.id === id)[0]
  const onOfferHandler = () => {

    for (const userId of selectedItems) {
      const dealOne = {userID: dealMan.infoOwner, productID: id};
      const dealTwo = {userID: user.id, productID: userId };
      axios.post('/deal', { dealOne, dealTwo} )
      .then( res => { 
        console.log('DEAL IS ', res.data);
        dispatch(addDeal(res.data))
      });
    }


    history.push("/offers");
  }


  const productInValidDeals = (product) => {
    return validDeals.find(deal => deal.participants.find(guy => guy.productID.id === product.id));
  }

  let availableToChange = 3;
  if (stuffArray.length) {
    validDeals.forEach(deal => {

      const guy = deal.participants.find(guy => guy.userID.id === stuffArray.find(stuff => stuff.id === id).infoOwner)

      if (guy) {
        availableToChange -= 1;
      }

    })
  }



  const selectMyProduct = (e, id) => {

    let realTarget;

    //OR ITS SELECTED TARGET
    if (selectedItems.length < availableToChange) {
      if (e.target.classList.contains(styles.available_offer_product_item)) {
        e.target.classList.toggle(`${styles.select}`);
        realTarget = e.target;
      }
      else {
        const div = e.target.parentNode;
        div.classList.toggle(`${styles.select}`);
        realTarget = div;
      }
    if (realTarget.classList.contains(`${styles.select}`)) {
      setSelectedItems([...selectedItems, realTarget.id])
    }
    else {
      setSelectedItems([...selectedItems.filter(el => el !== realTarget.id)]);
    }
  }
  else if(selectedItems.length === availableToChange)
  {
    let realOneTarget;

    if (e.target.classList.contains(styles.available_offer_product_item)) {
      console.log('e target is ', e.target);
      realOneTarget = e.target;
    }
    else {
      console.log('e target parentNode ', e.target.parentNode);

      const div = e.target.parentNode;
      realOneTarget = div;
    }


    if(realOneTarget.classList.contains(`${styles.select}`))
    {
      realOneTarget.classList.toggle(`${styles.select}`);
      setSelectedItems([...selectedItems.filter(el => el !== realOneTarget.id)]);
    }
  }




    // if (count.length < ) {
    //   div.classList.toggle(`${styles.select}`)
    //   if (!div.classList.contains(styles.select)) {
    //     setCount([...count, id])

    //   } else {
    //     setCount([...count.filter(el => el !== id)])
    //   }
    // }
  }
  // const addDealHandler = (dealOne, userID) => {

  //   for (const id of count) {
  //     const dealTwo = { userID, productID: id };
  //     axios.post('/deal', { dealOne, dealTwo });
  //   }

  // }
  // const getSaller = async (id) => {
  //   console.log("Saler start >>>>", id);
  //   const res = await fetch('http://localhost:4000/seller', {
  //     method: 'POST',
  //     headers: {
  //       ...authHeader(),
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ id })
  //   })
  //   const response = await res.json()

  //   console.log('SELLLER ', response);
  //   setSeller(response);
  // }



  return (
    <>
      <div className={(offer ? styles.wrapper_available_offer_products_show : styles.wrapper_available_offer_products_hide)}>
        <h3 className={styles.available_offer_title}>
          Доступны для предложения:
          </h3>
        <hr className={styles.watch_ad_change_line} />
        <div className={styles.wrapper_available_offer_product_content}>
          {stuffArray.filter(stuff => (stuff.infoOwner === user.id && !productInValidDeals(stuff))).map(stuff => {
            return (<div onClick={(e) => selectMyProduct(e, stuff.id)} id={stuff.id} key={stuff.id} className={styles.available_offer_product_item}>
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
          предложено {selectedItems.length}/{availableToChange}
        </span>
        <div className={styles.button_group}>
          <div onClick={() => offer ? setOffer(false) : setOffer(true)}
            className={`${styles.btn_changer_red}   ${offer ? styles.one_product_offset : ""}`}
          >Закрыть</div>
          <div onClick={() => onOfferHandler()} className={styles.btn_changer_green}>Предложить</div>
        </div>
      </div>
    </>
  );
}
