import { FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { SiViber } from "react-icons/si";

import style from "./IconsBar.module.css";

export const IconsBar = () => {
  return (
    <div className={style.IconsBarWrapper}>
      <a className={style.item} target="_blank" href="">
        <FaTelegramPlane />
      </a>
      <a className={style.item} target="_blank" href="">
        <IoMail />
      </a>
      <a className={style.item} target="_blank" href="">
        <SiViber />
      </a>
      <a className={style.item} target="_blank" href="">
        <RiWhatsappFill />
      </a>
    </div>
  );
};