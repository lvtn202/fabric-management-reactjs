import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Field, reduxForm } from "redux-form";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import validate from "./validate";
import AppTextField from "../../components/form_helper/text_field";
import * as authAction from "../../actions/auth";
import { FORGOT_PASSWORD_FORM } from "../../constants/form_name";
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  Auth,
} from "../../constants/action_types";
import { LOGIN } from "../../constants/path";

class ForgotPassword extends React.Component {
  submitForm = (data) => {
    const { history, authAction } = this.props;
    const { email } = data;
    const { sendMailResetPasswordRequest } = authAction;
    let body = JSON.stringify({
      email: email,
    });
    sendMailResetPasswordRequest(body, (response) => {
      history.push(LOGIN);
    });
  };

  render() {
    this.props.onCloseSidebar();
    this.props.onLogout();
    const { classes, invalid, submitting, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Quên mật khẩu
            </Typography>
            <Typography variant="caption" display="block">
              Vui lòng nhập email để đặt lại mật khẩu
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={invalid || submitting}
              >
                Gửi
              </Button>
            </form>
          </div>
        </Container>
      </React.Fragment>
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
const withReduxForm = reduxForm({
  form: FORGOT_PASSWORD_FORM,
  validate,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

ForgotPassword.propTypes = {
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  authAction: PropTypes.shape({
    sendMailResetPasswordRequest: PropTypes.func,
  }),
};

export default compose(
  withConnect,
  withStyles(styles),
  withReduxForm
)(ForgotPassword);
