import ProductCarusel from "../ProductCarousel/ProductCarusel";
import ShowProducts from "../ShowProducts/ShowProducts";
import style from "./MainScreen.module.css";



export default function MainScreen() {
  return (
    <div className={style.main_screen_wrapper}>
    <ProductCarusel />
    <ShowProducts />
    </div>
  )
}