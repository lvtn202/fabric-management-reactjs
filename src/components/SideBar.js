import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="nav-menu">
        <Navigation
          activeItemId="/dye-plant"
          onSelect={({ itemId }) => {
			  <Link to={itemId}/>
		  }}
          items={[
            {
              title: "Xưởng nhuộm",
              itemId: "/dye-plant",
            },
            {
              title: "Đơn đặt hàng",
              itemId: "/order",
              subNav: [
                {
                  title: "Tạo đơn",
                  itemId: "/order/create",
                },
              ],
            },
            {
              title: "Vải thô",
              itemId: "/raw",
              subNav: [
                {
                  title: "Phiếu xuất",
                  itemId: "/export",
                },
              ],
            },
            {
              title: "Vải thành phẩm",
              itemId: "/fabric",
              subNav: [
                {
                  title: "Phiếu nhập",
                  itemId: "/import",
                },
              ],
            },
            {
              title: "Hàng trả",
              itemId: "/recall",
            },
            {
              title: "Công nợ",
              itemId: "/debt",
            },
            {
              title: "Thanh toán",
              itemId: "/payment",
            },
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
