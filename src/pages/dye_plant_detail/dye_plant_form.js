import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { Box, Grid, Button } from "@material-ui/core";
import AppTextField from "../../components/form_helper/text_field";
import * as modalActions from "../../actions/modal";
import validate from "./validate";
import * as dyePlantAction from "../../actions/dye_plant";

class DyePlantForm extends React.Component {
  handleSubmitForm = (data) => {
    const { dyePlantAction, detailDyePlant } = this.props;
    const { updateDetailDyePlantRequest } = dyePlantAction;
    const { address, phoneNumber, email } = data;
    const { id } = detailDyePlant;
    const params = new URLSearchParams();
    params.append("id", id);
    params.append("address", address);
    params.append("phoneNumber", phoneNumber);
    params.append("email", email);
    updateDetailDyePlantRequest(params);
  };

  render() {
    const {
      classes,
      modalActions,
      detailDyePlant,
      invalid,
      submitting,
      handleSubmit,
    } = this.props;
    const { hideModal } = modalActions;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="address"
              label="Địa chỉ"
              className={classes.textField}
              margin="normal"
              required
              name="address"
              component={AppTextField}
              value={detailDyePlant.address}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="phoneNumber"
              label="Điện thoại"
              required
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="phoneNumber"
              component={AppTextField}
              value={detailDyePlant.phoneNumber}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="email"
              label="Email"
              required
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="email"
              component={AppTextField}
              value={detailDyePlant.email}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>
                  Hủy Bỏ
                </Button>
              </Box>
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
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  detailDyePlant: state.dyeplant.detailDyePlant,
  initialValues: state.dyeplant.detailDyePlant,
});

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch),
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

DyePlantForm.propTypes = {
  classes: PropTypes.object,
  detailDyePlant: PropTypes.object,
  initialValues: PropTypes.object,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
  dyePlantAction: PropTypes.shape({
    updateDetailDyePlantRequest: PropTypes.func,
  }),
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

const withReduxForm = reduxForm({
  form: "DYE_PLANT_FORM",
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(DyePlantForm);
