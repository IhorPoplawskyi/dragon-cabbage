import gmail from "./gmail.png";
import viber from "./viber.png";
import telegram from "./telegram.png";
import whatsapp from "./whatsapp.png";

import style from "./IconsBar.module.css";

import { IconsBarItem } from "../IconsBarItem/IconsBarItem";

export const IconsBar = () => {
  return (
    <div className={style.IconsBarWrapper}>
      <IconsBarItem image={gmail} link=''/>
      <IconsBarItem image={viber} link=''/>
      <IconsBarItem image={telegram} link=''/>
      <IconsBarItem image={whatsapp} link=''/>
    </div>
  );
};