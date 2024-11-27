import style from "./IconsBarItem.module.css";

export const IconsBarItem = ( {image, link} ) => {
  return (
    <div className={style.item}>
      <a href={link} target="_blank">
        <img src={image} />
      </a>
    </div>
  );
};