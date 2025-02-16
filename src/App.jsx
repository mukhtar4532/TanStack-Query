import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./components/Pages/Home";
import { FetchOld } from "./components/Pages/FetchOld";
import { FetchRQ } from "./components/Pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
