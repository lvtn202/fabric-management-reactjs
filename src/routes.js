import React from "react";
import Home from "./pages/home";
import Login from "./components/login";
import DyePlant from "./pages/dye_plant";
import DyeBatch from "./pages/dye_batch";
import DyeBatchDetail from "./pages/dye_batch_detail";
import DyePlantDetail from "./pages/dye_plant_detail";
import DyePlantRaw from "./pages/dye_plant_raw";
import Order from "./pages/order";
import OrderCreation from "./pages/order_creation";
import Raw from "./pages/raw";
import RecallList from "./pages/recall";
import RecallDetail from "./pages/recall_detail";
import RecallCreation from "./pages/recall_creation";
import OrderDetail from "./pages/order_detail";
import ExportRaw from "./pages/export_raw";
import ImportFabric from "./pages/import_fabric";
import Debt from "./pages/debt";
import Payment from "./pages/payment_list";
import PaymentCreation from "./pages/payment_creation";
import NotFound from "./pages/not_found";
import Dashboard from './test';

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
    main: ({ history }) => <OrderCreation history={history} />,
  },
  {
    path: "/dye-batch",
    exact: true,
    main: () => <DyeBatch />,
  },
  {
    path: "/dye-batch/:id",
    exact: true,
    main: ({ history, match }) => (
      <DyeBatchDetail history={history} match={match} />
    ),
  },
  {
    path: "/raw",
    exact: true,
    main: ({ history }) => <Raw history={history} />,
  },
  {
    path: "/export/create",
    exact: true,
    main: ({ history }) => <ExportRaw history={history} />,
  },
  {
    path: "/import/create",
    exact: true,
    main: ({ history }) => <ImportFabric history={history} />,
  },
  {
    path: "/recall",
    exact: true,
    main: ({ history }) => <RecallList history={history} />,
  },
  {
    path: "/recall/create",
    exact: true,
    main: ({ history }) => <RecallCreation history={history} />,
  },
  {
    path: "/recall/:id",
    exact: false,
    main: ({ history, match }) => (
      <RecallDetail history={history} match={match} />
    ),
  },
  {
    path: "/debt",
    exact: false,
    main: ({ history }) => <Debt history={history} />,
  },
  {
    path: "/payment",
    exact: true,
    main: ({ history }) => <Payment history={history} />,
  },
  {
    path: "/payment/create",
    exact: false,
    main: ({ history, match }) => (
      <PaymentCreation history={history} match={match} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <Dashboard />,
  },
];

export default routes;
