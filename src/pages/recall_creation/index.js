import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import validate from "./validate";
import { Alert } from "./../../constants/action_types";
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
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AppTextField from "../../components/form_helper/text_field";
import { currencyFormat, numberFormat } from "../../commons/utils";
import DeleteIcon from "@material-ui/icons/Delete";
import { RECALL } from "./../../constants/path";

class RecallCreation extends React.Component {
  constructor(props) {
    super(props);
    this.createDate = new Date().getTime();
    this.state = {
      currentFabric: {},
      currentListFabrics: [],
      currentListRecalls: [],
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
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          T???o phi???u h??ng tr???
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
      listFabricOfDyeplant,
    } = this.props;
    const { currentListFabrics, currentFabric, currentListRecalls } =
      this.state;
    const { getListFabricDyeplantRequest } = recallActions;
    return (
      <React.Fragment>
        <form
          className={classes.root}
          onSubmit={handleSubmit(this.handleSubmitForm)}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Nh??n vi??n nh???n</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="receivedName"
                label="Nh??n vi??n nh???n"
                id="receivedName"
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
                name="dyehouseId"
                component={AppSelectField}
                label="Ch???n x?????ng nhu???m"
                onChange={(ev) => {
                  getListFabricDyeplantRequest(ev.target.value);
                }}
              >
                {!listDyePlant.length && (
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                )}
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
              <Box fontWeight="fontWeightMedium">M?? c??y v???i</Box>
            </Grid>
            <Grid item xs>
              <Autocomplete
                id="fabricId"
                name="fabricId"
                clearOnBlur={true}
                onChange={(event, newValue) => {
                  this.setState({ currentFabric: newValue });
                }}
                getOptionDisabled={(option) =>
                  currentListFabrics.includes(option)
                }
                options={listFabricOfDyeplant}
                style={{ width: "80%" }}
                getOptionLabel={(option) => option.id.toString()}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="M?? c??y v???i"
                    variant="outlined"
                  />
                )}
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
              <Box fontWeight="fontWeightMedium">M??u</Box>
            </Grid>
            <Grid item xs={2}>
              <Box fontWeight="normal">
                {currentFabric?.colorName ?? "None"}
              </Box>
            </Grid>

            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">????? d??i th??nh ph???m</Box>
            </Grid>
            <Grid item xs={2}>
              <Box fontWeight="normal">
                {numberFormat(currentFabric?.finishedLength ?? "0")}
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">????n gi??</Box>
            </Grid>
            <Grid item xs={2}>
              <Box fontWeight="normal">
                {currencyFormat(currentFabric?.price ?? "")}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">????? d??i tr???&nbsp;(m)</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="returnLength"
                label="????? d??i"
                id="returnLength"
                type="number"
                component={AppTextField}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">M?? t??? l???i</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                multiline
                rows={4}
                className={classes.selectField}
                name="returnReason"
                label="M?? t??? l???i"
                id="returnReason"
                component={AppTextField}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center">
            <Box m={1}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.add}
                disabled={
                  submitting ||
                  invalid ||
                  !currentFabric ||
                  currentFabric === undefined
                }
              >
                Th??m
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
                    <TableCell align="center">M?? c??y v???i</TableCell>
                    <TableCell align="center">M??u</TableCell>
                    <TableCell align="center">
                      ????? d??i th??nh ph???m&nbsp;(m)
                    </TableCell>
                    <TableCell align="center">????? d??i tr???&nbsp;(m)</TableCell>
                    <TableCell align="center">Th??nh ti???n</TableCell>
                    <TableCell align="center">L???i</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!currentListRecalls.length && (
                    <TableRow>
                      <TableCell colSpan={7} align="center">
                        Kh??ng t??m th???y th??ng tin
                      </TableCell>
                    </TableRow>
                  )}
                  {currentListRecalls.map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell align="center" component="th" scope="row">
                        {row.fabricId}
                      </TableCell>
                      <TableCell align="center">{row.colorName}</TableCell>
                      <TableCell align="center">{numberFormat(row.finishedLength)}</TableCell>
                      <TableCell align="center">{numberFormat(row.returnLength)}</TableCell>
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
                  H???y B???
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
                T???o
              </Button>
            </Box>
          </Grid>
        </form>
      </React.Fragment>
    );
  }

  add() {
    const { returnLength, returnReason } = this.props.formValues;
    const { currentFabric } = this.state;
    if (Number(returnLength) <= Number(currentFabric.finishedLength)) {
      var newRecall = {
        fabricId: currentFabric?.id,
        returnLength,
        returnReason,
        finishedLength: currentFabric?.finishedLength,
        money: Number(returnLength) * Number(currentFabric.price),
        colorName: currentFabric.colorName,
      };
      this.setState((prev) => ({
        currentListFabrics: [...prev.currentListFabrics, currentFabric],
        currentListRecalls: [...prev.currentListRecalls, newRecall],
        currentFabric: {},
      }));
    } else {
      this.props.onShowErrorMsg();
    }
  }

  remove = (item) => {
    this.setState((prev) => ({
      currentListFabrics: prev.currentListFabrics.filter(
        (x) => x.id !== item.fabricId
      ),
      currentListRecalls: prev.currentListRecalls.filter((x) => x !== item),
    }));
  };

  handleSubmitForm = (data) => {
    const { recallActions, formValues, history, userId } = this.props;
    const { dyehouseId, receivedName } = formValues;
    const { currentListRecalls } = this.state;
    const { createRecallRequest } = recallActions;
    let body = JSON.stringify({
      userId: userId,
      dyehouseId: dyehouseId,
      receivedName: receivedName,
      returnDate: new Date().getTime(),
      fabrics: currentListRecalls,
    });
    createRecallRequest(body, () => {
      history.push(RECALL);
    });
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
  onShowErrorMsg: () =>
    dispatch({
      type: Alert.SHOW_ERROR_MESSAGE,
      payload: {
        errorMsg: "????? d??i h??ng tr??? ph???i nh??? h??n ????? d??i th??nh ph???m",
      },
    }),
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
  validate,
});

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(RecallCreation);
