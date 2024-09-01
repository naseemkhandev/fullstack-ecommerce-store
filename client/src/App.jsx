import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./layouts/authLayout";
import RootLayout from "./layouts/rootLayout";

import AdminLayout from "./layouts/adminLayout";
import AnalyticsPage from "./pages/admin/analytics";
import CategoriesPage from "./pages/admin/categories";
import DashboardPage from "./pages/admin/dashboard";
import OrdersPage from "./pages/admin/orders";
import ProductsPage from "./pages/admin/products";
import AddNewProductPage from "./pages/admin/products/addNewProduct";
import ProfilePage from "./pages/admin/profile";
import SettingsPage from "./pages/admin/settings";
import UsersPage from "./pages/admin/users";
import AddNewUserPage from "./pages/admin/users/addNewUser";
import AuthPage from "./pages/auth/authPage";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import ShopPage from "./pages/products";
import ProductDetailsPage from "./pages/products/productDetails";
import WishListPage from "./pages/wishlist";
import SearchPage from "./pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ShopPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "orders",
        element: <div>Orders</div>,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "wishlist",
        element: <WishListPage />,
      },
      {
        path: "checkout",
        element: <div>Checkout</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },

  // Auth routes
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <AuthPage />,
      },
      {
        path: "register",
        element: <AuthPage />,
      },
    ],
  },

  // Admin routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/add",
        element: <AddNewProductPage />,
      },
      {
        path: "categories",
        element: <CategoriesPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "users/add",
        element: <AddNewUserPage />,
      },
      {
        path: "users/update/:id",
        element: <AddNewUserPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
