import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import AppTextField from "../../components/form_helper/text_field";
import { currencyFormat } from "../../commons/utils";
import { bindActionCreators, compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import { LIST_FABRIC_FORM } from "./../../constants/form_name";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import * as importActions from "../../actions/import";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

class ListFabricForm extends React.Component {
  constructor(props) {
    super(props);
    this.createDate = new Date().getTime();
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.state = {
      currentListFabrics: [],
      currentFabric: {},
      driver: "",
    };
  }

  componentDidMount() {
    const { importActions, infoValues } = this.props;
    const { dyehouse, fabricType, color } = infoValues;

    const {
      getDyeingPriceRequest,
      getListExportedFabricRequest,
    } = importActions;
    getDyeingPriceRequest(fabricType, color);
    getListExportedFabricRequest(dyehouse.id, fabricType);
  }

  submitForm = () => {};

  add() {
    if (Object.keys(this.state.currentFabric).length !== 0) {
      this.setState(
        (prev) => ({
          currentListFabrics: [
            ...prev.currentListFabrics,
            this.state.currentFabric,
          ],
          currentFabric: {},
        }),
        () => this.updateFabrics()
      );
    } else {
      this.updateFabrics();
    }
  }

  remove = (item) => {
    this.setState(
      (prev) => ({
        currentListFabrics: prev.currentListFabrics.filter((x) => x !== item),
      }),
      () => this.updateFabrics()
    );
  };

  updateFabrics = () => {
    const { currentListFabrics, driver } = this.state;
    const { handleUpdateFabrics } = this.props;
    handleUpdateFabrics(driver, currentListFabrics);
  };

  render() {
    const { currentListFabrics } = this.state;
    const {
      classes,
      handleSubmit,
      infoValues,
      listExportedFabric,
      dyeingPrice,
    } = this.props;
    const { dyehouse, fabricType, color } = infoValues;

    return (
      <React.Fragment>
        <form className={classes.root} onSubmit={handleSubmit(this.submitForm)}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={2}>
              <Box fontWeight="fontWeightMedium">Xưởng nhuộm:</Box>
            </Grid>
            <Grid item xs>
              <Box fontWeight="normal">{dyehouse.name}</Box>
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
              <Box fontWeight="normal">{fabricType}</Box>
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
              <Box fontWeight="normal">{color}</Box>
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
              <Box fontWeight="normal">{currencyFormat(dyeingPrice)}</Box>
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
                onChange={(ev) => this.setState({ driver: ev.target.value })}
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
                  this.setState({ currentFabric: newValue });
                }}
                options={listExportedFabric.filter(
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
              <Box fontWeight="fontWeightMedium">Độ dài thành phẩm:</Box>
            </Grid>
            <Grid item xs>
              <Field
                required
                className={classes.selectField}
                name="length"
                label="Độ dài thành phẩm"
                type="number"
                id="length"
                onChange={(ev) =>
                  this.setState({
                    currentFabric: {
                      ...this.state.currentFabric,
                      finishedLength: ev.target.value,
                    },
                  })
                }
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
                    <TableCell align="center">Độ dài mộc&nbsp;(m)</TableCell>
                    <TableCell align="center">
                      Độ dài thành phẩm&nbsp;(m)
                    </TableCell>
                    <TableCell align="center">Độ hao hụt</TableCell>
                    <TableCell align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentListFabrics.map((row, index) => (
                    <TableRow key={index} hover>
                      <TableCell align="center" component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.rawLength}</TableCell>
                      <TableCell align="center">{row.finishedLength}</TableCell>
                      <TableCell align="center">
                        {`${(
                          (row.rawLength - row.finishedLength) /
                          row.rawLength * 100
                        ).toLocaleString(undefined, {
                          maximumFractionDigits: 2,
                        })}%`}
                      </TableCell>
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
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  fabricFormValues: getFormValues(LIST_FABRIC_FORM)(state),
  dyeingPrice: state.importSlip.dyeingPrice,
  listExportedFabric: state.importSlip.listExportedFabric,
});

const mapDispatchToProps = (dispatch) => ({
  importActions: bindActionCreators(importActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReduxForm = reduxForm({
  form: LIST_FABRIC_FORM,
});

ListFabricForm.propTypes = {
  classes: PropTypes.object,
  dyeingPrice: PropTypes.string,
  listExportedFabric: PropTypes.array,
  importActions: PropTypes.shape({
    getListExportedFabricRequest: PropTypes.func,
    getDyeingPriceRequest: PropTypes.func,
  }),
};

export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(ListFabricForm);
