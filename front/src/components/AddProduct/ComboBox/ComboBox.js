import React from "react";
import { Autocomplete } from "@material-ui/lab";
import style from "./ComboBox.module.css";

const top100Films = [
  { title: "Шапка" },
  { title: "Кепка" },
  { title: "Кроссовки" },
  { title: "Ботинки" },
  { title: "Туфли" },
  { title: "Шорты" },
  { title: "Рубашка" },
  { title: "Джинсы" },
  { title: "Брюки" },
  { title: "Куртка" },
];

function ComboBox({ id, setFunction, actionOnBlur }) {
  console.log(`Combobox id = ${id}`);
  return (
    <Autocomplete
      id="combo-box-demo"
      onMouseOver={(e) => e.target.focus()}
      options={top100Films}
      getOptionLabel={(option) => option.title}
      classes={{ root: style.main, input: style.input }}
      onChange={(e) => {
        setFunction(e.target.innerText);
      }}
      renderInput={(params) => (
        <div ref={params.InputProps.ref}>
          <input
            required
            className={style.buba}
            type="text"
            {...params.inputProps}
          />
        </div>
      )}
      onBlur={actionOnBlur ? actionOnBlur : undefined}
    />
  );
}

export default React.memo(ComboBox);
