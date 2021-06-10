import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStuffThunk } from "../../redux/actions/stuffAC";
import { getAllProductsThunks } from "../../redux/actions/productsAC";
import { getAllCategoriesThunk } from "../../redux/actions/categoriesAC";

import { Link } from "react-router-dom";
import style from "./style.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ShowProducts() {
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
        {stuffArray.map(
          (stuff) => (
            <ProductCard item={stuff} />
          )
          //   <>
          //   <div className={style.product}>
          //     <Link to={`/watch/${stuff.id}`}>
          //       <img src={stuff.photoUrl[0]} alt="" />
          //       <img
          //         src={`http://localhost:4000/${stuff.photoUrl[0]}`}
          //         alt=""
          //       />
          //       <div key={stuff.id}>
          //         <h3>{stuff.name}</h3>
          //       </div>
          //     </Link>
          //   </div>
          // </>
        )}
      </div>
      {/* {stuffArray.map((stuff) => (  } */}
    </div>
  );
}
