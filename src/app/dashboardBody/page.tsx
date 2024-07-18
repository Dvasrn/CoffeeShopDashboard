"use client";

import { DiffieHellman } from "crypto";
import style from "./dashboardBody.module.css";
import { Home, Package, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardTitle from "../dashboardTitle/dashboardTitle";

export default function DashboardBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      <div className={style.body}>
        <DashboardTitle />
        <div className={style.navbar}>
          <div className={style.dashboard}>Dashboard</div>
          <div className={style.dashboardColumn}>
            <Link
              href="/dashboard"
              className={`flex items-center gap-3 rounded-lg px-3 py-2  bg-white${
                pathName !== "/dashboard"
                  ? "text-muted-foreground"
                  : "text-primary bg-muted"
              } text-muted-foreground transition-all hover:text-primary`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/orders"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                pathName !== "/orders"
                  ? "text-muted-foreground"
                  : "text-primary bg-muted"
              } text-muted-foreground transition-all hover:text-primary`}
            >
              <ShoppingCart className="h-4 w-4" />
              Orders
            </Link>
            <Link
              href="/products"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                pathName !== "/products"
                  ? "text-muted-foreground"
                  : "text-primary bg-muted"
              } text-muted-foreground transition-all hover:text-primary`}
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              href="/users"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                pathName !== "/users"
                  ? "text-muted-foreground"
                  : "text-primary bg-muted"
              } text-muted-foreground transition-all hover:text-primary`}
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
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

        <div className={style.mainBody}>{children}</div>
      </div>
    </div>
  );
}

{
  /* <div className={style.boxFlex}>
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
</div> */
}
