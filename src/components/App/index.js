import "./App.css";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "react-bootstrap/Navbar";
import { CLOSE_SIDEBAR } from "../../constants/actionTypes";
import routes from "../../routes";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./../theme";

class App extends React.Component {
  render() {
    var sideBar = this.props.isDisplaySideBar === true ? <Sidebar /> : "";
    return (
      <ThemeProvider theme={theme}>
        <div className="header" fixed="top">
          <Navbar bg="light">
            <Navbar.Brand>Quản lí vải nhuộm</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="mr-sm-5">
                Xin chào: Trung Tinh
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/login" onClick={this.props.onCloseSidebar}>
                  Đăng xuất
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {sideBar}
        <div className={`main-container-${this.props.isDisplaySideBar ? 'sidebar' : ''}`}>{this.configRouter(routes)}</div>
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
});

const mapDispatchToProps = (dispatch) => ({
  onCloseSidebar: () => dispatch({ type: CLOSE_SIDEBAR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
