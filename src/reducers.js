import { combineReducers } from "redux";
import common from "./reducers/common";
import auth from "./reducers/auth";
import alert from "./reducers/alert";
import modal from "./reducers/modal";
import sidebar from "./reducers/sidebar";
import dyeplant from "./reducers/dye_plant";
import dyebatch from "./reducers/dye_batch";
import raw from "./reducers/raw";
import order from "./reducers/order";
import importSlip from "./reducers/import";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  auth,
  alert,
  common,
  modal,
  dyebatch,
  dyeplant,
  raw,
  order,
  sidebar,
  importSlip,
  form: formReducer,
});
