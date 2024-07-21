import React from "react";
import style from "./dashboard.module.css";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className={style.body}>
      <div className={style.boxFlex}>
        <div className={style.box}>
          <div className={style.flex}>
            <div className={style.numSize}>30</div>
            <div className={style.fontSize}>Total Menus</div>
          </div>
          <img src="revenue.png" className={style.transformIcon} />
        </div>
        <div className={style.box}>
          <div className={style.flex}>
            <div className={style.numSize}>80</div>
            <div className={style.fontSize}>Total Menus</div>
          </div>
          <img src="product.png" className={style.icon} />
        </div>
        <div className={style.box}>
          <div className={style.flex}>
            <div className={style.numSize}>37</div>
            <div className={style.fontSize}>Total Menus</div>
          </div>
          <img src="customers.png" className={style.icon} />
        </div>
        <div className={style.box}>
          <div className={style.flex}>
            <div className={style.numSize}>$300</div>
            <div className={style.fontSize}>Total Menus</div>
          </div>
          <img src="revenue.png" className={style.icon} />
        </div>
      </div>
      <div className={style.calendarWidth}>
        <div className={style.calendar}>
          <div className={style.Week}>Week</div>
          <div className={style.monthAndYear}>Month</div>
          <div className={style.monthAndYear}>Year</div>
        </div>
      </div>
      <div className={style.infoBox}>
        <div className={style.column}>
          <div className={style.orders}>Orders</div>
          <div className={style.store}>Recent orders from your store.</div>
        </div>
        <div>
          <div className={style.storeFlex}>
            <div className={style.Customer}>Customer</div>
            <div className={style.storeTypes}>
              <div className={style.types}>Product</div>
              <div className={style.types}>Size</div>
              <div className={style.types}>Quantity</div>
              <div className={style.types}>Milk Amount</div>
              <div className={style.types}>State</div>
              <div className={style.types}>Date</div>
              <div className={style.types}>Amount</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
