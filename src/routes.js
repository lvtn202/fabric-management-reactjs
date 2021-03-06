import React from "react";
import * as Path from "./constants/path";
import Home from "./pages/home";
import Login from "./pages/login";
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
import DebtDetail from "./pages/debt_detail";
import Payment from "./pages/payment_list";
import PaymentDetail from "./pages/payment_detail";
import PaymentCreation from "./pages/payment_creation";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/not_found";
import ForgotPassword from "./pages/forgot_password";
import NewPassword from "./pages/new_password";
import UserList from "./pages/user_list";
import UserSignup from "./pages/user_signup";
import DyePlantCreation from "./pages/dye_plant_creation";

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
    main: ({ match, history }) => (
      <OrderDetail match={match} history={history} />
    ),
  },
  {
    path: `${Path.ORDER_CREATION}/:id?`,
    exact: false,
    main: ({ history, match }) => (
      <OrderCreation history={history} match={match} />
    ),
  },
  {
    path: Path.DYE_BATCH,
    exact: true,
    main: ({ history }) => <DyeBatch history={history} />,
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
    exact: true,
    main: ({ history }) => <Debt history={history} />,
  },
  {
    path: Path.DEBT_DETAIL,
    exact: false,
    main: ({ history, match, location }) => (
      <DebtDetail history={history} match={match} location={location} />
    ),
  },
  {
    path: Path.PAYMENT,
    exact: true,
    main: ({ history }) => <Payment history={history} />,
  },
  {
    path: Path.PAYMENT_DETAIL,
    exact: true,
    main: ({ history, match }) => (
      <PaymentDetail history={history} match={match} />
    ),
  },
  {
    path: `${Path.PAYMENT_CREATION}/:id?`,
    exact: true,
    main: ({ history, match, location }) => (
      <PaymentCreation history={history} match={match} location={location} />
    ),
  },
  {
    path: Path.FORGOT_PASSWORD,
    exact: false,
    main: ({ history, match }) => (
      <ForgotPassword history={history} match={match} />
    ),
  },
  {
    path: Path.NEW_PASSWORD,
    exact: false,
    main: ({ history, match, location }) => (
      <NewPassword history={history} match={match} location={location} />
    ),
  },
  {
    path: Path.USER_LIST,
    exact: true,
    main: ({ history }) => <UserList history={history} />,
  },
  {
    path: Path.CREATE_USER,
    exact: false,
    main: ({ history }) => <UserSignup history={history} />,
  },
  {
    path: Path.CREATE_DYE_PLANT,
    exact: false,
    main: ({ history }) => <DyePlantCreation history={history} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
