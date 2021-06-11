import React, { useContext, useState } from "react";
import styles from "../components/OfferProduct/OfferProduct.module.css";
import axios from "axios"
import { authHeader } from '../helpers/authHeader';

const barterContext = React.createContext();
axios.defaults.baseURL = "http://localhost:4000";

const BarterProvider = ({ children }) => {
  const [count, setCount] = useState([])
  const [seller, setSeller] = useState({})
  console.log('COUNT IS 123', count);

  const selectMyProduct = (e, id) => {
    const div = e.target.parentNode
    console.log('hey yo!!!!!!!');
    if (count.length < 3) {
      div.classList.toggle(`${styles.select}`)
      if (!div.classList.contains(styles.select)) {
        setCount([...count, id])
      
      } else {
        setCount([...count.filter(el => el !== id)])
      }
    }
  }
  const addDealHandler = (dealOne, userID) => {

    for (const id of count) {
      const dealTwo = { userID, productID: id };
      axios.post('/deal', { dealOne, dealTwo });
    }

  }
  const getSaller = async (id) => {
    console.log("Saler start >>>>", id);
    const res = await fetch('http://localhost:4000/seller', {
      method: 'POST',
      headers: {
        ...authHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    const response = await res.json()

    console.log('SELLLER ', response);
    setSeller(response);
  }

  return (
    <barterContext.Provider value={{
      count,
      setCount,
      selectMyProduct,
      addDealHandler,
      seller,
      getSaller
    }}>
      {children}
    </barterContext.Provider>
  )

}
export default BarterProvider;
const useBarterContext = () => useContext(barterContext)
export {
  useBarterContext
}
