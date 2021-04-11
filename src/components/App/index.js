import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { CLOSE_SIDEBAR } from "../../constants/actionTypes";
import routes from "../../routes";
import Sidebar from "../Sidebar/Sidebar";
import theme from "./../../commons/theme";
import { ThemeProvider, withStyles } from "@material-ui/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  LinearProgress,
} from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: "16px",
  },
  exitButton: {
    marginLeft: "16px",
  },
});

class App extends React.Component {
  render() {
    const { classes, loading } = this.props;
    var sideBar = this.props.isDisplaySideBar === true ? <Sidebar /> : "";
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Quản lí vải nhuộm
            </Typography>
            <Typography>Xin chào: Trung Tính</Typography>
            {
              <IconButton
                component={Link}
                to="/login"
                edge="start"
                className={classes.exitButton}
                color="inherit"
                aria-label="open drawer"
                onClick={this.props.onCloseSidebar}
              >
                <ExitToAppIcon />
              </IconButton>
            }
          </Toolbar>
        </AppBar>
        {loading && <LinearProgress />}
        {sideBar}
        <div
          className={`main-container${
            this.props.isDisplaySideBar ? "-sidebar" : ""
          }`}
        >
          {this.configRouter(routes)}
        </div>
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
  appName: state.common.appName,
  redirectTo: state.common.redirectTo,
  isDisplaySideBar: state.sidebar,
  loading: state.common.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseSidebar: () => dispatch({ type: CLOSE_SIDEBAR }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
