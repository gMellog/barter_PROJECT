import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getSearchCategoriesThunks } from "../../redux/actions/stuffAC"
import styles from "./CategoriesFilter.module.css"

export default function CategoriesFilter() {
  const categories = useSelector((state) => state.categories);

  const dispatch = useDispatch()
  const onSearchHandler = async (e, id) => {
    e.preventDefault()
    const productsCategory = await fetch(`http://localhost:4000/product/category/${id}`);
  const products = await productsCategory.json();
  console.log(products);
  }

  return (
    <div className={styles.wrapper}>
      {categories.map(category => <div key={category._id}><input value={category.name} type="button" onClick={(e) => onSearchHandler(e,category._id)}/></div>)}
    </div>
  )
}
