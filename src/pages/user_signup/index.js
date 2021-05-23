import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import * as adminActions from "../../actions/admin";
import validate from "./validate";
import AppTextField from "../../components/form_helper/text_field";
import AppRadioGroup from "../../components/form_helper/radio_field";
import { SIGNUP_FORM } from "./../../constants/form_name";
import { USER_LIST } from "./../../constants/path";
import { Field, reduxForm } from "redux-form";

class UserSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sex: "female",
    };
  }

  handleChangeSex = (event) => {
    this.setState({ sex: event.target.value });
  };

  submitForm = (data) => {
    console.log(data);
    const { history, adminActions } = this.props;
    const { firstName, lastName, email, password, sex } = data;
    const { createUserRequest } = adminActions;
    let body = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      sex: sex,
    });
    createUserRequest(body, () => {
      history.push(USER_LIST);
    });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Tạo nhân viên
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes, invalid, submitting, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <form
              className={classes.form}
              onSubmit={handleSubmit(this.submitForm)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={AppTextField}
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Họ"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={AppTextField}
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Tên"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={AppTextField}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    component={AppTextField}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Mật khẩu"
                    type="password"
                    id="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    required
                    label="Giới tính"
                    component={AppRadioGroup}
                    row
                    aria-label="sex"
                    name="sex"
                    value={this.state.sex}
                    onChange={this.handleChangeSex}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Nữ"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Nam"
                    />
                  </Field>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={invalid || submitting}
              >
                Tạo
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
  adminActions: bindActionCreators(adminActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

UserSignup.propTypes = {
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  adminActions: PropTypes.shape({
    createUserRequest: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: SIGNUP_FORM,
  validate,
});

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(UserSignup);
