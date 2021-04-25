import React from "react";
import Home from "./pages/home";
import Login from "./components/login";
import DyePlant from "./pages/dye_plant";
import DyeBatch from "./pages/dye_batch";
import DyePlantDetail from "./pages/dye_plant_detail";
import DyePlantRaw from "./pages/dye_plant_raw";
import Order from "./pages/order";
import OrderCreation from "./pages/order_creation";
import Raw from "./pages/raw";
import OrderDetail from "./pages/order_detail";
import ExportRaw from "./pages/export_raw";
import NotFound from "./pages/not_found";

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
    exact: true,
    main: ({ match, history }) => (
      <DyePlantDetail match={match} history={history} />
    ),
  },
  {
    path: "/dye-plant/:id/raw",
    exact: false,
    main: ({ match, history }) => (
      <DyePlantRaw match={match} history={history} />
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
    main: ({ history }) => <OrderCreation history={history}/>,
  },
  {
    path: "/dye-batch",
    exact: true,
    main: () => <DyeBatch />,
  },
  {
    path: "/raw",
    exact: true,
    main: ({ history }) => <Raw history={history} />,
  },
  {
    path: "/export",
    exact: true,
    main: ({ history }) => <ExportRaw history={history} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
