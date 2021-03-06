import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  Auth,
} from "../../constants/action_types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import validate from "./validate";
import AppTextField from "../../components/form_helper/text_field";
import * as authAction from "../../actions/auth";
import { LOG_IN_FORM } from "../../constants/form_name";
import { DASHBOARD, FORGOT_PASSWORD } from "../../constants/path";

class Login extends React.Component {
  submitForm = (data) => {
    const { history, authAction } = this.props;
    const { email, password } = data;
    const { loginRequest } = authAction;

    let body = JSON.stringify({
      password: password,
      email: email,
    });

    loginRequest(body, (response) => {
      window.localStorage.setItem("user", JSON.stringify(response.data.result));
      this.props.onOpenSidebar();
      history.push(DASHBOARD);
    });
  };

  render() {
    this.props.onCloseSidebar();
    this.props.onLogout();
    const { classes, invalid, submitting, handleSubmit } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <form
            onSubmit={handleSubmit(this.submitForm)}
            className={classes.form}
          >
            <Field
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              component={AppTextField}
            />
            <Field
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              id="password"
              type="password"
              autoComplete="current-password"
              component={AppTextField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={invalid || submitting}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={FORGOT_PASSWORD}>
                  <Typography variant="button" color="primary">
                    Quên mật khẩu?
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onOpenSidebar: () => dispatch({ type: OPEN_SIDEBAR }),
  onCloseSidebar: () => dispatch({ type: CLOSE_SIDEBAR }),
  onLogout: () => dispatch({ type: Auth.LOGOUT }),
  authAction: bindActionCreators(authAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Login.propTypes = {
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  authAction: PropTypes.shape({
    loginRequest: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: LOG_IN_FORM,
  validate,
});

export default compose(withConnect, withStyles(styles), withReduxForm)(Login);
