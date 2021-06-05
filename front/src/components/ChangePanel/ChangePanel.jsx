import style from "./ChangePanel.module.css";
import classNames from "classnames";
import { useState, useEffect } from "react";
//SVG import
import { ReactSVG } from "react-svg";
import message_svg from "./svg/message.svg";
import change_svg from "./svg/arrow-right-left.svg";
import apply_svg from "./svg/deal.svg"
import cancel_svg from "./svg/topcoat_cancel.svg"
//Template images
import left_img from "./img_tmp/left_img.png";
import right_img from "./img_tmp/right_img.png";
import left_avatar from "./img_tmp/left_avatar.png";
import right_avatar from "./img_tmp/right_avatar.png";

const ChangePanel = () => {
  return (
    <div className={style.change_panel_wrapper}>
      <div className={style.date_area}>29 апреля 2021</div>
      <div className={style.content}>
        {/* __________________ */}
      <div className={style.left_side}>
        <div>
          <img src={left_img} />
        </div>
        <div className={style.left_avatar}>
        <img src={left_avatar}/>
        </div>
      </div>
      <div className={style.controls}>
        <ReactSVG src={message_svg}/>
        <ReactSVG src={change_svg}/>
      </div>
      <div className={style.right_side}>
      <div>
          <img src={right_img} />
        </div>
        <div className={style.right_avatar}>
          <img src={right_avatar}/>
        </div>
      </div>
      </div>
      {/* __________________ */}
      <div className={style.control_panel}>{/* Controls */}
        <div className={classNames(style.action_button, style.apply)}><ReactSVG src={apply_svg} /></div>
        <div className={classNames(style.action_button, style.cancel)}><ReactSVG src={cancel_svg}/></div>
      </div>
    </div>
  );
};

export default ChangePanel
