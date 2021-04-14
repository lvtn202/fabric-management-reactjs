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

class DyePlantForm extends React.Component {
  render() {
    const { classes, modalActions } = this.props;
    const { hideModal } = modalActions;
    return (
      <form>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="address"
              label="Địa chỉ"
              className={classes.textField}
              margin="normal"
              name="address"
              component={AppTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="phoneNumber"
              label="Điện thoại"
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
              multiline
              rowsMax="4"
              className={classes.textField}
              margin="normal"
              name="email"
              component={AppTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" onClick={hideModal}>Hủy Bỏ</Button>
              </Box>
              <Button variant="contained" color="primary" type="submit">
                Lưu Lại
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    modalActions: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

DyePlantForm.propTypes = {
  classes: PropTypes.object,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: "DYE_PLANT_FORM",
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm
)(DyePlantForm);
