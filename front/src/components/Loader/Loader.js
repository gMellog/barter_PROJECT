import style from "./Loader.module.css";

const Loader = () => {
  return (
    //Разметка прелоадера 12 лучей - 12 div'ов
    <div class={style.lds_spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
