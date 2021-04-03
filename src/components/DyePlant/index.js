import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class DyePlant extends React.Component {

  render() {
    return (
      <div className="dye-plant">
        <h1>DyePlant</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DyePlant);
