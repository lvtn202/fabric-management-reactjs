import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import * as recallActions from "../../actions/recall";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { currencyFormat, parseTimestamp } from "../../commons/utils";

class RecallList extends React.Component {
  componentDidMount() {
    const { recallActions, match } = this.props;
    const {
      getListFabricRecallRequest,
      getDetailRecallRequest,
    } = recallActions;
    if (match) {
      var id = match.params.id;
      getListFabricRecallRequest(id);
      getDetailRecallRequest(id);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Phiếu hàng trả
        </Typography>
        <Divider />
        {this.renderPage()}
        <Divider className={classes.divider} />
        <Typography variant="h6" gutterBottom>
          {`Danh sách cây vải`}
        </Typography>
        {this.renderTable()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes, detailRecall } = this.props;
    return (
      <React.Fragment>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Xưởng nhuộm:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailRecall.dyehouseName ?? ""}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Ngày tạo:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {parseTimestamp(detailRecall.returnDate) ?? ""}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Nhân viên tạo:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {`${detailRecall.firstName ?? ""} ${detailRecall.lastName ?? ""}`}
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box fontWeight="fontWeightMedium">Nhân viên nhận:</Box>
          </Grid>
          <Grid item xs={10}>
            <Box fontWeight="normal" ml={1}>
              {detailRecall.receivedName ?? ""}
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  renderTable() {
    const { classes, listFabricRecall } = this.props;
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã cây vải</TableCell>
              <TableCell align="center">Màu</TableCell>
              <TableCell align="center">Loại vải</TableCell>
              <TableCell align="center">Độ dài thành phẩm&nbsp;(m)</TableCell>
              <TableCell align="center">Độ dài trả&nbsp;(m)</TableCell>
              <TableCell align="center">Thành tiền&nbsp;(VND)</TableCell>
              <TableCell align="center">Lỗi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listFabricRecall.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell align="center">{row.returnId}</TableCell>
                <TableCell align="center">{row.color}</TableCell>
                <TableCell align="center">{row.fabricType}</TableCell>
                <TableCell align="center">{row.doneLength}</TableCell>
                <TableCell align="center">{row.returnLength}</TableCell>
                <TableCell align="center">
                  {currencyFormat(row.money)}
                </TableCell>
                <TableCell align="center">{row.returnReason}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell rowSpan={3} />
              <TableCell rowSpan={3} />
              <TableCell rowSpan={3} />
              <TableCell rowSpan={3} />
              <TableCell align="center">Tổng cây vải</TableCell>
              <TableCell align="center">{listFabricRecall.length}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Tổng trả</TableCell>
              <TableCell align="center">
                {listFabricRecall.reduce(
                  (total, current, index) => total + Number(current.returnLength),
                  0
                )}
                &nbsp;(m)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">Thành tiền</TableCell>
              <TableCell align="center">
                {currencyFormat(
                  listFabricRecall.reduce(
                    (total, current, index) => total + Number(current.money),
                    0
                  )
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  detailRecall: state.recall.detailRecall,
  listFabricRecall: state.recall.listFabricRecall,
});

const mapDispatchToProps = (dispatch) => ({
  recallActions: bindActionCreators(recallActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

RecallList.propTypes = {
  classes: PropTypes.object,
  detailRecall: PropTypes.object,
  listFabricRecall: PropTypes.array,
};

export default compose(withConnect, withStyles(styles))(RecallList);
