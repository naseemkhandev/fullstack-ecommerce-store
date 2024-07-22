import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/rootLayout";
import AuthLayout from "./layouts/authLayout";

import HomePage from "./pages/home";
import AuthPage from "./pages/auth/authPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
