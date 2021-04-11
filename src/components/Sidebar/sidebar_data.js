
export const SidebarData = [
  {
    title: 'Xưởng nhuộm',
    path: '/dye-plant',
    exact: true,
    level: 1,
  },
  {
    title: 'Đơn đặt hàng',
    path: '/order',
    exact: false,
    level: 1,
    subNav: [
        {
          title: "Tạo đơn",
          path: "/order/create",
          exact: false,
          level: 2,
        },
      ],
  },
  {
    title: 'Vải thô',
    path: '/raw',
    exact: false,
    level: 1,
    subNav: [
        {
          title: "Phiếu xuất",
          path: "/export",
          exact: false,
          level: 2,
        },
      ],
  },
  {
    title: 'Vải thành phẩm',
    path: '/fabric',
    exact: false,
    level: 1,
    subNav: [
        {
          title: "Phiếu nhập",
          path: "/import",
          exact: false,
          level: 2,
        },
      ],
  },
  {
    title: "Hàng trả",
    path: "/recall",
    exact: false,
    level: 1,
  },
  {
    title: "Công nợ",
    path: "/debt",
    exact: false,
    level: 1,
  },
  {
    title: "Thanh toán",
    path: "/payment",
    exact: false,
    level: 1,
  }
];