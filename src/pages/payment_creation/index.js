import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import validate from "./validate";
import * as paymentActions from "../../actions/payment";
import * as dyePlantActions from "../../actions/dye_plant";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { PAYMENT_FORM } from "./../../constants/form_name";
import AppSelectField from "../../components/form_helper/select_field";
import AppTextField from "../../components/form_helper/text_field";
import { currencyFormat } from "../../commons/utils";
import { Field, reduxForm, getFormValues } from "redux-form";
import { Button, Box, Grid, MenuItem } from "@material-ui/core";
import { PAYMENT } from "./../../constants/path";

class PaymentCreation extends React.Component {
  componentDidMount() {
    const { paymentActions, dyePlantActions, location, listDyePlant } =
      this.props;
    const { getListPaymentMethodRequest, updateCreatePayment } = paymentActions;
    const { getListDyePlantRequest } = dyePlantActions;
    getListDyePlantRequest(null, () => {
      if (location && location.state) {
        updateCreatePayment(
          listDyePlant.findIndex(
            (e) => e.id === location.state.detailDyePlant.id
          )
        );
      } else {
        updateCreatePayment("");
      }
    });
    getListPaymentMethodRequest();
  }

  handleSubmitForm = (data) => {
    const { formValues, history, userId, paymentActions, listDyePlant } =
      this.props;
    const { createPaymentRequest } = paymentActions;
    const { dyehouse, paymentMethod, bankName, money, recipientName } =
      formValues;
    if (
      dyehouse != null &&
      paymentMethod != null &&
      money != null &&
      recipientName != null
    ) {
      let body = JSON.stringify({
        userId: userId,
        dyehouseId: listDyePlant[dyehouse].id,
        paymentMethodId: paymentMethod?.paymentMethodId,
        money,
        recipientName,
        bankName: paymentMethod?.paymentMethodId === 1 ? "" : bankName ?? "",
        createDate: new Date().getTime(),
      });
      createPaymentRequest(body, () => {
        history.push(PAYMENT);
      });
    } else return;
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          T???o h??a ????n thanh to??n
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const {
      classes,
      invalid,
      pristine,
      submitting,
      reset,
      handleSubmit,
      formValues,
      listDyePlant,
      listPaymentMethod,
    } = this.props;
    return (
      <React.Fragment>
        <form
          className={classes.root}
          onSubmit={handleSubmit(this.handleSubmitForm)}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">X?????ng nhu???m</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="dyehouse"
                component={AppSelectField}
                label="Ch???n x?????ng nhu???m"
              >
                {!listDyePlant.length && (
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                )}
                {listDyePlant.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">C??ng n???</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">
                {formValues &&
                  currencyFormat(
                    listDyePlant[formValues?.dyehouse]?.debt ?? ""
                  )}
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Ph????ng th???c thanh to??n</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="paymentMethod"
                component={AppSelectField}
                label="Ch???n ph????ng th???c thanh to??n"
              >
                {!listPaymentMethod.length && (
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                )}
                {listPaymentMethod.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Ng??n h??ng</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="bankName"
                label="T??n ng??n h??ng"
                id="bankName"
                disabled={
                  this.props.formValues?.paymentMethod?.paymentMethodId === 1
                }
                component={AppTextField}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">T???ng ti???n&nbsp;(VND)</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="money"
                label="Nh???p s??? ti???n"
                id="money"
                type="number"
                component={AppTextField}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Nh??n vi??n nh???n</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="recipientName"
                label="Nh??n vi??n nh???n"
                id="recipientName"
                component={AppTextField}
              />
            </Grid>
          </Grid>

          <Grid item md={12}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Box mr={1}>
                <Button
                  variant="contained"
                  onClick={reset}
                  disabled={submitting || pristine}
                >
                  H???y B???
                </Button>
              </Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={
                  pristine ||
                  invalid ||
                  submitting ||
                  Number(listDyePlant[formValues?.dyehouse]?.debt) <
                    Number(formValues?.money)
                }
              >
                T???o
              </Button>
            </Box>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  listDyePlant: state.dyeplant.listDyePlant,
  listPaymentMethod: state.payment.listPaymentMethod,
  formValues: getFormValues(PAYMENT_FORM)(state),
  userId: state.auth.id,
  initialValues: state.payment.createPayment,
});

const mapDispatchToProps = (dispatch) => ({
  paymentActions: bindActionCreators(paymentActions, dispatch),
  dyePlantActions: bindActionCreators(dyePlantActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

PaymentCreation.propTypes = {
  classes: PropTypes.object,
  initialValues: PropTypes.object,
  paymentActions: PropTypes.shape({
    getListPaymentMethodRequest: PropTypes.func,
    createPaymentRequest: PropTypes.func,
    updateCreatePayment: PropTypes.func,
  }),
  listPaymentMethod: PropTypes.array,
  dyePlantActions: PropTypes.shape({
    getListDyePlantRequest: PropTypes.func,
  }),
  listDyePlant: PropTypes.array,
};

const withReduxForm = reduxForm({
  form: PAYMENT_FORM,
  validate,
  enableReinitialize: true,
});

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(PaymentCreation);
