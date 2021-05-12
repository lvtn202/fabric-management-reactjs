import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link, Route, Switch } from "react-router-dom";
import {
  CLOSE_SIDEBAR,
  Alert as alertActions,
  Auth,
} from "../../constants/action_types";
import routes from "../../routes";
import Sidebar from "../sidebar";
import theme from "./../../commons/theme";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ModalComponent from "./../modal";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  LinearProgress,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import styles from "./styles";
import * as authAction from "../../actions/auth";
import { errorMapping } from "../../commons/error_mapping";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class App extends React.Component {
  componentDidMount() {
    const { authAction } = this.props;
    const { loginSuccess } = authAction;
    const auth = JSON.parse(window.localStorage.getItem("user"));
    if (auth) {
      loginSuccess(auth);
    } else {
      this.props.onShowErrorMsg();
      // setTimeout(() => {
      //   history.push(LOGIN);
      //   window.location.reload();
      // }, 1000);
    }
  }

  onClickLogout = () => {
    this.props.onCloseSidebar();
    this.props.onLogout();
  };

  render() {
    const {
      classes,
      loading,
      isDisplaySideBar,
      errorMsg,
      showErrorMsg,
      successMsg,
      showSuccessMsg,
    } = this.props;
    var sideBar = isDisplaySideBar === true ? <Sidebar /> : "";
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Quản lí vải nhuộm
            </Typography>
            <Typography>{`Xin chào ${this.props.firstName} ${this.props.lastName}`}</Typography>
            {isDisplaySideBar && (
              <IconButton
                component={Link}
                to="/login"
                edge="start"
                className={classes.exitButton}
                color="inherit"
                aria-label="open drawer"
                onClick={this.onClickLogout}
              >
                <ExitToAppIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        {loading && <LinearProgress />}
        <ModalComponent />
        <div className={classes.wrapper}>
          {/* <div className={classes.appBarSpacer} /> */}
          {sideBar}
          <div
            className={
              isDisplaySideBar
                ? classes.mainContainerSidebar
                : classes.mainContainer
            }
          >
            {this.configRouter(routes)}
          </div>
        </div>
        <Snackbar
          open={showSuccessMsg}
          autoHideDuration={3000}
          onClose={this.props.onCloseSuccessMsg}
        >
          <Alert severity="success" onClose={this.props.onCloseSuccessMsg}>
            {successMsg}
          </Alert>
        </Snackbar>
        <Snackbar
          open={showErrorMsg}
          autoHideDuration={3000}
          onClose={this.props.onCloseErrorMsg}
        >
          <Alert severity="error" onClose={this.props.onCloseErrorMsg}>
            {errorMsg}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    );
  }

  configRouter = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

const mapStateToProps = (state) => ({
  lastName: state.auth.lastName,
  firstName: state.auth.firstName,
  isDisplaySideBar: state.sidebar,
  errorMsg: state.alert.errorMsg,
  successMsg: state.alert.successMsg,
  showSuccessMsg: state.alert.showSuccessMsg,
  showErrorMsg: state.alert.showErrorMsg,
  loading: state.common.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseSidebar: () => dispatch({ type: CLOSE_SIDEBAR }),
  onLogout: () => dispatch({ type: Auth.LOGOUT }),
  onShowErrorMsg: () =>
    dispatch({
      type: alertActions.SHOW_ERROR_MESSAGE,
      payload: {
        errorMsg: errorMapping("ERROR_TOKEN"),
      },
    }),
  onCloseErrorMsg: () => dispatch({ type: alertActions.HIDE_ERROR_MESSAGE }),
  onCloseSuccessMsg: () =>
    dispatch({ type: alertActions.HIDE_SUCCESS_MESSAGE }),
  authAction: bindActionCreators(authAction, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
