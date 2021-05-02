import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import AppSelectField from "../../components/form_helper/select_field";
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as recallActions from "../../actions/recall";
import * as dyePlantAction from "../../actions/dye_plant";
import { RECALL_FORM } from "./../../constants/form_name";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {
  Button,
  Box,
  Grid,
  Paper,
  TableContainer,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
  MenuItem,
  TextField,
  IconButton,
} from "@material-ui/core";
import AppTextField from "../../components/form_helper/text_field";
import { currencyFormat } from "../../commons/utils";
import DeleteIcon from "@material-ui/icons/Delete";

class RecallCreation extends React.Component {
  constructor(props) {
    super(props);
    this.createDate = new Date().getTime();
    this.state = {
      currentFabric: "",
      currentListFabrics: [],
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    const { dyePlantAction } = this.props;
    const { getListDyePlantRequest } = dyePlantAction;
    getListDyePlantRequest();
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Tạo phiếu hàng trả
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
      listDyePlant,
      handleSubmit,
      recallActions,
      formValues,
      listFabricOfDyeplant,
    } = this.props;
    const { currentListFabrics, currentFabric } = this.state;
    const { getListFabricDyeplantRequest } = recallActions;
    return (
      <React.Fragment>
        <form
          className={classes.root}
          onSubmit={handleSubmit(this.handleSubmitForm)}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Nhân viên nhận</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="receivedName"
                label="Nhân viên nhận"
                id="receivedName"
                component={AppTextField}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Xưởng nhuộm</Box>
            </Grid>
            <Grid item xs>
              <Field
                className={classes.selectField}
                name="dyehouseId"
                component={AppSelectField}
                label="Chọn xưởng nhuộm"
                onBlur={() => {
                  getListFabricDyeplantRequest(formValues.dyehouseId);
                }}
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
              <Box fontWeight="fontWeightMedium">Mã cây vải</Box>
            </Grid>
            <Grid item xs>
              <Autocomplete
                id="fabricId"
                name="fabricId"
                clearOnBlur={true}
                onChange={(event, newValue) => {
                  this.setState({ currentFabric: newValue });
                }}
                options={listFabricOfDyeplant.filter(
                  (x) => !currentListFabrics.includes(x)
                )}
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
              <Box fontWeight="fontWeightMedium">Độ dài trả&nbsp;(m)</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="returnLength"
                label="Độ dài"
                id="returnLength"
                type="number"
                component={AppTextField}
              />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Màu</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">{currentFabric.colorName ?? ""}</Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            alignItems="center"
            className={classes.grid}
          >
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Thành tiền</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">
                {currencyFormat(currentFabric.price ?? "")}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Mô tả lỗi</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                multiline
                rows={4}
                className={classes.selectField}
                name="returnReason"
                label="Mô tả lỗi"
                id="returnReason"
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
          <Grid container spacing={3} alignItems="center" justify="center">
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table
                stickyHeader
                className={classes.table}
                aria-label="simple table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Mã cây vải</TableCell>
                    <TableCell align="center">Màu</TableCell>
                    <TableCell align="center">
                      Độ dài thành phẩm&nbsp;(m)
                    </TableCell>
                    <TableCell align="center">Độ dài trả&nbsp;(m)</TableCell>
                    <TableCell align="center">Thành tiền</TableCell>
                    <TableCell align="center">Lỗi</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentListFabrics.map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell align="center" component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.colorName}</TableCell>
                      <TableCell align="center">{row.finishedLength}</TableCell>
                      <TableCell align="center">{row.returnLength}</TableCell>
                      <TableCell align="center">
                        {currencyFormat(row.money)}
                      </TableCell>
                      <TableCell align="center">{row.returnReason}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          aria-label="delete"
                          data-item={row}
                          onClick={() => this.remove(row)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                disabled={
                  invalid ||
                  submitting ||
                  pristine ||
                  !currentListFabrics.length
                }
              >
                Tạo
              </Button>
            </Box>
          </Grid>
        </form>
      </React.Fragment>
    );
  }

  add() {
    // if (Object.keys(this.state.currentRaw).length !== 0)
    //   this.setState((prev) => ({
    //     currentListRaws: [...prev.currentListRaws, this.state.currentRaw],
    //     currentRaw: {},
    //   }));
  }

  remove = (item) => {
    // console.log(item);
    // this.setState((prev) => ({
    //   currentListRaws: prev.currentListRaws.filter((x) => x !== item),
    // }));
  };

  handleSubmitForm = (data) => {
    // const { history, exportActions, userId } = this.props;
    // const { createExportRequest } = exportActions;
    // const { dyeplantId, fabricType } = data;
    // const finalListRaw = [];
    // this.state.currentListRaws.map((item) => finalListRaw.push(item.id));
    // let body = JSON.stringify({
    //   userId: userId,
    //   dyehouseId: dyeplantId,
    //   fabricType: fabricType,
    //   createDate: new Date().getTime(),
    //   listRaw: finalListRaw,
    // });
    // createExportRequest(body, () => {
    //   history.push("/raw");
    // });
  };
}

const mapStateToProps = (state) => ({
  listDyePlant: state.dyeplant.listDyePlant,
  listFabricOfDyeplant: state.recall.listFabricOfDyeplant,
  formValues: getFormValues(RECALL_FORM)(state),
  userId: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
  recallActions: bindActionCreators(recallActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

RecallCreation.propTypes = {
  classes: PropTypes.object,
  dyePlantAction: PropTypes.shape({
    getListDyePlantRequest: PropTypes.func,
  }),
  listDyePlant: PropTypes.array,
  recallActions: PropTypes.shape({
    getListFabricDyeplantRequest: PropTypes.func,
  }),
};

const withReduxForm = reduxForm({
  form: RECALL_FORM,
});

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(RecallCreation);
