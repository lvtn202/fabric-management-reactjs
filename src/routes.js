import React from "react";
import Home from "./pages/Home";
import Login from "./components/Login";
import DyePlant from "./pages/DyePlant";
import DyePlantDetail from "./pages/DyePlantDetail";
import Order from "./pages/Order";
import Fabric from "./pages/Fabric";
import NotFound from "./pages/NotFound";
import NestedList from "./pages/Raw";

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
    exact: true,
    main: ({ history }) => <DyePlant history={history} />,
  },
  {
    path: "/dye-plant/:id",
    exact: false,
    main: ({ match, history }) => <DyePlantDetail match={match} history={history}/>,
  },
  {
    path: "/order",
    exact: true,
    main: () => <Order />,
  },
  {
    path: "/raw",
    exact: true,
    main: () => <NestedList />,
  },
  {
    path: "/fabric",
    exact: true,
    main: () => <Fabric />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
