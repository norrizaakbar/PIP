import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../components/Home";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
