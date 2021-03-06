import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Payment from "./payment";
import Import from "./import";
import Export from "./export";
import Chart from "./chart";
import ChartDyeplant from "./chart_dyeplant";
import ChartFabricType from "./chart_type";
import * as dashboardActions from "../../actions/dashboard";
import * as dyeplantActions from "../../actions/dye_plant";
import * as rawActions from "../../actions/raw";
import { Button } from "@material-ui/core";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      startDate: date.setMonth(date.getMonth() - 12),
      endDate: new Date().getTime(),
      dyeplantTab: 1,
      dyeplantYearTab: 1,
      typeTab: "1045",
    };
  }

  componentDidMount() {
    const { dashboardActions, dyeplantActions, rawActions } = this.props;
    const {
      getRecentPaymentRequest,
      getRecentImportRequest,
      getRecentExportRequest,
      getStatisticFabricRequest,
      getInforCompletedFabricByDyehouseRequest,
      getInforCompletedFabricByTypeRequest,
      getInforCompletedFabricByDyehouseRecentYearRequest,
    } = dashboardActions;
    const { getListDyePlantRequest } = dyeplantActions;
    const { getListFabricTypeRequest } = rawActions;
    getListDyePlantRequest();
    getListFabricTypeRequest();
    getRecentPaymentRequest();
    getRecentImportRequest();
    getRecentExportRequest();
    getStatisticFabricRequest();
    getInforCompletedFabricByDyehouseRequest(
      this.state.dyeplantTab,
      this.state.startDate,
      this.state.endDate
    );
    getInforCompletedFabricByTypeRequest(
      this.state.typeTab,
      this.state.startDate,
      this.state.endDate
    );
    getInforCompletedFabricByDyehouseRecentYearRequest(
      this.state.dyeplantYearTab
    );
  }

  handleChangeDyeplantYearTab = (event, newValue) => {
    const { dashboardActions } = this.props;
    const { getInforCompletedFabricByDyehouseRecentYearRequest } =
      dashboardActions;
    getInforCompletedFabricByDyehouseRecentYearRequest(newValue);
    this.setState({ dyeplantYearTab: newValue });
  };

  handleChangeDyeplantTab = (event, newValue) => {
    const { dashboardActions } = this.props;
    const { getInforCompletedFabricByDyehouseRequest } = dashboardActions;
    getInforCompletedFabricByDyehouseRequest(
      newValue,
      this.state.startDate,
      this.state.endDate
    );
    this.setState({ dyeplantTab: newValue });
  };

  handleChangeTypeTab = (event, newValue) => {
    const { dashboardActions } = this.props;
    const { getInforCompletedFabricByTypeRequest } = dashboardActions;
    getInforCompletedFabricByTypeRequest(
      newValue,
      this.state.startDate,
      this.state.endDate
    );
    this.setState({ typeTab: newValue });
  };

  handleChangeDate = () => {
    const { dashboardActions } = this.props;
    const {
      getInforCompletedFabricByDyehouseRequest,
      getInforCompletedFabricByTypeRequest,
    } = dashboardActions;
    getInforCompletedFabricByDyehouseRequest(
      this.state.dyeplantTab,
      this.state.startDate,
      this.state.endDate
    );
    getInforCompletedFabricByTypeRequest(
      this.state.typeTab,
      this.state.startDate,
      this.state.endDate
    );
  };

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
      listDyePlant,
      listFabricType,
      listInforCompletedFabricByDyehouse,
      listInforCompletedFabricByType,
      listInforCompletedFabricRecentYear,
    } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={10}>
              <Paper className={`${classes.paper}`}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  Th???ng k?? s???n l?????ng trong n??m
                </Typography>
                <Tabs
                  value={this.state.dyeplantYearTab}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  onChange={this.handleChangeDyeplantYearTab}
                  aria-label="tabs example"
                >
                  {listDyePlant.map((item) => (
                    <Tab label={item.name} value={item.id} key={item.id} />
                  ))}
                </Tabs>
                <div className={`${classes.paper} ${classes.fixedHeight}`}>
                  <Chart data={listInforCompletedFabricRecentYear} />
                </div>
              </Paper>
            </Grid>

            {/* Recent Payment */}
            <Grid item xs={12} md={4} lg={2}>
              <Paper className={`${classes.paper}`}>
                <Payment money={recentPayment} history={this.props.history} />
              </Paper>
            </Grid>

            {/* Fabric of dye plant */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  Th???ng k?? v???i th??nh ph???m
                </Typography>
                {this.renderDatePicker()}
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Typography
                      component="h2"
                      variant="h6"
                      color="primary"
                      gutterBottom
                    >
                      Theo x?????ng
                    </Typography>
                    <Tabs
                      value={this.state.dyeplantTab}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      onChange={this.handleChangeDyeplantTab}
                      aria-label="tabs example"
                    >
                      {listDyePlant.map((item) => (
                        <Tab label={item.name} value={item.id} key={item.id} />
                      ))}
                    </Tabs>
                    <div className={`${classes.paper} ${classes.fixedHeight}`}>
                      <ChartDyeplant
                        data={listInforCompletedFabricByDyehouse}
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      component="h2"
                      variant="h6"
                      color="primary"
                      gutterBottom
                    >
                      Theo lo???i v???i
                    </Typography>
                    <Tabs
                      value={this.state.typeTab}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="scrollable"
                      scrollButtons="auto"
                      onChange={this.handleChangeTypeTab}
                      aria-label="tabs example"
                    >
                      {listFabricType.map((item) => (
                        <Tab
                          label={item.type}
                          value={item.type}
                          key={item.id}
                        />
                      ))}
                    </Tabs>
                    <div className={`${classes.paper} ${classes.fixedHeight}`}>
                      <ChartFabricType data={listInforCompletedFabricByType} />
                    </div>
                  </Grid>
                </Grid>
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

  renderDatePicker() {
    const { classes } = this.props;
    const { startDate, endDate } = this.state;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3}>
          <Grid item>
            <KeyboardDatePicker
              disableToolbar
              inputVariant="outlined"
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              label="T??? ng??y"
              value={startDate}
              onChange={(date) => this.setState({ startDate: date.getTime() })}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid item>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              margin="normal"
              label="?????n ng??y"
              value={endDate}
              onChange={(date) => this.setState({ endDate: date.getTime() })}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              className={classes.button}
              variant="outlined"
              onClick={this.handleChangeDate}
            >
              L???c
            </Button>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  listDyePlant: state.dyeplant.listDyePlant,
  listFabricType: state.raw.listFabricType,
  recentPayment: state.dashboard.recentPayment,
  recentImport: state.dashboard.recentImport,
  recentExport: state.dashboard.recentExport,
  statisticFabric: state.dashboard.statisticFabric,
  listInforCompletedFabricByType:
    state.dashboard.listInforCompletedFabricByType,
  listInforCompletedFabricByDyehouse:
    state.dashboard.listInforCompletedFabricByDyehouse,
  listInforCompletedFabricRecentYear:
    state.dashboard.listInforCompletedFabricRecentYear,
});

