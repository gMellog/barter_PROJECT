import style from "./AddProduct.module.css";
import plus_mini from "./svg/plus_small.svg";
import { ReactSVG } from "react-svg";
// import { ReactSVG } from "-";
import { useEffect, useState, useRef } from "react";
import init from "../YandexMap/ymaps";
import YandexMap from "../YandexMap/YandexMap";
import pencil from "./svg/bytesize_edit.svg";
import { authHeader } from "../../helpers/authHeader";
import { useSelector } from "react-redux";
import { env } from "process";


const AddProduct = () => {
  const user = useSelector(state => state.user)
  const [switchMapText, setSwitchMapText] = useState(true);
  const [product_title, setProduct_title] = useState("Название товара");
  //Значения по умолчанию для полей и в случае ввода пустых данных
  const defaultDescribtion = "Введите описание вашего предмета. Укажите в каком он состоянии, на что нужно обратить внимание. Быть может его нужно помыть или он требует починки. Не поленитесь и подойдите к описанию ответственно.";
  const defaultTitle = "Название предмета";
  const [describtion, setDescribtion] = useState(defaultDescribtion);
  //флаги переключения для полей
  const [flag_edit_description, setFlag_edit_description] = useState(true);
  const [flag_edit_title, setFlag_edit_title] = useState(true);
  //Цвета для Tags
  const [tags, setTags] = useState([]);
  const [selectValue, setSelectValue] = useState("на все что угодно");
  const [colors, setColors] = useState([
    "blue_bg",
    "green_bg",
    "yellow_bg",
    "red_bg",
  ]);
  //Функция возвращающая рандомное число от min до max
  const randomInteger = (min, max) =>
    min + Math.round(Math.random() * (max - min));
  //Функция для переключения между картой и ввода описания
  const MapTextswitcher = () => {
    setSwitchMapText((prev) => !prev);
  };
  //Функция добавления Tag при нажатии на маленькую кнопку +
  const addTag = (e) => {
    e.preventDefault();
    if (tags.length < 4) {
      let index = randomInteger(0, colors.length - 1);

      if (!tags.find((el) => el.text == selectValue)) {
        setTags((prev) => [
          ...prev,
          { id: Date.now(), text: selectValue, style: colors[index] },
        ]);
        setColors(colors.filter((el) => el != colors[index]));
      }
    }
  };
  //Функция удаления Tags по нажатию на уже добавленный Tag
  const delTag = (e, obj) => {
    setTags(tags.filter((el) => el.id != e.target.id));
    setColors((prev) => [...prev, obj.style]);
  };

  //Флаги отвечающие за показ превью картинок

  const [img_main_flag, setImg_main_flag] = useState(true);
  const [img_mini_flag_1, setImg_mini_flag_1] = useState(true);
  const [img_mini_flag_2, setImg_mini_flag_2] = useState(true);
  const [img_mini_flag_3, setImg_mini_flag_3] = useState(true);

  const [imgMain, setImgMain] = useState('');
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [files, setFiles] = useState([])
  //Функция показывающая превью файла
  const previewFile = (e) => {


    const id = +e.target.dataset.id;
    const file = e.target.files[0];
    const reader = new FileReader();

    setFiles(files => [...files, file])


    reader.addEventListener("load", function () {
      // convert image file to base64 string
      if (id == 0) {
        setImgMain(reader.result);
      }
      if (id == 1) {
        setImg1(reader.result);
      }
      if (id == 2) {
        setImg2(reader.result);

      }
      if (id == 3) {
        setImg3(reader.result);
      }
    }, false);



    if (file) {
      reader.readAsDataURL(file);
      if (id == 0) {
        setImg_main_flag(false);
      }
      if (id == 1) {
        setImg_mini_flag_1(false);
      }
      if (id == 2) {
        setImg_mini_flag_2(false);
      }
      if (id == 3) {
        setImg_mini_flag_3(false);
      }
    }
  }

  const addProduct = async () => {

    let tagsId = []

    tags.map(el => tagsId.push(el.id))

    const formData = new FormData();


    formData.append('image', files[0])
    formData.append('image', files[1])
    formData.append('image', files[2])
    formData.append('image', files[3])
    formData.append('image', product_title)
    formData.append('image', describtion)
    formData.append('image', tagsId)
    formData.append('image', user.id)



    const res = await fetch('http://localhost:4000/ad', {
      method: 'POST',
      headers: authHeader(),
      body: formData,
    });

  }


  return (
    <div className={style.add_product_wrapper}>
      {/* ------------------------------------- */}
      <div className={style.title}>
        <h4>Новое объявление</h4>
      </div>
      {/* ------------------------------------- */}
      <div className={style.content_area}>
        <div className={style.left_side}>
          {/* Название товара */}
          {flag_edit_title ? (
            <div className={style.product_title} onClick={() => { setFlag_edit_title(false) }}>
              {product_title}
              <ReactSVG src={pencil} className={style.pencil} />
            </div>
          ) : (
            <input className={style.product_title_input}
              required
              maxlength="26"
              onBlur={(e) => {
                if (!e.target.value.trim()) { setProduct_title(defaultTitle) }
                setFlag_edit_title(true)
              }}
              onMouseOver={(e) => e.target.focus()}
              value={product_title}
              onChange={(e) => { setProduct_title(e.target.value) }}
            />
          )}
          {/* Большая фотография */}
          <div className={style.large_image_area}>
            {img_main_flag ?
              <>
                <input
                  data-id="0"
                  id="field_max_file"
                  type="file"
                  className={style.add_file_input}
                  onChange={(e) => { previewFile(e) }}
                  required
                />
                <label for="field_max_file">
                  <i className={"fas fa-camera " + style.photo_icon} />
                </label>
              </>
              :
              <img src={imgMain} />}
          </div>
          {/* Блок маленьких фотографий */}
          <div className={style.mini_images_area}>
            <div className={style.add_mini_img}>
              {img_mini_flag_1 ?
                <>
                  <input
                    data-id="1"
                    id="field_mini_file-1"
                    type="file"
                    className={style.add_file_input}
                    onChange={(e) => { previewFile(e) }}
                  />
                  <label for="field_mini_file-1">
                    <i className={"fas fa-plus " + style.plus} />
                  </label>
                </>
                :
                <img src={img1} className={style.small_img} />}
            </div>
            <div className={style.add_mini_img}>
              {img_mini_flag_2 ?
                <>
                  <input
                    data-id="2"
                    id="field_mini_file-2"
                    type="file"
                    className={style.add_file_input}
                    onChange={(e) => { previewFile(e) }}
                  />
                  <label for="field_mini_file-2">
                    <i className={"fas fa-plus " + style.plus} />
                  </label>
                </>
                :
                <img src={img2} className={style.small_img} />}
            </div>
            <div className={style.add_mini_img}>
              {img_mini_flag_3 ?
                <>
                  <input
                    data-id="3"
                    id="field_mini_file-3"
                    type="file"
                    className={style.add_file_input}
                    onChange={(e) => { previewFile(e) }}
                  />
                  <label for="field_mini_file-3">
                    <i className={"fas fa-plus " + style.plus} />
                  </label>
                </>
                : <img src={img3} className={style.small_img} />}
            </div>
          </div>
        </div>
        {/* ------------------------------------- */}
        <div className={style.right_side}>
          {/* Переключатель карта/текст */}
          <div className={style.switch_wrapper}>
            {switchMapText ? (
              <i
                classname="fas fa-map-marked-alt"
                onClick={() => MapTextswitcher()}
              />
            ) : (
              <i classname="fas fa-keyboard" onClick={() => MapTextswitcher()} />
            )}
          </div>
          {switchMapText ? (
            <>
              {flag_edit_description ? (
                <div
                  className={style.product_description}
                  onClick={() => setFlag_edit_description(false)}
                >
                  <ReactSVG src={pencil} className={style.pencil} />
                  <p>{describtion}</p>
                </div>
              ) : (
                <textarea
                  required
                  rows="8"
                  maxlength="430"
                  className={style.textarea_description}
                  onChange={(e) => {
                    setDescribtion(e.target.value);
                  }}
                  onBlur={(e) => {
                    if (!describtion.trim()) {
                      setDescribtion(defaultDescribtion);
                    }
                    setFlag_edit_description(true);
                  }}
                  onMouseOver={(e) => e.target.focus()}
                >
                  {describtion}
                </textarea>
              )}

              <div className={style.selector_area}>
                <form name="tagAddForm" action="">
                  <select
                    name=""
                    value={selectValue}
                    id=""
                    onChange={(e) => {
                      setSelectValue(e.target.value);
                    }}
                  >
                    <option value="велосипед">велосипед</option>
                    <option value="самокат">самокат</option>
                    <option value="шапка">шапка</option>
                    <option value="пальто">пальто</option>
                    <option value="очки">очки</option>
                    <option value="на все что угодно">на все что угодно</option>
                  </select>

                  <button onClick={(e) => addTag(e)}>
                    <i className={"fas fa-plus " + style.pplus} />
                  </button>
                </form>
              </div>

              <div className={style.tags_area}>
                {tags.map((el, i) => {
                  return (
                    <div
                      id={el.id}
                      key={el.id}
                      className={style.tag_button + " " + el.style}
                      onClick={(e) => {
                        delTag(e, el);
                      }}
                    >
                      {el.text}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className={style.map}>
              <YandexMap />
            </div>
          )}
        </div>
      </div>
      {/* ------------------------------------- */}
      <div className={style.controls}>
        {/* <div className={style.delete_product + " " + style.control_btn}>Удалить все изменения</div> */}
        <div onClick={() => addProduct()} className={style.save_product + " " + style.control_btn}>Сохранить изменения</div>
      </div>
      {/* ------------------------------------- */}
    </div>
  );
};

export default AddProduct;
