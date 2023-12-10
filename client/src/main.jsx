import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Homepage from "./pages/Homepage";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CatAll from "./pages/CatAll";
import CatOne from "./pages/CatOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/catone/:catId",
        element: <CatOne />,
      },
      {
        path: "/catall",
        element: <CatAll />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
