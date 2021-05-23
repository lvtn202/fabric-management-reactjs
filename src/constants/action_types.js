export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";

export const Alert = {
  SHOW_SUCCESS_MESSAGE: "SHOW_SUCCESS_MESSAGE",
  HIDE_SUCCESS_MESSAGE: "HIDE_SUCCESS_MESSAGE",
  SHOW_ERROR_MESSAGE: "SHOW_ERROR_MESSAGE",
  HIDE_ERROR_MESSAGE: "HIDE_ERROR_MESSAGE",
};

export const Auth = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILED: "LOGIN_FAILED",

  SIGNUP: "SIGNUP",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILED: "SIGNUP_FAILED",

  SEND_MAIL_RESET_PASSWORD: "SEND_MAIL_RESET_PASSWORD",
  SEND_MAIL_RESET_PASSWORD_SUCCESS: "SEND_MAIL_RESET_PASSWORD_SUCCESS",
  SEND_MAIL_RESET_PASSWORD_FAILED: "SEND_MAIL_RESET_PASSWORD_FAILED",

  RESET_PASSWORD: "RESET_PASSWORD",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED",

  CHECK_TOKEN_RESET_PASSWORD: "CHECK_TOKEN_RESET_PASSWORD",
  CHECK_TOKEN_RESET_PASSWORD_SUCCESS: "CHECK_TOKEN_RESET_PASSWORD_SUCCESS",
  CHECK_TOKEN_RESET_PASSWORD_FAILED: "CHECK_TOKEN_RESET_PASSWORD_FAILED",

  LOGOUT: "LOGOUT",
};

export const Modal = {
  SHOW_MODAL: "SHOW_MODAL",
  HIDE_MODAL: "HIDE_MODAL",
  CHANGE_MODAL_CONTENT: "CHANGE_MODAL_CONTENT",
  CHANGE_MODAL_TITLE: "CHANGE_MODAL_TITLE",
};

export const DyePlant = {
  FETCH_LIST_DYEPLANT: "FETCH_LIST_DYEPLANT",
  FETCH_LIST_DYEPLANT_SUCCESS: "FETCH_LIST_DYEPLANT_SUCCESS",
  FETCH_LIST_DYEPLANT_FAILED: "FETCH_LIST_DYEPLANT_FAILED",

  FETCH_DETAIL_DYEPLANT: "FETCH_DETAIL_DYEPLANT",
  FETCH_DETAIL_DYEPLANT_SUCCESS: "FETCH_DETAIL_DYEPLANT_SUCCESS",
  FETCH_DETAIL_DYEPLANT_FAILED: "FETCH_DETAIL_DYEPLANT_FAILED",

  UPDATE_DETAIL_DYEPLANT: "EDIT_DETAIL_DYEPLANT",
  UPDATE_DETAIL_DYEPLANT_SUCCESS: "EDIT_DETAIL_DYEPLANT_SUCCESS",
  UPDATE_DETAIL_DYEPLANT_FAILED: "EDIT_DETAIL_DYEPLANT_FAILED",
};

export const Order = {
  FETCH_LIST_ORDER: "FETCH_LIST_ORDER",
  FETCH_LIST_ORDER_SUCCESS: "FETCH_LIST_ORDER_SUCCESS",
  FETCH_LIST_ORDER_FAILED: "FETCH_LIST_ORDER_FAILED",

  FETCH_LIST_ORDER_IMPORT: "FETCH_LIST_ORDER_IMPORT",
  FETCH_LIST_ORDER_IMPORT_SUCCESS: "FETCH_LIST_ORDER_IMPORT_SUCCESS",
  FETCH_LIST_ORDER_IMPORT_FAILED: "FETCH_LIST_ORDER_IMPORT_FAILED",

  FETCH_DETAIL_ORDER: "FETCH_DETAIL_ORDER",
  FETCH_DETAIL_ORDER_SUCCESS: "FETCH_DETAIL_ORDER_SUCCESS",
  FETCH_DETAIL_ORDER_FAILED: "FETCH_DETAIL_ORDER_FAILED",

  CREATE_ORDER: "CREATE_ORDER",
  CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
  CREATE_ORDER_FAILED: "CREATE_ORDER_FAILED",
};

