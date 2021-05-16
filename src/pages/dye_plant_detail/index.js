import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { statusDescription } from "../../constants/order_status_type";
import { parseTimestamp, currencyFormat } from "../../commons/utils";
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
import DyePlantForm from "./dye_plant_form";
import * as dyePlantAction from "../../actions/dye_plant";
import * as orderAction from "../../actions/order";
import * as modalActions from "../../actions/modal";
import { PAYMENT_CREATION, ORDER_CREATION } from "./../../constants/path";

class DyePlantDetail extends React.Component {
  componentDidMount() {
    var { match } = this.props;
    const { dyePlantAction } = this.props;
    const { getDetailDyePlantRequest } = dyePlantAction;
    const { orderAction } = this.props;
    const { getListOrderRequest } = orderAction;
    if (match) {
      var id = match.params.id;
      getDetailDyePlantRequest(id);
      getListOrderRequest(id);
    }
  }

  openModal = () => {
    const { modalActions } = this.props;
    const { showModal, changeModalContent, changeModalTitle } = modalActions;
    showModal();
    changeModalTitle("Chỉnh sửa thông tin");
    changeModalContent(<DyePlantForm />);
  };

  render() {
    const { classes, detailDyePlant } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          {detailDyePlant.name ?? ""}
        </Typography>

        <Divider />

        {this.renderInfo()}

        {this.renderButton()}

        <Divider className={classes.divider} />

        <Typography className={classes.typography} variant="h6" gutterBottom>
          {`Danh sách đơn đặt hàng`}
        </Typography>

        {this.renderTable()}
      </React.Fragment>
    );
  }

  renderInfo = () => {
    const { detailDyePlant, classes } = this.props;
    return (
      <div>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Địa chỉ:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailDyePlant.address ?? ""}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Điện thoại:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailDyePlant.phoneNumber ?? ""}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Email:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailDyePlant.email ?? ""}
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Công nợ:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {currencyFormat(detailDyePlant.debt ?? "")}
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  };

  renderButton = () => {
    const { classes, history, detailDyePlant } = this.props;
    return (
      <div>
        <Grid container className={classes.grid}>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.openModal}
            >
              Chỉnh sửa thông tin
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(ORDER_CREATION)}
            >
              Tạo đơn đặt hàng
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push(PAYMENT_CREATION)}
            >
              Tạo thanh toán
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                history.push(`/dye-plant/${detailDyePlant.id}/raw`)
              }
            >
              Danh sách hàng tồn
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  };

  renderTable = () => {
    const { classes, listOrder, history } = this.props;
    const handleClick = (event, id) => {
      history.push(`/order/detail/${id}`);
    };
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã đơn</TableCell>
              <TableCell align="center">Ngày đặt</TableCell>
              <TableCell align="center">Loại vải</TableCell>
              <TableCell align="center">Màu</TableCell>
              <TableCell align="center">Độ dài đặt hàng&nbsp;(m) </TableCell>
              <TableCell align="center">Đã nhận</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listOrder.map((row) => (
              <TableRow
                key={row.id}
                onClick={(event) => handleClick(event, row.id)}
                hover
              >
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {parseTimestamp(row.createDate)}
                </TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.color}</TableCell>
                <TableCell align="center">{row.orderLength}</TableCell>
                <TableCell align="center">{row.doneLength}</TableCell>
                <TableCell align="center">
                  {statusDescription(row.status)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
}

const mapStateToProps = (state) => ({
  detailDyePlant: state.dyeplant.detailDyePlant,
  listOrder: state.order.listOrder,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
  orderAction: bindActionCreators(orderAction, dispatch),
  modalActions: bindActionCreators(modalActions, dispatch),
});

DyePlantDetail.propTypes = {
  classes: PropTypes.object,
  dyePlantAction: PropTypes.shape({
    getDetailDyePlantRequest: PropTypes.func,
  }),
  detailDyePlant: PropTypes.object,
  orderAction: PropTypes.shape({
    getListOrderRequest: PropTypes.func,
  }),
  listOrder: PropTypes.array,
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    changeModalTitle: PropTypes.func,
    changeModalContent: PropTypes.func,
  }),
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(DyePlantDetail);
