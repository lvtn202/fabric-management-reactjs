import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Sample page
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes } = this.props;
    return <React.Fragment></React.Fragment>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Component.propTypes = {
  classes: PropTypes.object,
};

export default compose(withConnect, withStyles(styles))(Component);
