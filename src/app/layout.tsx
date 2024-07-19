"use client";
import style from "./layout.module.css";
import DashboardTitle from "./dashboardTitle/page";
import Navbar from "./navbar/page";
import Header from "./header/page";
import React from "react";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className={style.body}>
          <div className={style.dashboardLeft}>
            <DashboardTitle />
            <div className={style.dashboard}>Dashboard</div>
            <Navbar />
          </div>
          <div>
            <Header />
            <div className={style.children}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
