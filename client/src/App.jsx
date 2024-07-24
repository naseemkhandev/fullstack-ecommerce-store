import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/rootLayout";
import AuthLayout from "./layouts/authLayout";

import HomePage from "./pages/home";
import AuthPage from "./pages/auth/authPage";
import AdminLayout from "./layouts/adminLayout";
import DashboardPage from "./pages/admin/dashboard";
import ProductsPage from "./pages/admin/products";
import UsersPage from "./pages/admin/users";

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
        path: "shop",
        element: <div>Shop</div>,
      },
      {
        path: "orders",
        element: <div>Orders</div>,
      },
      {
        path: "cart",
        element: <div>Cart</div>,
      },
      {
        path: "wishlist",
        element: <div>Wishlist</div>,
      },
      {
        path: "checkout",
        element: <div>Checkout</div>,
      },
      {
        path: "product/:id",
        element: <div>Product</div>,
      },
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "contact",
        element: <div>Contact</div>,
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
        element: <div>Orders</div>,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "analytics",
        element: <div>Analytics</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
      {
        path: "profile",
        element: <div>Profile</div>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
