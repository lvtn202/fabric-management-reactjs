import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Xưởng nhuộm',
    path: '/dye-plant',
    exact: true,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title: 'Danh sách tồn',
            path: '/dye-plant/:id',
            exact: false,
        },
    ]
  },
  {
    title: 'Đơn đặt hàng',
    path: '/order',
    exact: false,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: "Tạo đơn",
          path: "/order/create",
          exact: false,
        },
      ],
  },
  {
    title: 'Vải thô',
    path: '/raw',
    exact: false,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
          title: "Phiếu xuất",
          path: "/export",
          exact: false,
        },
      ],
  },
  {
    title: 'Vải thành phẩm',
    path: '/fabric',
    exact: false,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
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
  },
  {
    title: "Công nợ",
    path: "/debt",
    exact: false,
  },
  {
    title: "Thanh toán",
    path: "/payment",
    exact: false,
  }
];