import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { parseTimestamp } from "../../commons/utils";

import {
  Divider,
  Typography,
  Paper,
  TableContainer,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";
import * as importAction from "../../actions/import";
import * as orderAction from "../../actions/order";

const mapStateToProps = (state) => ({
  detailOrder: state.order.detailOrder,
  listImport: state.importSlip.listImport,
});

const mapDispatchToProps = (dispatch) => ({
  importAction: bindActionCreators(importAction, dispatch),
  orderAction: bindActionCreators(orderAction, dispatch),
});

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

  render() {
    const { classes, detailOrder, listImport, history } = this.props;
    const handleClick = (event, id) => {
      // history.push(`/order/${id}`);
    };
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Đơn đặt hàng
        </Typography>
        <Divider />
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Xưởng nhuộm: ${detailOrder.dyehouseName ?? ""}`}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Loại vải: ${detailOrder.fabricType ?? ""}`}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Màu: ${detailOrder.color ?? ""}`}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Số lượng đặt: ${detailOrder.orderLength ?? ""} (m)`}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {/* {`Ngày tạo: ${detailOrder.createDate ? parseTimestamp(detailOrder.createDate) : ""}`} */}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Nhân viên tạo: ${detailOrder.employee ?? ""}`}
        </Typography>
        <Divider />
        <Typography className={classes.typography} variant="h6" gutterBottom>
          {`Danh sách hàng đã nhập`}
        </Typography>

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
              {listImport.map((row) => (
                <TableRow
                  key={row.id}
                  // onClick={(event) => handleClick(event, row.id)}
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
      </React.Fragment>
    );
  }
}

OrderDetail.propTypes = {
  classes: PropTypes.object,
  orderAction: PropTypes.shape({
    getDetailOrderRequest: PropTypes.func,
  }),
  detailOrder: PropTypes.object,
  importAction: PropTypes.shape({
    getListImportRequest: PropTypes.func,
  }),
  listImport: PropTypes.array,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(OrderDetail);
