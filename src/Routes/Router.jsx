import { createBrowserRouter } from "react-router-dom";

import Error from "../Pages/Error/Error";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import UserProfile from "../Pages/UserProfile/UserProfile";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoutes>
            <UserProfile></UserProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoutes>
            <EstateDetails></EstateDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
