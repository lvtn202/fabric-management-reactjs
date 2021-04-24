export const SidebarData = [
  {
    title: "Xưởng nhuộm",
    path: "/dye-plant",
    exact: true,
    subNav: [
      {
        title: "Danh sách xưởng nhuộm",
        path: "/dye-plant",
        exact: true,
      },
    ],
  },
  {
    title: "Đơn đặt hàng",
    path: "/order",
    exact: false,
    subNav: [
      {
        title: "Danh sách đơn đặt hàng",
        path: "/order",
        exact: false,
      },
      {
        title: "Tạo đơn",
        path: "/order/create",
        exact: false,
      },
    ],
  },
  {
    title: "Vải mộc",
    path: "/raw",
    exact: false,
    subNav: [
      {
        title: "Danh sách vải tồn",
        path: "/raw",
        exact: false,
      },
      {
        title: "Phiếu xuất",
        path: "/export",
        exact: false,
      },
    ],
  },
  {
    title: "Vải thành phẩm",
    path: "/dye-batch",
    exact: false,
    subNav: [
      {
        title: "Danh sách vải thành phẩm",
        path: "/dye-batch",
        exact: false,
      },
      {
        title: "Phiếu nhập",
        path: "/import",
        exact: false,
      },
    ],
  },
  {
    title: "Hàng trả",
    path: "/recall",
    exact: false,
    subNav: [
      {
        title: "Danh sách hàng trả",
        path: "/recall",
        exact: false,
      },
    ],
  },
  {
    title: "Công nợ",
    path: "/debt",
    exact: false,
    subNav: [
      {
        title: "Danh sách công nợ",
        path: "/debt",
        exact: false,
      },
    ],
  },
  {
    title: "Thanh toán",
    path: "/payment",
    exact: false,
    subNav: [
      {
        title: "Danh sách hóa đơn",
        path: "/payment",
        exact: true,
      },
      {
        title: "Tạo hóa đơn",
        path: "/payment/create",
        exact: false,
      },
    ],
  },
];
