import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { statusDescription } from "../../constants/order_status_type";
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
import * as dyePlantAction from "../../actions/dye_plant";
import * as orderAction from "../../actions/order";

const mapStateToProps = (state) => ({
  detailDyePlant: state.dyeplant.detailDyePlant,
  listOrder: state.order.listOrder,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
  orderAction: bindActionCreators(orderAction, dispatch),
});

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

  render() {
    const { classes, detailDyePlant, listOrder, history } = this.props;
    const handleClick = (event, id) => {
      history.push(`/order/${id}`);
    };
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          {detailDyePlant.name ?? ""}
        </Typography>
        <Divider />
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Địa chỉ: ${detailDyePlant.address ?? ""}`}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Điện thoại: ${detailDyePlant.phoneNumber ?? ""}`}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Email: ${detailDyePlant.email ?? ""}`}
        </Typography>
        <Typography
          className={classes.typography}
          variant="subtitle1"
          gutterBottom
        >
          {`Công nợ: ${detailDyePlant.debt ?? ""} VNĐ`}
        </Typography>
        <Divider />
        <Typography className={classes.typography} variant="h6" gutterBottom>
          {`Danh sách đơn đặt hàng`}
        </Typography>
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
      </React.Fragment>
    );
  }
}

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
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(DyePlantDetail);
