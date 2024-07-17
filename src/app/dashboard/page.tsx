import style from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={style.body}>
      <div className={style.dashboardTitle}>
        <div className={style.titleFlex}>
          <img src="cup.png" className={style.cupImg} />
          <div className={style.appName}>Coffee Shop</div>
        </div>

        <div className={style.dashboardColumn}>
          <div className={style.dashboard}>Dashboard</div>

          <div className={style.typeFlex}>
            <img src="order.png" className={style.titleNameImg} />
            <div className={style.titleName}>Orders</div>
          </div>
          <div className={style.typeFlex}>
            <img src="product.png" className={style.titleNameImg} />
            <div className={style.titleName}>Products</div>
          </div>
          <div className={style.typeFlex}>
            <img src="customers.png" className={style.titleNameImg} />
            <div className={style.titleName}>Customers</div>
          </div>
          <div className={style.typeFlex}>
            <img src="revenue.png" className={style.titleNameImg} />
            <div className={style.titleName}>Revenues</div>
          </div>
        </div>
      </div>

      <div>
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

        <div className={style.mainBody}>
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
      </div>
    </div>
  );
}
