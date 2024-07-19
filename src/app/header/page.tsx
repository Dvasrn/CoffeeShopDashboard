import React from "react";
import style from "./header.module.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className={style.header}>
      <div>
        <img src="menu.png" className={style.menu} />
      </div>
      <div className={style.imgFlex}>
        <img src="darkMode.png" className={style.menu} />
        <img src="notifications.png" className={style.menu} />
      </div>
      <div className={style.profileFlex}>
        <div className={style.profileName}>admin</div>
        <div className={style.profileImgBorder}>
          <img src="profile.png" className={style.profileImg} />
        </div>
      </div>
    </div>
  );
};

export default Header