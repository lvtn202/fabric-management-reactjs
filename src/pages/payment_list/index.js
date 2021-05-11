import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import * as paymentActions from "../../actions/payment";
import { currencyFormat, parseTimestamp } from "./../../commons/utils";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
class PaymentCreation extends React.Component {
  componentDidMount() {
    const { paymentActions } = this.props;
    const { getListPaymentRequest } = paymentActions;
    getListPaymentRequest();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách hóa đơn thanh toán
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes, listPayment, loading } = this.props;
    return (
      <React.Fragment>
        {!listPayment.length && !loading ? (
          <Typography variant="h5" gutterBottom className={classes.notFound}>
            Không tìm thấy xưởng nào
          </Typography>
        ) : (
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table
              stickyHeader
              className={classes.table}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Mã</TableCell>
                  <TableCell align="center">Tên xưởng</TableCell>
                  <TableCell align="center">Tổng tiền&nbsp;(VNĐ)</TableCell>
                  <TableCell align="center">Phương thức thanh toán</TableCell>
                  <TableCell align="center">Ngân hàng</TableCell>
                  <TableCell align="center">Ngày tạo</TableCell>
                  <TableCell align="center">Nhân viên tạo</TableCell>
                  <TableCell align="center">Nhân viên nhận</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listPayment.map((row) => (
                  <TableRow key={row.paymentId} hover>
                    <TableCell align="center">{row.paymentId}</TableCell>
                    <TableCell align="center">{row.dyehouseName}</TableCell>
                    <TableCell align="center">
                      {currencyFormat(row.money)}
                    </TableCell>
                    <TableCell align="center">{row.paymentMethod}</TableCell>
                    <TableCell align="center">{row.bankName ?? ""}</TableCell>
                    <TableCell align="center">
                      {parseTimestamp(row.createDate)}
                    </TableCell>
                    <TableCell align="center">{`${row.userFirstName ?? ""} ${
                      row.userLastName
                    }`}</TableCell>
                    <TableCell align="center">{row.recipientName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  listPayment: state.payment.listPayment,
  loading: state.common.loading,
});

const mapDispatchToProps = (dispatch) => ({
  paymentActions: bindActionCreators(paymentActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

PaymentCreation.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool,
  paymentActions: PropTypes.shape({
    getListPaymentRequest: PropTypes.func,
  }),
  listPayment: PropTypes.array,
};

export default compose(withConnect, withStyles(styles))(PaymentCreation);
