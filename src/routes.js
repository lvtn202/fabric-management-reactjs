import React from "react";
import Home from "./pages/home";
import Login from "./components/login";
import DyePlant from "./pages/dye_plant";
import DyePlantDetail from "./pages/dye_plant_detail";
import Order from "./pages/order";
import OrderDetail from "./pages/order_detail";
import Fabric from "./pages/fabric";
import NotFound from "./pages/not_found";
import NestedList from "./pages/raw";

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
    main: ({ match, history }) => (
      <DyePlantDetail match={match} history={history} />
    ),
  },
  {
    path: "/order",
    exact: true,
    main: ({ history }) => <Order history={history} />,
  },
  {
    path: "/order/detail/:id",
    exact: false,
    main: ({ match }) => <OrderDetail match={match} />,
  },
  {
    path: "/order/create",
    exact: false,
    main: ({ match }) => <NotFound />,
  },
  // {
  //   path: "/raw",
  //   exact: true,
  //   main: () => <NestedList />,
  // },
  // {
  //   path: "/fabric",
  //   exact: true,
  //   main: () => <Fabric />,
  // },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
