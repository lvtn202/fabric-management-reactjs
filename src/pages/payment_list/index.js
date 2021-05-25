import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import DataGridTable from "./table";
import * as paymentActions from "../../actions/payment";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
class Payment extends React.Component {
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
    const { classes, listPayment } = this.props;
    return (
      <React.Fragment>
        <div className={classes.tableContainer}>
          <DataGridTable data={listPayment} />
        </div>
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

Payment.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool,
  paymentActions: PropTypes.shape({
    getListPaymentRequest: PropTypes.func,
  }),
  listPayment: PropTypes.array,
};

export default compose(withConnect, withStyles(styles))(Payment);
