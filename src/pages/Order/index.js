import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import {
  Divider,
  Typography,
  Paper,
  TableContainer,
  IconButton,
  InputBase,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";
import * as orderAction from "./../../actions/order";
import SearchIcon from "@material-ui/icons/Search";

const mapStateToProps = (state) => ({
  detailDyePlant: state.dyeplant.detailDyePlant,
  listOrder: state.order.listOrder,
});

const mapDispatchToProps = (dispatch) => ({
  orderAction: bindActionCreators(orderAction, dispatch),
});

class Order extends React.Component {
  componentDidMount() {
    const { orderAction } = this.props;
    const { getListOrderRequest } = orderAction;
    getListOrderRequest(-1);
  }

  render() {
    const { classes, listOrder } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách đơn đặt hàng
        </Typography>
        <Divider />
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Tìm tên xưởng, loại vải"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
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
                  // onClick={(event) => handleClick(event, row.id)}
                  hover
                >
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center" component="th" scope="row">
                    {row.createDate}
                  </TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.color}</TableCell>
                  <TableCell align="center">{row.orderLength}</TableCell>
                  <TableCell align="center">{row.doneLength}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

Order.propTypes = {
  classes: PropTypes.object,
  orderAction: PropTypes.shape({
    getListOrderRequest: PropTypes.func,
  }),
  listOrder: PropTypes.array,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(Order);