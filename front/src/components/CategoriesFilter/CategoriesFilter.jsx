import React from 'react'
import { useDispatch } from "react-redux";
import { getSearchCategoriesThunks } from "../../redux/actions/stuffAC"
import styles from "./CategoriesFilter.module.css"

export default function CategoriesFilter() {
  const dispatch = useDispatch()
  const onSearchHandler = (e) => {
    e.preventDefault()
    console.log(e.target.value);
    dispatch(getSearchCategoriesThunks(e.target.value))
  }

  return (
    <div className={styles.wrapper}>
      <div><input value="Техника" type="button" onClick={(e) => onSearchHandler(e)}/></div>
      <div><input value="Одежда" type="button" onClick={(e) => onSearchHandler(e)}/></div>
      <div><input value="Транспорт" type="button" onClick={(e) => onSearchHandler(e)}/></div>
      <div><input value="Животные" type="button" onClick={(e) => onSearchHandler(e)}/></div>
    </div>
  )
}
