import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";

class Component extends React.Component {
  render() {
    return <div>Sample Page</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(Component);
