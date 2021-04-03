import "./App.css";
import Header from "./Header";
import Login from "./Login";
import DyePlant from "./DyePlant";
import Order from "./Order";
import Home from "./Home";
import Register from "./Register";
import NotFound from "./NotFound";
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "react-bootstrap/Navbar";
import {
  TOGGLE_SIDEBAR,
} from "../constants/actionTypes";

class App extends React.Component {
  render() {
    var sideBar = this.props.isDisplaySideBar === true ? <Sidebar /> : "";
    return (
      <div>
        <div className="header" fixed="top">
          <Navbar bg="light">
            <Navbar.Brand>Quản lí vải nhuộm</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">             
              <Navbar.Text className="mr-sm-5">Xin chào: Trung Tinh</Navbar.Text>
              <Navbar.Text>
                <Link to="/login" onClick={this.props.onToggleSidebar}>Đăng xuất</Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {sideBar}
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/dye-plant" component={DyePlant} />
            <Route path="/order" component={Order} />
            <Route path="/login" component={Login} />
            {/* <Route path="/payment" component={Login} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appName: state.common.appName,
  redirectTo: state.common.redirectTo,
  isDisplaySideBar: state.sidebar,
});

const mapDispatchToProps = dispatch => ({
  onToggleSidebar: () => dispatch({ type: TOGGLE_SIDEBAR })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