export const Import = {
  FETCH_LIST_IMPORT: "FETCH_LIST_IMPORT",
  FETCH_LIST_IMPORT_SUCCESS: "FETCH_LIST_IMPORT_SUCCESS",
  FETCH_LIST_IMPORT_FAILED: "FETCH_LIST_IMPORT_FAILED",

  FETCH_LIST_EXPORTED_FABRIC: "FETCH_LIST_EXPORTED_FABRIC",
  FETCH_LIST_EXPORTED_FABRIC_SUCCESS: "FETCH_LIST_EXPORTED_FABRIC_SUCCESS",
  FETCH_LIST_EXPORTED_FABRIC_FAILED: "FETCH_LIST_EXPORTED_FABRIC_FAILED",

  FETCH_DETAIL_IMPORT: "FETCH_DETAIL_IMPORT",
  FETCH_DETAIL_IMPORT_SUCCESS: "FETCH_DETAIL_IMPORT_SUCCESS",
  FETCH_DETAIL_IMPORT_FAILED: "FETCH_DETAIL_IMPORT_FAILED",

  FETCH_DYEING_PRICE: "FETCH_DYEING_PRICE",
  FETCH_DYEING_PRICE_SUCCESS: "FETCH_DYEING_PRICE_SUCCESS",
  FETCH_DYEING_PRICE_FAILED: "FETCH_DYEING_PRICE_FAILED",

  CREATE_IMPORT: "CREATE_IMPORT",
  CREATE_IMPORT_SUCCESS: "CREATE_IMPORT_SUCCESS",
  CREATE_IMPORT_FAILED: "CREATE_IMPORT_FAILED",
};

export const DyeBatch = {
  FETCH_LIST_DYEBATCH: "FETCH_LIST_DYEBATCH",
  FETCH_LIST_DYEBATCH_SUCCESS: "FETCH_LIST_DYEBATCH_SUCCESS",
  FETCH_LIST_DYEBATCH_FAILED: "FETCH_LIST_DYEBATCH_FAILED",

  FETCH_DETAIL_DYEBATCH: "FETCH_DETAIL_DYEBATCH",
  FETCH_DETAIL_DYEBATCH_SUCCESS: "FETCH_DETAIL_DYEBATCH_SUCCESS",
  FETCH_DETAIL_DYEBATCH_FAILED: "FETCH_DETAIL_DYEBATCH_FAILED",

  FETCH_LIST_FABRIC_DYEBATCH: "FETCH_LIST_FABRIC_DYEBATCH",
  FETCH_LIST_FABRIC_DYEBATCH_SUCCESS: "FETCH_LIST_FABRIC_DYEBATCH_SUCCESS",
  FETCH_LIST_FABRIC_DYEBATCH_FAILED: "FETCH_LIST_FABRIC_DYEBATCH_FAILED",
};

export const Raw = {
  // List raw in stock
  FETCH_LIST_RAW_STOCK: "FETCH_LIST_RAW_STOCK",
  FETCH_LIST_RAW_STOCK_SUCCESS: "FETCH_LIST_RAW_STOCK_SUCCESS",
  FETCH_LIST_RAW_STOCK_FAILED: "FETCH_LIST_RAW_STOCK_FAILED",

  // List fabric one plant
  FETCH_LIST_FABRIC_DYEPLANT: "FETCH_LIST_FABRIC_DYEPLANT",
  FETCH_LIST_FABRIC_DYEPLANT_SUCCESS: "FETCH_LIST_FABRIC_DYEPLANT_SUCCESS",
  FETCH_LIST_FABRIC_DYEPLANT_FAILED: "FETCH_LIST_FABRIC_DYEPLANT_FAILED",

  // List raw all plant
  FETCH_LIST_RAW_ALL_PLANT: "FETCH_LIST_RAW_ALL_PLANT",
  FETCH_LIST_RAW_ALL_PLANT_SUCCESS: "FETCH_LIST_RAW_ALL_PLANT_SUCCESS",
  FETCH_LIST_RAW_ALL_PLANT_FAILED: "FETCH_LIST_RAW_ALL_PLANT_FAILED",

  // List fabric type
  FETCH_LIST_FABRIC_TYPE: "FETCH_LIST_FABRIC_TYPE",
  FETCH_LIST_FABRIC_TYPE_SUCCESS: "FETCH_LIST_FABRIC_TYPE_SUCCESS",
  FETCH_LIST_FABRIC_TYPE_FAILED: "FETCH_LIST_FABRIC_TYPE_FAILED",
};

export const Export = {
  // List raw prepare to export
  FETCH_LIST_RAW_EXPORT: "FETCH_LIST_RAW_EXPORT",
  FETCH_LIST_RAW_EXPORT_SUCCESS: "FETCH_LIST_RAW_EXPORT_SUCCESS",
  FETCH_LIST_RAW_EXPORT_FAILED: "FETCH_LIST_RAW_EXPORT_FAILED",

  // Create export
  CREATE_EXPORT: "CREATE_EXPORT",
  CREATE_EXPORT_SUCCESS: "CREATE_EXPORT_SUCCESS",
  CREATE_EXPORT_FAILED: "CREATE_EXPORT_FAILED",
};

