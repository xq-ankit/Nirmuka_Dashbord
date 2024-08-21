import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Products from "./pages/Products/Products";
import Menu from "./component/menu/Menu";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import "./styles/global.scss";
import Product from "./pages/Product/Product";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import HomePage from "./pages/homePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import GettingStarted from "./pages/GettingStarted/GettingStarted";
import Searchbar from "./component/Search/Searchbar";

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
      element:<Layout/>,
      children:[
        {
          path: "/",  
          element:<Home/>
        },
        {
          path: "users",
          element: <Users/>,
        },
        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element:<User/>
        },
        {
          path:"/products/:id",
          element:<Product/>,
        },

        
      ]
    },
    {
      path:"HomePage",
      element:<HomePage/>
    },
    {
      path:"Login",
      element:<GettingStarted/>
    },
    {
      path:"Search",
      element:<Searchbar/>
    },
    {
      path:"*",
      element:<ErrorPage />
    }
  ]);


  return (
    <RouterProvider router={router}/>
  )
}

export default App
