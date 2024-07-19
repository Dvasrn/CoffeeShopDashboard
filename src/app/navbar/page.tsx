import React from "react";
import style from "./navbar.module.css";
import { Home, Package, ShoppingCart, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};

const Navbar = (props: Props) => {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <div className={style.navbar}>
      <Link
        href="../dashboard"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
          pathName !== "../dashboard"
            ? "text-muted-foreground"
            : "text-primary bg-muted"
        } text-muted-foreground transition-all hover:text-primary`}
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="../orders"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
          pathName !== "../orders"
            ? "text-muted-foreground"
            : "text-primary bg-muted"
        } text-muted-foreground transition-all hover:text-primary`}
      >
        <ShoppingCart className="h-4 w-4" />
        Orders
      </Link>
      <Link
        href="../products"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
          pathName !== "../products"
            ? "text-muted-foreground"
            : "text-primary bg-muted"
        } text-muted-foreground transition-all hover:text-primary`}
      >
        <Package className="h-4 w-4" />
        Products
      </Link>
      <Link
        href="../users"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
          pathName !== "../users"
            ? "text-muted-foreground"
            : "text-primary bg-muted"
        } text-muted-foreground transition-all hover:text-primary`}
      >
        <Users className="h-4 w-4" />
        Customers
      </Link>
    </div>
  );
};

export default Navbar;
