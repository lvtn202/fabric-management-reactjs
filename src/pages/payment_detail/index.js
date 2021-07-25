import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import * as paymentActions from "../../actions/payment";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { currencyFormat, parseTimestamp } from "../../commons/utils";

class PaymentDetail extends React.Component {
  componentDidMount() {
    const { paymentActions, match } = this.props;
    const { getPaymentDetailRequest } = paymentActions;
    if (match) {
      var id = match.params.id;
      getPaymentDetailRequest(id);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Chi tiết hóa đơn thanh toán
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes, paymentDetail } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={3}>
            <Box fontWeight="fontWeightMedium">Xưởng nhuộm:</Box>
          </Grid>
          <Grid item xs={9}>
            <Box fontWeight="normal" ml={1}>
              {paymentDetail.dyehouseName ?? ""}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box fontWeight="fontWeightMedium">Ngày tạo:</Box>
          </Grid>
          <Grid item xs={9}>
            <Box fontWeight="normal" ml={1}>
              {parseTimestamp(paymentDetail.createDate) ?? ""}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box fontWeight="fontWeightMedium">Nhân viên tạo:</Box>
          </Grid>
          <Grid item xs={9}>
            <Box fontWeight="normal" ml={1}>
              {`${paymentDetail.userFirstName ?? ""} ${
                paymentDetail.userLastName ?? ""
              }`}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box fontWeight="fontWeightMedium">Nhân viên nhận:</Box>
          </Grid>
          <Grid item xs={9}>
            <Box fontWeight="normal" ml={1}>
              {paymentDetail.recipientName ?? ""}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box fontWeight="fontWeightMedium">Số tiền:</Box>
          </Grid>
          <Grid item xs={9}>
            <Box fontWeight="normal" ml={1}>
              {currencyFormat(paymentDetail.money ?? "")}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box fontWeight="fontWeightMedium">Phương thức thanh toán:</Box>
          </Grid>
          <Grid item xs={9}>
            <Box fontWeight="normal" ml={1}>
              {paymentDetail.paymentMethod ?? ""}
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box fontWeight="fontWeightMedium">Ngân hàng:</Box>
          </Grid>
          <Grid item xs={9}>
            <Box fontWeight="normal" ml={1}>
              {paymentDetail.bankName ?? "N/A"}
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  paymentDetail: state.payment.paymentDetail,
});

const mapDispatchToProps = (dispatch) => ({
  paymentActions: bindActionCreators(paymentActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

PaymentDetail.propTypes = {
  classes: PropTypes.object,
  paymentActions: PropTypes.shape({
    getPaymentDetailRequest: PropTypes.func,
  }),
  paymentDetail: PropTypes.object,
};

export default compose(withConnect, withStyles(styles))(PaymentDetail);
