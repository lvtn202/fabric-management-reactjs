import React from "react";
import * as Path from './constants/path';
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
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/not_found";


const routes = [
  {
    path: Path.HOME,
    exact: true,
    main: ({ history }) => <Home history={history} />,
  },
  {
    path: Path.DASHBOARD,
    exact: true,
    main: ({ history }) => <Dashboard history={history} />,
  },
  {
    path: Path.LOGIN,
    exact: true,
    main: ({ history }) => <Login history={history} />,
  },
  {
    path: Path.DYE_PLANT,
    exact: true,
    main: ({ history }) => <DyePlant history={history} />,
  },
  {
    path: Path.DYE_PLANT_DETAIL,
    exact: true,
    main: ({ match, history }) => (
      <DyePlantDetail match={match} history={history} />
    ),
  },
  {
    path: Path.DYE_PLANT_RAW,
    exact: false,
    main: ({ match, history }) => (
      <DyePlantRaw match={match} history={history} />
    ),
  },
  {
    path: Path.ORDER,
    exact: true,
    main: ({ history }) => <Order history={history} />,
  },
  {
    path: Path.ORDER_DETAIL,
    exact: false,
    main: ({ match }) => <OrderDetail match={match} />,
  },
  {
    path: Path.ORDER_CREATION,
    exact: false,
    main: ({ history }) => <OrderCreation history={history} />,
  },
  {
    path: Path.DYE_BATCH,
    exact: true,
    main: () => <DyeBatch />,
  },
  {
    path: Path.DYE_BATCH_DETAIL,
    exact: true,
    main: ({ history, match }) => (
      <DyeBatchDetail history={history} match={match} />
    ),
  },
  {
    path: Path.RAW,
    exact: true,
    main: ({ history }) => <Raw history={history} />,
  },
  {
    path: Path.EXPORT_RAW,
    exact: true,
    main: ({ history }) => <ExportRaw history={history} />,
  },
  {
    path: Path.IMPORT_FABRIC,
    exact: true,
    main: ({ history }) => <ImportFabric history={history} />,
  },
  {
    path: Path.RECALL,
    exact: true,
    main: ({ history }) => <RecallList history={history} />,
  },
  {
    path: Path.RECALL_CREATION,
    exact: true,
    main: ({ history }) => <RecallCreation history={history} />,
  },
  {
    path: Path.RECALL_DETAIL,
    exact: false,
    main: ({ history, match }) => (
      <RecallDetail history={history} match={match} />
    ),
  },
  {
    path: Path.DEBT,
    exact: false,
    main: ({ history }) => <Debt history={history} />,
  },
  {
    path: Path.PAYMENT,
    exact: true,
    main: ({ history }) => <Payment history={history} />,
  },
  {
    path: Path.PAYMENT_CREATION,
    exact: false,
    main: ({ history, match }) => (
      <PaymentCreation history={history} match={match} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
