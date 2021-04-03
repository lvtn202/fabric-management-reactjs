import "./App.css";
import Header from "./Header";
import Login from "./Login";
import DyePlant from "./DyePlant";
import Order from "./Order";
import Home from "./Home";
import Register from "./Register";
import NotFound from "./NotFound";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from './Sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header appName={this.props.appName} />
        </div>
        <Sidebar />
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
