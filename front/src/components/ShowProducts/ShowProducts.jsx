import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStuffThunk } from "../../redux/actions/stuffAC";
import { getAllProductsThunks } from "../../redux/actions/productsAC";
import { getAllCategoriesThunk } from "../../redux/actions/categoriesAC";

import { Link } from "react-router-dom";
import style from "./style.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShowProducts({toUser}) {
  const stuffArray = useSelector((state) => state.stuffArray);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  console.log(stuffArray);
  useEffect(() => {
    // console.log('PRODUCTS');
    dispatch(getAllStuffThunk());
    dispatch(getAllCategoriesThunk());
    dispatch(getAllProductsThunks());
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.products}>
        { toUser 
        ? stuffArray.filter(stuff => stuff.infoOwner === user.id).map(
          (stuff) => (
            <ProductCard item={stuff} />
          ))
        : stuffArray.map(
          (stuff) => (
            <ProductCard item={stuff} />
          ))
        }
        
      </div>
    </div>
  );
}
