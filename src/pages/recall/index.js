import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import * as recallActions from "../../actions/recall";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { currencyFormat, parseTimestamp } from "../../commons/utils";

class RecallList extends React.Component {
  componentDidMount() {
    const { recallActions } = this.props;
    const { getListRecallRequest } = recallActions;
    getListRecallRequest();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách phiếu hàng trả
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    return (
      <React.Fragment>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Button variant="contained" color="primary">
            Tạo mới
          </Button>
        </Box>
        {this.renderTable()}
      </React.Fragment>
    );
  }

  renderTable() {
    const { classes, history, loading, listRecall } = this.props;

    const handleClick = (_event, id) => {
      history.push(`/recall/${id}`);
    };

    return (
      <React.Fragment>
        {!listRecall.length && !loading ? (
          <Typography variant="h5" gutterBottom className={classes.notFound}>
            Không tìm thấy phiếu nào
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
                  <TableCell align="center">Mã phiếu</TableCell>
                  <TableCell align="center">Tên xưởng</TableCell>
                  <TableCell align="center">Tổng tiền&nbsp;(VNĐ)</TableCell>
                  <TableCell align="center">Ngày tạo</TableCell>
                  <TableCell align="center">Nhân viên tạo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listRecall.map((row) => (
                  <TableRow
                    key={row.id}
                    onClick={(event) => handleClick(event, row.id)}
                    hover
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.dyehouseName}</TableCell>
                    <TableCell align="center">
                      {currencyFormat(row.money)}
                    </TableCell>
                    <TableCell align="center">{parseTimestamp(row.returnDate)}</TableCell>
                    <TableCell align="center">{`${row.firstName ?? ""} ${row.lastName}`}</TableCell>
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
  loading: state.common.loading,
  listRecall: state.recall.listRecall,
});

const mapDispatchToProps = (dispatch) => ({
  recallActions: bindActionCreators(recallActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

RecallList.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.object,
  listRecall: PropTypes.array,
  recallActions: PropTypes.shape({
    getListRecallRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(RecallList);
