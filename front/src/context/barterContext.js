import React, { useContext, useState } from "react";
import styles from "../components/OfferProduct/OfferProduct.module.css";
import axios from "axios"
const barterContext = React.createContext();

axios.defaults.baseURL = "http://localhost:4000";

const BarterProvider = ({children}) => {
  const [count, setCount] = useState([])
  const selectMyProduct = (e, id) => {
    const div = e.target.parentNode
    if (count.length < 3 &&  !div.classList.contains("OfferProduct_select__ihF85")) {
      div.classList.toggle(`${styles.select}`)
      setCount([...count, id])
    } else {
      div.classList.toggle(`${styles.select}`)
      setCount([...count.filter(el=> el !== id)])
    }
  }
  const addDealHandler = (dealOne, dealTwo) => {
    axios.post('/deal', {dealOne, dealTwo})
  }

return(
   <barterContext.Provider value={{
     count,
     setCount,
     selectMyProduct,
     addDealHandler
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
