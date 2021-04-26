import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import AppSelectField from "../../components/form_helper/select_field";
import * as dyePlantAction from "../../actions/dye_plant";
import * as rawActions from "../../actions/raw";
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
    getListDyePlantRequest();
    const { getListFabricTypeRequest } = rawActions;
    getListFabricTypeRequest();
  }

  submitForm = () => {};

  render() {
    const {
      classes,
      handleSubmit,
      formValues,
      listDyePlant,
      listFabricType,
    } = this.props;

    return (
      <React.Fragment>
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
              <Box fontWeight="fontWeightMedium">Đơn đặt hàng</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="order"
                component={AppSelectField}
                label="Đơn đặt hàng"
              >
                {/* {listFabricType
                  .find((item) => item.type === formValues?.fabricType)
                  ?.colors.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))} */}
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
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
  rawActions: bindActionCreators(rawActions, dispatch),
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
};

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(InfoForm);
