import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

class Component extends React.Component {
  render() {
    return <div>Sample Page</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Component));
