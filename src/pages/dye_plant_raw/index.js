import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import * as rawActions from "../../actions/raw";
import {
  Typography,
  Divider,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button,
  Box,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

class DyePlantRaw extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      startDate: date.setFullYear(date.getFullYear() - 1),
      endDate: new Date().getTime(),
    };
  }

  componentDidMount() {
    const { rawActions, detailDyePlant } = this.props;
    const { startDate, endDate } = this.state;
    const { getListRawRequest, getListFabricRequest } = rawActions;
    getListRawRequest(detailDyePlant.id);
    getListFabricRequest(detailDyePlant.id, startDate, endDate);
  }

  render() {
    const { classes, detailDyePlant } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          {`Thống kê vải tại xưởng ${detailDyePlant.name ?? ""}`}
        </Typography>
        <Divider />
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6}>
            {this.renderRaw()}
          </Grid>
          <Grid item xs={6}>
            {this.renderCompleted()}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  renderRaw() {
    const { classes, listRaw } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" id="tableTitle">
          Số lượng vải tồn
        </Typography>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Loại vải</TableCell>
                <TableCell align="center">Số cây</TableCell>
                <TableCell align="center">Mộc tồn&nbsp;(m) </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listRaw.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell align="center">{row.fabricType}</TableCell>
                  <TableCell align="center">{row.rawNumber}</TableCell>
                  <TableCell align="center">{row.rawLength}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }

  renderCompleted() {
    const { classes, listFabric, rawActions, detailDyePlant } = this.props;
    const { startDate, endDate } = this.state;
    const { getListFabricRequest } = rawActions;

    const handleFilter = () => {
      getListFabricRequest(detailDyePlant.id, startDate, endDate);
    };

    return (
      <React.Fragment>
        <Typography variant="h6" id="tableTitle">
          Số lượng đã làm
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              inputVariant="outlined"
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Từ ngày"
              value={startDate}
              onChange={(date) => this.setState({ startDate: date.getTime() })}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              inputVariant="outlined"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Đến ngày"
              value={endDate}
              onChange={(date) => this.setState({ endDate: date.getTime() })}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Lọc
          </Button>
        </Box>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Loại vải</TableCell>
                <TableCell align="center">Số cây</TableCell>
                <TableCell align="center">Đã làm&nbsp;(m) </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listFabric.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell align="center">{row.fabricType}</TableCell>
                  <TableCell align="center">{row.doneNumber}</TableCell>
                  <TableCell align="center">{row.doneLength}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  detailDyePlant: state.dyeplant.detailDyePlant,
  listRaw: state.raw.listRaw,
  listFabric: state.raw.listFabric,
});

const mapDispatchToProps = (dispatch) => ({
  rawActions: bindActionCreators(rawActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

DyePlantRaw.propTypes = {
  classes: PropTypes.object,
  detailDyePlant: PropTypes.object,
  listRaw: PropTypes.array,
  listFabric: PropTypes.array,
  rawActions: PropTypes.shape({
    getListRawRequest: PropTypes.func,
    getListFabricRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(DyePlantRaw);
