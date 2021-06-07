import style from "./AddProduct.module.css";
import plus_mini from "./svg/plus_small.svg";
import { ReactSVG } from "react-svg";
import {useEffect} from "react";
import init from "../YandexMap/ymaps";

const AddProduct = () => {

  useEffect(() => {
    window.ymaps.ready(init)
  }, [])



  return (
    <div className={style.add_product_wrapper}>
      {/* ------------------------------------- */}
      <div className={style.title}>
        <h4>Новое объявление</h4>
      </div>
      {/* ------------------------------------- */}
      <div className={style.content_area}>
        <div className={style.left_side}>
          <div className={style.product_title}>
            Кроссовки BUCCI ROCKETS
          </div>
          {/* Большая фотография */}
          <div className={style.large_image_area}>
            <input id="field_max_file" type="file" className={style.add_file_input}/>
            <label for="field_max_file"><i className={"fas fa-camera " + style.photo_icon}/></label>
          </div>
          {/* Блок маленьких фотографий */}
          <div className={style.mini_images_area}>
            <div className={style.add_mini_img}>
              <input id="field_mini_file-1" type="file" className={style.add_file_input}/>
              <label for="field_mini_file-1"><i className={"fas fa-plus " + style.plus}/></label>
            </div>
            <div className={style.add_mini_img}>
              <input id="field_mini_file-2" type="file" className={style.add_file_input}/>
              <label for="field_mini_file-2"><i className={"fas fa-plus " + style.plus}/></label>
            </div>
            <div className={style.add_mini_img}>
              <input id="field_mini_file-3" type="file" className={style.add_file_input}/>
              <label for="field_mini_file-3"><i className={"fas fa-plus " + style.plus}/></label>
            </div>
          </div>
          {/* Селектор выбора на что меняться плюс кнопка*/}
          <div className={style.selector_area}>
            <select name="" id="">
              <option value="велосипед">велосипед</option>
              <option value="самокат">самокат</option>
              <option value="на все что угодно">на все что угодно</option>
            </select>
            {/* Кнопка добавления тега */}
            <button><ReactSVG src={plus_mini}/></button>
          </div>
          {/* Область отображения тегов */}
          <div className={style.tags_area}>
            <div className={style.tag_button + " " + style.blue_bg}>Велосипед</div>
            <div className={style.tag_button + " " + style.green_bg}>Самокат</div>
            <div className={style.tag_button + " " + style.yellow_bg}>Пивко</div>
            <div className={style.tag_button + " " + style.red_bg}>Все что угодно</div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div className={style.right_side}>     
          <div className={style.product_description}>
            <p>Данная модель отлично сохраняет тепло благодаря сочетанию в отделке искусственного меха в качестве утеплителя и натуральной кожи. Такой тандем обезопасит стопы от промозглого ветра, влаги и подтаявшего снега. Цельная и гладкая кожа предотвращает попадание пыли. В изделии нет лишних деталей и украшений, которые могли бы потерять первоначальный вид или оторваться, эти кроссовки исключительно функциональны и хороши для города или поездок. </p>
          </div>
          <div id="map" className={style.map}>
          {/* YandexMap */}
          </div>
          <div></div>
        </div>
        <div className={style.switch_wrapper}>
            <i class="fas fa-keyboard"></i>
            <i class="fas fa-map-marked-alt"></i>
          </div>
      </div>
      {/* ------------------------------------- */}
      <div className={style.controls}>

      </div>
      {/* ------------------------------------- */}
    </div>
  )
}

export default AddProduct;