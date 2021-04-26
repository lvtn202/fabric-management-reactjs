import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import AppSelectField from "../../components/form_helper/select_field";
import AppTextField from "../../components/form_helper/text_field";
import { parseTimestamp } from "../../commons/utils";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import { LIST_FABRIC_FORM } from "./../../constants/form_name";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

class ListFabricForm extends React.Component {
  constructor(props) {
    super(props);
    this.createDate = new Date().getTime();
  }

  submitForm = () => {};

  render() {
    const { classes, handleSubmit, formValues } = this.props;
    return (
      <React.Fragment>
        <form className={classes.root} onSubmit={handleSubmit(this.submitForm)}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Xưởng nhuộm:</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">Thanhf Hoaf</Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Loại vải:</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">Thanhf Hoaf</Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Màu:</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">Thanhf Hoaf</Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Đơn giá:</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">Thanhf Hoaf</Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Tài xế giao hàng:</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="driver"
                label="Tài xế"
                id="driver"
                component={AppTextField}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Mã cây vải</Box>
            </Grid>
            <Grid item xs>
              <Autocomplete
                id="rawId"
                name="rawId"
                clearOnBlur={true}
                onChange={(event, newValue) => {
                  this.setState({ currentRaw: newValue });
                }}
                // options={listRawExport.filter(
                //   (x) => !currentListRaws.includes(x)
                // )}
                style={{ width: "80%" }}
                getOptionLabel={(option) => option.id.toString()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Mã cây vải"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Độ dài thành phẩm:</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="driver"
                label="Độ dài thành phẩm"
                id="driver"
                component={AppTextField}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} justify="center">
            <Box m={1}>
              <Button variant="contained" color="primary" onClick={this.add}>
                Thêm
              </Button>
            </Box>
          </Grid>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: LIST_FABRIC_FORM,
});

ListFabricForm.propTypes = {
  classes: PropTypes.object,
};

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(ListFabricForm);
