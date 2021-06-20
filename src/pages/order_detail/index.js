import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { parseTimestamp } from "../../commons/utils";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as importAction from "../../actions/import";
import * as orderAction from "../../actions/order";
import { statusDescription } from "../../constants/order_status_type";

class OrderDetail extends React.Component {
  componentDidMount() {
    var { match } = this.props;
    const { orderAction, importAction } = this.props;
    const { getDetailOrderRequest } = orderAction;
    const { getListImportRequest } = importAction;

    if (match) {
      var id = match.params.id;
      getDetailOrderRequest(id);
      getListImportRequest(id);
    }
  }

  onCompleteOrder = () => {
    const { orderAction, match } = this.props;
    const { completeOrderRequest } = orderAction;
    var id = match.params.id;
    let body = JSON.stringify({
      orderId: id,
    });
    completeOrderRequest(body, () => {});
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5">Đơn đặt hàng</Typography>
        <Divider />
        {this.renderInfo()}
        <Divider className={classes.divider} />
        <Typography className={classes.typography} variant="h6" gutterBottom>
          {`Danh sách hàng đã nhập`}
        </Typography>
        {this.renderTable()}
      </React.Fragment>
    );
  }

  renderInfo = () => {
    const { detailOrder, classes } = this.props;
    return (
      <div>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Xưởng nhuộm:</Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontWeight="normal" ml={1}>
              {detailOrder.dyehouseName ?? ""}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Trạng thái:</Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontWeight="normal" ml={1}>
              {statusDescription(detailOrder.status ?? "")}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Loại vải:</Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontWeight="normal" ml={1}>
              {detailOrder.fabricType ?? ""}
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box fontWeight="normal" ml={1}>
              <Tooltip title="Hoàn thành đơn đặt hàng này">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.onCompleteOrder}
                >
                  Hoàn thành đơn hàng
                </Button>
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Màu:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailOrder.color ?? ""}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Số lượng đặt:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {`${detailOrder.orderLength ?? ""} (m)`}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Ngày tạo:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailOrder.createDate
                ? parseTimestamp(detailOrder.createDate)
                : ""}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Nhân viên tạo:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailOrder.employee ?? ""}
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  };

  renderTable = () => {
    const { classes, listImport, history } = this.props;
    const handleClick = (event, id) => {
      history.push(`/dye-batch/${id}`);
    };
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Phiếu nhập</TableCell>
              <TableCell align="center">Số lượng&nbsp;(m)</TableCell>
              <TableCell align="center">Ngày nhận</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!listImport.length && (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  Không tìm thấy thông tin
                </TableCell>
              </TableRow>
            )}
            {listImport.map((row) => (
              <TableRow
                key={row.id}
                onClick={(event) => handleClick(event, row.id)}
                hover
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.fabricLength}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {parseTimestamp(row.createDate)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
}

OrderDetail.propTypes = {
  classes: PropTypes.object,
  orderAction: PropTypes.shape({
    getDetailOrderRequest: PropTypes.func,
    completeOrderRequest: PropTypes.func,
  }),
  detailOrder: PropTypes.object,
  importAction: PropTypes.shape({
    getListImportRequest: PropTypes.func,
  }),
  listImport: PropTypes.array,
};

const mapStateToProps = (state) => ({
  detailOrder: state.order.detailOrder,
  listImport: state.importSlip.listImport,
});

const mapDispatchToProps = (dispatch) => ({
  importAction: bindActionCreators(importAction, dispatch),
  orderAction: bindActionCreators(orderAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(OrderDetail);
