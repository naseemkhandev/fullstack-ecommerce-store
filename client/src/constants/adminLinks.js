import {
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
  Settings,
  User2,
} from "lucide-react";

export const adminLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: Home,
    path: "",
  },
  {
    id: 2,
    title: "Orders",
    icon: ShoppingCart,
    path: "/orders",
  },
  {
    id: 3,
    title: "Products",
    icon: Package,
    path: "/products",
  },
  {
    id: 4,
    title: "Users",
    icon: Users,
    path: "/users",
  },
  {
    id: 5,
    title: "Analytics",
    icon: LineChart,
    path: "/analytics",
  },
  {
    id: 6,
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
  {
    id: 7,
    title: "Profile",
    icon: User2,
    path: "/profile",
  },
];
