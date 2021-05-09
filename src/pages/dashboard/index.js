import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Payment from "./payment";
import Import from "./import";
import Export from "./export";
import Chart from "./chart";
import * as dashboardActions from "../../actions/dashboard";

class Dashboard extends React.Component {
  componentDidMount() {
    const { dashboardActions } = this.props;
    const {
      getRecentPaymentRequest,
      getRecentImportRequest,
      getRecentExportRequest,
      getStatisticFabricRequest,
    } = dashboardActions;
    getRecentPaymentRequest();
    getRecentImportRequest();
    getRecentExportRequest();
    getStatisticFabricRequest();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const {
      classes,
      recentPayment,
      recentImport,
      recentExport,
      statisticFabric,
    } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={`${classes.paper} ${classes.fixedHeight}`}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Payment */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={`${classes.paper} ${classes.fixedHeight}`}>
                <Payment
                  money={recentPayment}
                  history={this.props.history}
                />
              </Paper>
            </Grid>
            {/* Recent Import */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Import
                  history={this.props.history}
                  recentImport={recentImport}
                />
              </Paper>
            </Grid>
            {/* Recent Export */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Export
                  history={this.props.history}
                  recentExport={recentExport}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  recentPayment: state.dashboard.recentPayment,
  recentImport: state.dashboard.recentImport,
  recentExport: state.dashboard.recentExport,
  statisticFabric: state.dashboard.statisticFabric,
});

const mapDispatchToProps = (dispatch) => ({
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Dashboard.propTypes = {
  classes: PropTypes.object,
  recentPayment: PropTypes.string,
  recentImport: PropTypes.array,
  recentExport: PropTypes.array,
  statisticFabric: PropTypes.array,
  dashboardActions: PropTypes.shape({
    getRecentPaymentRequest: PropTypes.func,
    getRecentImportRequest: PropTypes.func,
    getRecentExportRequest: PropTypes.func,
    getStatisticFabricRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(Dashboard);
