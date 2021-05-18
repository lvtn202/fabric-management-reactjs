import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import validate from "./validate";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  Auth,
} from "./../../constants/action_types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Field, reduxForm } from "redux-form";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import AppTextField from "../../components/form_helper/text_field";
import * as authAction from "../../actions/auth";
import { NEW_PASSWORD_FORM } from "./../../constants/form_name";
import { LOGIN } from "./../../constants/path";
import queryString from "query-string";

class NewPassword extends React.Component {
  constructor(props) {
    super(props);
    const { history, authAction, location } = this.props;
    const { token } = queryString.parse(location.search);
    const { checkTokenResetPasswordRequest } = authAction;
    checkTokenResetPasswordRequest(JSON.stringify({ token: token }), () => {
      history.push(LOGIN);
    });
  }

  submitForm = (data) => {
    const { history, authAction, location } = this.props;
    const { email, token } = queryString.parse(location.search);
    const { password } = data;
    const { resetPasswordRequest } = authAction;

    let body = JSON.stringify({
      newPassword: password,
      email: email,
      token: token,
    });

    resetPasswordRequest(body, () => {
      history.push(LOGIN);
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
            Đặt lại mật khẩu
          </Typography>
          <form
            onSubmit={handleSubmit(this.submitForm)}
            className={classes.form}
          >
            <Field
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              id="password"
              type="password"
              component={AppTextField}
            />
            <Field
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Nhập lại mật khẩu"
              id="confirmPassword"
              type="password"
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
              Đặt lại
            </Button>
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

NewPassword.propTypes = {
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  authAction: PropTypes.shape({
    resetPasswordRequest: PropTypes.func,
    checkTokenResetPasswordRequest: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: NEW_PASSWORD_FORM,
  validate,
});

export default compose(
  withConnect,
  withStyles(styles),
  withReduxForm
)(NewPassword);
