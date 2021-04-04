import React from "react";
import { connect } from "react-redux";

class Order extends React.Component {
  render() {
    return (
      <div className="dye-plant">
        <h1>Order</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
