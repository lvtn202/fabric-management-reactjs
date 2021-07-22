import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import * as rawActions from "../../actions/raw";
import * as dyeplantActions from "../../actions/dye_plant";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { numberFormat } from "../../commons/utils";

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
    const { rawActions, dyeplantActions, match } = this.props;
    const { startDate, endDate } = this.state;
    const { getDetailDyePlantRequest } = dyeplantActions;
    const { getListRawRequest, getListFabricRequest } = rawActions;
    const id = match.params.id;
    getDetailDyePlantRequest(id);
    getListRawRequest(id);
    getListFabricRequest(id, startDate, endDate);
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
              {!listRaw.length && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Không tìm thấy thông tin
                  </TableCell>
                </TableRow>
              )}
              {listRaw.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell align="center">{row.fabricType}</TableCell>
                  <TableCell align="center">{numberFormat(row.rawNumber, 0)}</TableCell>
                  <TableCell align="center">{numberFormat(row.rawLength)}</TableCell>
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
              {!listFabric.length && (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Không tìm thấy thông tin
                  </TableCell>
                </TableRow>
              )}
              {listFabric.map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell align="center">{row.fabricType}</TableCell>
                  <TableCell align="center">{numberFormat(row.doneNumber, 0)}</TableCell>
                  <TableCell align="center">{numberFormat(row.doneLength)}</TableCell>
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
  dyeplantActions: bindActionCreators(dyeplantActions, dispatch),
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
  dyeplantActions: PropTypes.shape({
    getDetailDyePlantRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(DyePlantRaw);
