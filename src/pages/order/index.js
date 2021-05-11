import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { parseTimestamp } from "../../commons/utils";
import { statusDescription } from "../../constants/order_status_type";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as orderAction from "../../actions/order";
import SearchIcon from "@material-ui/icons/Search";

const mapStateToProps = (state) => ({
  detailDyePlant: state.dyeplant.detailDyePlant,
  listOrder: state.order.listOrder,
});

const mapDispatchToProps = (dispatch) => ({
  orderAction: bindActionCreators(orderAction, dispatch),
});

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  componentDidMount() {
    const { orderAction } = this.props;
    const { getListOrderRequest } = orderAction;
    getListOrderRequest(-1);
  }

  render() {
    const { classes, listOrder, history } = this.props;

    const handleClick = (event, id) => {
      history.push(`/order/detail/${id}`);
    };

    const handleSearch = (ev) => {
      ev.preventDefault();
      this.props.orderAction.getListOrderRequest(this.state.keyword);
    };

    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách đơn đặt hàng
        </Typography>
        <Divider className={classes.divider} />
        <Paper
          component="form"
          className={classes.root}
          onSubmit={handleSearch}
        >
          <InputBase
            className={classes.input}
            placeholder="Tìm tên xưởng, loại vải"
            inputProps={{ "aria-label": "search order" }}
            onChange={(ev) => this.setState({ keyword: ev.target.value })}
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
          <Table stickyHeader className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Mã đơn</TableCell>
                <TableCell align="center">Xưởng</TableCell>
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
                  <TableCell align="center">{row.dyehouse}</TableCell>
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

Order.propTypes = {
  classes: PropTypes.object,
  orderAction: PropTypes.shape({
    getListOrderRequest: PropTypes.func,
  }),
  listOrder: PropTypes.array,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(Order);
