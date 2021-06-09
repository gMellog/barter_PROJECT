import React, { useContext, useState } from "react";
import styles from "../components/OfferProduct/OfferProduct.module.css";
import axios from "axios"
import { authHeader } from '../helpers/authHeader';

const barterContext = React.createContext();
axios.defaults.baseURL = "http://localhost:4000";

const BarterProvider = ({ children }) => {
  const [count, setCount] = useState([])
  const [seller, setSeller] = useState({})


  const selectMyProduct = (e, id) => {
    const div = e.target.parentNode
    if (count.length < 3 && !div.classList.contains("OfferProduct_select__ihF85")) {
      div.classList.toggle(`${styles.select}`)
      setCount([...count, id])
    } else {
      div.classList.toggle(`${styles.select}`)
      setCount([...count.filter(el => el !== id)])
    }
  }
  const addDealHandler = (dealOne, dealTwo) => {
    axios.post('/deal', { dealOne, dealTwo })
  }
  const getSaller = async (id) => {
    console.log("Saler start >>>>", id );
    const res = await fetch('http://localhost:4000/seller', {
      method: 'POST',
      headers: {
        ...authHeader(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    const response = await res.json()
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
