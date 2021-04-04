import React from "react";
import Home from "./pages/Home";
import Login from "./components/Login";
import DyePlant from "./pages/DyePlant";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    main: ({ history }) => <Home history={history} />,
  },
  {
    path: "/login",
    exact: true,
    main: ({ history }) => <Login history={history} />,
  },
  {
    path: "/dye-plant",
    exact: false,
    main: () => <DyePlant />,
  },
  {
    path: "/order",
    exact: true,
    main: () => <Order />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
