import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import AppSelectField from "../../components/form_helper/select_field";
import AppTextField from "../../components/form_helper/text_field";
import * as dyePlantAction from "../../actions/dye_plant";
import * as rawActions from "../../actions/raw";
import * as orderActions from "../../actions/order";
import { Field, reduxForm, getFormValues } from "redux-form";
import { INFO_FORM } from "./../../constants/form_name";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";

class InfoForm extends React.Component {
  componentDidMount() {
    const { dyePlantAction, rawActions } = this.props;
    const { getListDyePlantRequest } = dyePlantAction;
    const { getListFabricTypeRequest } = rawActions;
    getListDyePlantRequest();
    getListFabricTypeRequest();
  }

  submitForm = () => {};

  getListOrder = () => {
    const { orderActions, formValues } = this.props;
    const { getListOrderImportRequest } = orderActions;
    if (formValues?.dyehouse && formValues?.fabricType && formValues?.color) {
      const { dyehouse, fabricType, color } = formValues;
      getListOrderImportRequest(dyehouse.id, fabricType, color);
    }
  };

  updateInfo = () => {
    const { formValues } = this.props;
    if (
      formValues?.driver &&
      formValues?.dyehouse &&
      formValues?.fabricType &&
      formValues?.color &&
      formValues?.orderId
    ) {
      this.props.handleUpdateInfo(formValues);
    }
  };

  render() {
    const {
      classes,
      handleSubmit,
      formValues,
      listDyePlant,
      listFabricType,
      listOrder,
    } = this.props;

    return (
      <React.Fragment>
        <form className={classes.root} onSubmit={handleSubmit(this.submitForm)}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">T??i x??? giao h??ng:</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="driver"
                label="T??i x???"
                id="driver"
                onChange={(ev) => this.setState({ driver: ev.target.value })}
                component={AppTextField}
              />
            </Grid>
          </Grid>
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
                onBlur={this.getListOrder}
              >
                {!listDyePlant.length && (
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                )}
                {listDyePlant.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item.name}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Lo???i v???i</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="fabricType"
                component={AppSelectField}
                label="Ch???n lo???i v???i"
                onBlur={this.getListOrder}
              >
                {!listFabricType.length && (
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                )}
                {listFabricType.map((item, index) => (
                  <MenuItem key={index} value={item.type}>
                    {`${item.type} - ${item.name}`}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">M??u</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="color"
                component={AppSelectField}
                label="Ch???n m??u"
                onBlur={this.getListOrder}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
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
              <Box fontWeight="fontWeightMedium">????n ?????t h??ng</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="orderId"
                component={AppSelectField}
                label="????n ?????t h??ng"
                onChange={this.updateInfo()}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {listOrder.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.id}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  formValues: getFormValues(INFO_FORM)(state),
  listDyePlant: state.dyeplant.listDyePlant,
  listFabricType: state.raw.listFabricType,
  listOrder: state.order.listOrder,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
  rawActions: bindActionCreators(rawActions, dispatch),
  orderActions: bindActionCreators(orderActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: INFO_FORM,
});

InfoForm.propTypes = {
  classes: PropTypes.object,
  formValues: PropTypes.object,
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
    getListOrderImportRequest: PropTypes.func,
  }),
  listOrder: PropTypes.array,
};

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(InfoForm);
