/* eslint-disable no-unused-vars */

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/register/Register";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Userprofile from "./pages/Userprofile/Userprofile";
import Shop from "./pages/shop/Shop";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import Products from "./pages/products/Products";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Product from "./pages/product/Product";
import CartPage from "./pages/cartpage/CartPage";
import CartContextProvider from "./contexts/CartContext";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <div className="main">
        <CartContextProvider>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            <Outlet />
            <Footer />
          </QueryClientProvider>
        </CartContextProvider>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/profile/userid/:id",
          element: <Userprofile />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },

        {
          path: "/product/:id",
          element: <Product />,
        },

        {
          path: "/cart",
          element: <CartPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
