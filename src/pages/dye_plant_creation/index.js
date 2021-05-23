import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import {
  Box,
  Grid,
  Button,
  Typography,
  Divider,
  Container,
} from "@material-ui/core";
import AppTextField from "../../components/form_helper/text_field";
import validate from "./validate";
import * as adminActions from "../../actions/admin";
import { DYE_PLANT_FORM } from "./../../constants/form_name";
import { DASHBOARD, DYE_PLANT } from "../../constants/path";
import { APP_ADMIN } from "../../constants/user_roles";

class DyePlantCreation extends React.Component {
  constructor(props) {
    super(props);
    const auth = JSON.parse(window.localStorage.getItem("user"));
    if (!auth.roles.includes(APP_ADMIN)) {
      this.props.history.push(DASHBOARD);
    }
  }

  handleSubmitForm = (data) => {
    const { adminActions, history } = this.props;
    const { createDyePlantRequest } = adminActions;
    const { name, address, phoneNumber, email } = data;
    let body = JSON.stringify({
      name,
      address,
      email,
      phoneNumber,
    });
    createDyePlantRequest(body, () => {
      history.push(DYE_PLANT);
    });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Tạo xưởng nhuộm
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes, invalid, submitting, handleSubmit } = this.props;
    return (
      <Container component="main" maxWidth="sm">
        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
          <Grid container>
            <Grid item md={12}>
              <Field
                id="name"
                label="Tên xưởng"
                className={classes.textField}
                margin="normal"
                required
                fullWidth
                autoFocus
                name="name"
                component={AppTextField}
              />
            </Grid>
            <Field
              id="address"
              label="Địa chỉ"
              className={classes.textField}
              margin="normal"
              required
              fullWidth
              name="address"
              component={AppTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="phoneNumber"
              label="Điện thoại"
              required
              fullWidth
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="phoneNumber"
              component={AppTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="email"
              label="Email"
              required
              multiline
              fullWidth
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="email"
              component={AppTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={invalid || submitting}
              >
                Lưu Lại
              </Button>
            </Box>
          </Grid>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  adminActions: bindActionCreators(adminActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

DyePlantCreation.propTypes = {
  classes: PropTypes.object,
  adminActions: PropTypes.shape({
    createDyePlantRequest: PropTypes.func,
  }),
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

const withReduxForm = reduxForm({
  form: DYE_PLANT_FORM,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(DyePlantCreation);
