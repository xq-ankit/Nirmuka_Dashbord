import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/Products/Products";
import Menu from "./component/menu/Menu";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import "./styles/global.scss";
import Product from "./pages/Product/Product";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import LandingPage from "./pages/Landingpage/LandingPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Searchbar from "./pages/Search/Searchbar";
import Login from "./pages/Login/Login";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "users",
          element: <Users />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "users/:id",
          element: <User />
        },
        {
          path: "products/:id",
          element: <Product />
        },
        {
          path: "search",
          element: <Searchbar />
        }
      ]
    },
    {
      path: "/landingpage",
      element: <LandingPage />
    },
    {
      path: "*",
      element: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