const mapDispatchToProps = (dispatch) => ({
  dashboardActions: bindActionCreators(dashboardActions, dispatch),
  dyeplantActions: bindActionCreators(dyeplantActions, dispatch),
  rawActions: bindActionCreators(rawActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Dashboard.propTypes = {
  classes: PropTypes.object,
  recentPayment: PropTypes.string,
  recentImport: PropTypes.array,
  recentExport: PropTypes.array,
  statisticFabric: PropTypes.array,
  listDyePlant: PropTypes.array,
  listFabricType: PropTypes.array,
  listInforCompletedFabricByType: PropTypes.array,
  listInforCompletedFabricByDyehouse: PropTypes.array,
  dashboardActions: PropTypes.shape({
    getRecentPaymentRequest: PropTypes.func,
    getRecentImportRequest: PropTypes.func,
    getRecentExportRequest: PropTypes.func,
    getStatisticFabricRequest: PropTypes.func,
    getInforExportedFabricRequest: PropTypes.func,
    getInforCompletedFabricByTypeRequest: PropTypes.func,
    getInforCompletedFabricByDyehouseRequest: PropTypes.func,
    getInforCompletedFabricByDyehouseRecentYearRequest: PropTypes.func,
  }),
  dyeplantActions: PropTypes.shape({
    getListDyePlantRequest: PropTypes.func,
  }),
  rawActions: PropTypes.shape({
    getListFabricTypeRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(Dashboard);
