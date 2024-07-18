import React from "react";
import style from "./dashboardBody.module.css"
type Props = {};

const DashboardTitle = (props: Props) => {
  return (
    <div className={style.dashboardTitle}>
      <div className={style.titleFlex}>
        <img src="cup.png" className={style.cupImg} />
        <div className={style.appName}>Coffee Shop</div>
      </div>
    </div>
  );
};

export default DashboardTitle;