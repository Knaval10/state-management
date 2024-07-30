import React from "react";
import RenderMap from "./pages/RenderMap";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Layout from "./components/Layout";
import Store from "./utils/Global/Store";
import Login from "./pages/Login";
import ProtectedRoute from "./utils/Routes/ProtectedRoute";
import Personal from "./pages/Personal";
import PersonalDetails from "./pages/PersonalDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/about",
      element: (
        <Layout>
          <About />
        </Layout>
      ),
    },
    {
      path: "/user",
      element: (
        <Layout>
          <User />
        </Layout>
      ),
    },
    {
      path: "/personal",
      children: [
        {
          path: "",
          element: (
            <ProtectedRoute>
              <Layout>
                <Personal />
              </Layout>
            </ProtectedRoute>
          ),
        },
        {
          path: ":slug",
          element: (
            <ProtectedRoute>
              <PersonalDetails />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    // <Store>
    <RouterProvider router={router} />
    // </Store>
  );
};

export default App;
