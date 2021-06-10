import React from "react";
import { Autocomplete } from "@material-ui/lab";
import style from "./ComboBox.module.css";
import { useSelector } from "react-redux";

function ComboBox({ id, setFunction, actionOnBlur }) {
  const tags = useSelector(state => state.tags)
  const titleTags = tags.map( tag => ({ title: tag.name}) );

  return (
    <Autocomplete
      id="combo-box-demo"
      onMouseOver={(e) => e.target.focus()}
      options={titleTags}
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
