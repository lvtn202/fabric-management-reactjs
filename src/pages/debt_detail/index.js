import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import DataGridTable from "./table";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import * as debtActions from "../../actions/debt";
import { currencyFormat } from "../../commons/utils";

class DebtDetail extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      startDate: date.setMonth(date.getMonth() - 6),
      endDate: new Date().getTime(),
    };
  }

  componentDidMount() {
    this.getDebtDetail();
  }

  getDebtDetail = () => {
    const { debtActions, match } = this.props;
    const { startDate, endDate } = this.state;
    const id = match.params.id;
    const { getDebtDetailRequest } = debtActions;
    getDebtDetailRequest(id, startDate, endDate);
  };

  render() {
    const { classes, detailDebt, history, location } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          {`Công nợ xưởng ${
            location?.state?.detailDyePlant?.name ??
            detailDebt?.dyehouseName ??
            ""
          }`}
        </Typography>
        <Divider className={classes.divider} />

        {this.renderDatePicker()}
        {this.renderInfo()}

        <div className={classes.tableContainer}>
          <DataGridTable data={detailDebt?.transactions?.reverse() ?? []} history={history} />
        </div>
      </React.Fragment>
    );
  }

  renderInfo = () => {
    const { classes, detailDebt } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Dư nợ đầu kì:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {currencyFormat(detailDebt?.oldDebt ?? "")}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Dư nợ cuối kì:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {currencyFormat(detailDebt?.newDebt ?? "")}
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

  renderDatePicker = () => {
    const { classes } = this.props;
    const { startDate, endDate } = this.state;

    const handleChangeDate = () => {
      this.getDebtDetail();
    };

    return (
      <div className={classes.datePicker}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={3}>
            <Grid item>
              <KeyboardDatePicker
                disableToolbar
                inputVariant="outlined"
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                label="Từ ngày"
                value={startDate}
                onChange={(date) =>
                  this.setState({ startDate: date.getTime() })
                }
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                margin="normal"
                label="Đến ngày"
                value={endDate}
                onChange={(date) => this.setState({ endDate: date.getTime() })}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                className={classes.button}
                variant="contained"
                onClick={handleChangeDate}
              >
                Lọc
              </Button>
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    );
  };
}

DebtDetail.propTypes = {
  classes: PropTypes.object,
  debtActions: PropTypes.shape({
    getDebtDetailRequest: PropTypes.func,
  }),
  detailDebt: PropTypes.object,
};

const mapStateToProps = (state) => ({
  detailDebt: state.debt.detailDebt,
});

const mapDispatchToProps = (dispatch) => ({
  debtActions: bindActionCreators(debtActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(DebtDetail);
