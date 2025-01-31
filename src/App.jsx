import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./components/Pages/Home";
import { FetchOld } from "./components/Pages/FetchOld";
import { FetchRQ } from "./components/Pages/FetchRQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
