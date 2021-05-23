import * as Path from "./../../constants/path";

export const SidebarData = [
  {
    title: "Quản lí",
    admin: true,
    subNav: [
      {
        title: "Danh sách nhân viên",
        path: Path.USER_LIST,
      },
      {
        title: "Tạo nhân viên",
        path: Path.CREATE_USER,
      },
      {
        title: "Tạo xưởng nhuộm",
        path: Path.CREATE_DYE_PLANT,
      },
    ],
  },
  {
    title: "Dashboard",
    admin: false,
    subNav: [
      {
        title: "Dashboard",
        path: Path.DASHBOARD,
      },
    ],
  },
  {
    title: "Xưởng nhuộm",
    admin: false,
    subNav: [
      {
        title: "Danh sách xưởng nhuộm",
        path: Path.DYE_PLANT,
      },
    ],
  },
  {
    title: "Đơn đặt hàng",
    admin: false,
    subNav: [
      {
        title: "Danh sách đơn đặt hàng",
        path: Path.ORDER,
      },
      {
        title: "Tạo đơn",
        path: Path.ORDER_CREATION,
      },
    ],
  },
  {
    title: "Vải mộc",
    admin: false,
    subNav: [
      {
        title: "Danh sách vải tồn",
        path: Path.RAW,
      },
      {
        title: "Tạo phiếu xuất",
        path: Path.EXPORT_RAW,
      },
    ],
  },
  {
    title: "Vải thành phẩm",
    admin: false,
    subNav: [
      {
        title: "Danh sách phiếu nhập",
        path: Path.DYE_BATCH,
      },
      {
        title: "Tạo phiếu nhập",
        path: Path.IMPORT_FABRIC,
      },
    ],
  },
  {
    title: "Hàng trả",
    admin: false,
    subNav: [
      {
        title: "Danh sách hàng trả",
        path: Path.RECALL,
      },
      {
        title: "Tạo phiếu hàng trả",
        path: Path.RECALL_CREATION,
      },
    ],
  },
  {
    title: "Công nợ",
    admin: false,
    subNav: [
      {
        title: "Danh sách công nợ",
        path: Path.DEBT,
      },
    ],
  },
  {
    title: "Thanh toán",
    admin: false,
    subNav: [
      {
        title: "Danh sách hóa đơn",
        path: Path.PAYMENT,
      },
      {
        title: "Tạo hóa đơn",
        path: Path.PAYMENT_CREATION,
      },
    ],
  },
];
