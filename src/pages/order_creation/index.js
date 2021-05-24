import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import validate from "./validate";
import { Field, reduxForm, getFormValues } from "redux-form";
import { bindActionCreators, compose } from "redux";
import { Typography, Divider } from "@material-ui/core";
import AppSelectField from "../../components/form_helper/select_field";
import AppTextField from "../../components/form_helper/text_field";
import { Grid, Box, Button, MenuItem } from "@material-ui/core";
import * as dyePlantAction from "../../actions/dye_plant";
import * as rawActions from "../../actions/raw";
import * as orderActions from "../../actions/order";
import { CREATE_ORDER_FORM } from "./../../constants/form_name";
import { ORDER } from "./../../constants/path";

class OrderCreation extends React.Component {
  componentDidMount() {
    const { dyePlantAction, rawActions, match } = this.props;
    if (match) {
      var id = match.params.id;
      console.log(id);
    }
    const { getListDyePlantRequest } = dyePlantAction;
    const { getListFabricTypeRequest } = rawActions;
    getListDyePlantRequest();
    getListFabricTypeRequest();
  }

  submitForm = (data) => {
    const { history, orderActions, userId } = this.props;
    const { createOrderRequest } = orderActions;
    const { dyeplantId, fabricType, color, length } = data;
    let body = JSON.stringify({
      userId: userId,
      dyehouseId: dyeplantId,
      fabricType: fabricType,
      color: color,
      orderLength: length,
      createDate: new Date().getTime(),
    });
    createOrderRequest(body, () => {
      history.push(ORDER);
    });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Tạo đơn đặt hàng
        </Typography>
        <Divider />
        {this.renderForm()}
      </React.Fragment>
    );
  }

  renderForm() {
    const {
      classes,
      invalid,
      submitting,
      reset,
      listDyePlant,
      listFabricType,
      handleSubmit,
      pristine,
      formValues,
    } = this.props;

    return (
      <form className={classes.root} onSubmit={handleSubmit(this.submitForm)}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Xưởng nhuộm</Box>
          </Grid>
          <Grid item xs>
            <Field
              className={classes.selectField}
              name="dyeplantId"
              component={AppSelectField}
              label="Chọn xưởng nhuộm"
            >
              {listDyePlant.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Field>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Loại vải</Box>
          </Grid>
          <Grid item xs>
            <Field
              className={classes.selectField}
              name="fabricType"
              component={AppSelectField}
              label="Chọn loại vải"
            >
              {listFabricType.map((item, index) => (
                <MenuItem key={index} value={item.type}>
                  {item.type}
                </MenuItem>
              ))}
            </Field>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Màu</Box>
          </Grid>
          <Grid item xs>
            <Field
              className={classes.selectField}
              name="color"
              component={AppSelectField}
              label="Chọn màu"
            >
              {listFabricType
                .find((item) => item.type === formValues?.fabricType)
                ?.colors.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Field>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Độ dài đặt&nbsp;(m)</Box>
          </Grid>
          <Grid item xs>
            <Field
              required
              className={classes.selectField}
              name="length"
              label="Độ dài"
              id="length"
              type="number"
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
                Hủy Bỏ
              </Button>
            </Box>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={invalid || submitting || pristine}
            >
              Tạo
            </Button>
          </Box>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  formValues: getFormValues(CREATE_ORDER_FORM)(state),
  listDyePlant: state.dyeplant.listDyePlant,
  listFabricType: state.raw.listFabricType,
  userId: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
  rawActions: bindActionCreators(rawActions, dispatch),
  orderActions: bindActionCreators(orderActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

OrderCreation.propTypes = {
  classes: PropTypes.object,
  formValues: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  dyePlantAction: PropTypes.shape({
    getListDyePlantRequest: PropTypes.func,
  }),
  listDyePlant: PropTypes.array,
  listFabricType: PropTypes.array,
  rawActions: PropTypes.shape({
    getListFabricTypeRequest: PropTypes.func,
  }),
  orderActions: PropTypes.shape({
    createOrderRequest: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: CREATE_ORDER_FORM,
  validate,
});

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(OrderCreation);
