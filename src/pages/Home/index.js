import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authAction from "../../actions/auth";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  authAction: bindActionCreators(authAction, dispatch),
});

class Home extends React.Component {
  render() {
    var { history } = this.props;
    const { authAction } = this.props;
    const { loginSuccess } = authAction;
    const auth = JSON.parse(window.localStorage.getItem("user"));
    if (auth) {
      loginSuccess(auth);
      history.push("/dye-plant");
    } else {
      history.push("/login");
    }
    return <div></div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