export const Recall = {
  // List recall
  FETCH_LIST_RECALL: "FETCH_LIST_RECALL",
  FETCH_LIST_RECALL_SUCCESS: "FETCH_LIST_RECALL_SUCCESS",
  FETCH_LIST_RECALL_FAILED: "FETCH_LIST_RECALL_FAILED",

  // List fabric detail
  FETCH_LIST_FABRIC_RECALL: "FETCH_LIST_FABRIC_RECALL",
  FETCH_LIST_FABRIC_RECALL_SUCCESS: "FETCH_LIST_FABRIC_RECALL_SUCCESS",
  FETCH_LIST_FABRIC_RECALL_FAILED: "FETCH_LIST_FABRIC_RECALL_FAILED",

  // Detail recall
  FETCH_DETAIL_RECALL: "FETCH_DETAIL_RECALL",
  FETCH_DETAIL_RECALL_SUCCESS: "FETCH_DETAIL_RECALL_SUCCESS",
  FETCH_DETAIL_RECALL_FAILED: "FETCH_DETAIL_RECALL_FAILED",

  // List fabric prepare to return
  FETCH_LIST_FABRIC_OF_DYEPLANT: "FETCH_LIST_FABRIC_OF_DYEPLANT",
  FETCH_LIST_FABRIC_OF_DYEPLANT_SUCCESS:
    "FETCH_LIST_FABRIC_OF_DYEPLANT_SUCCESS",
  FETCH_LIST_FABRIC_OF_DYEPLANT_FAILED: "FETCH_LIST_FABRIC_OF_DYEPLANT_FAILED",

  // Create export
  CREATE_RECALL: "CREATE_RECALL",
  CREATE_RECALL_SUCCESS: "CREATE_RECALL_SUCCESS",
  CREATE_RECALL_FAILED: "CREATE_RECALL_FAILED",
};

export const Payment = {
  // List payment
  FETCH_LIST_PAYMENT: "FETCH_LIST_PAYMENT",
  FETCH_LIST_PAYMENT_SUCCESS: "FETCH_LIST_PAYMENT_SUCCESS",
  FETCH_LIST_PAYMENT_FAILED: "FETCH_LIST_PAYMENT_FAILED",

  // List payment method
  FETCH_LIST_PAYMENT_METHOD: "FETCH_LIST_PAYMENT_METHOD",
  FETCH_LIST_PAYMENT_METHOD_SUCCESS: "FETCH_LIST_PAYMENT_METHOD_SUCCESS",
  FETCH_LIST_PAYMENT_METHOD_FAILED: "FETCH_LIST_PAYMENT_METHOD_FAILED",

  // Create payment
  CREATE_PAYMENT: "CREATE_PAYMENT",
  CREATE_PAYMENT_SUCCESS: "CREATE_PAYMENT_SUCCESS",
  CREATE_PAYMENT_FAILED: "CREATE_PAYMENT_FAILED",
};

export const Dashboard = {
  // Recent payment
  FETCH_RECENT_PAYMENT: "FETCH_RECENT_PAYMENT",
  FETCH_RECENT_PAYMENT_SUCCESS: "FETCH_RECENT_PAYMENT_SUCCESS",
  FETCH_RECENT_PAYMENT_FAILED: "FETCH_RECENT_PAYMENT_FAILED",

  // Recent import
  FETCH_RECENT_IMPORT: "FETCH_RECENT_IMPORT",
  FETCH_RECENT_IMPORT_SUCCESS: "FETCH_RECENT_IMPORT_SUCCESS",
  FETCH_RECENT_IMPORT_FAILED: "FETCH_RECENT_IMPORT_FAILED",

  // Recent export
  FETCH_RECENT_EXPORT: "FETCH_RECENT_EXPORT",
  FETCH_RECENT_EXPORT_SUCCESS: "FETCH_RECENT_EXPORT_SUCCESS",
  FETCH_RECENT_EXPORT_FAILED: "FETCH_RECENT_EXPORT_FAILED",

  // Total statistic fabric
  FETCH_STATISTIC_FABRIC: "FETCH_STATISTIC_FABRIC",
  FETCH_STATISTIC_FABRIC_SUCCESS: "FETCH_STATISTIC_FABRIC_SUCCESS",
  FETCH_STATISTIC_FABRIC_FAILED: "FETCH_STATISTIC_FABRIC_FAILED",
};

export const Admin = {
  FETCH_LIST_USER: "FETCH_LIST_USER",
  FETCH_LIST_USER_SUCCESS: "FETCH_LIST_USER_SUCCESS",
  FETCH_LIST_USER_FAILED: "FETCH_LIST_USER_FAILED",

  CREATE_USER: "CREATE_USER",
  CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
  CREATE_USER_FAILED: "CREATE_USER_FAILED",

  CREATE_DYE_PLANT: "CREATE_DYE_PLANT",
  CREATE_DYE_PLANT_SUCCESS: "CREATE_DYE_PLANT_SUCCESS",
  CREATE_DYE_PLANT_FAILED: "CREATE_DYE_PLANT_FAILED",
};
