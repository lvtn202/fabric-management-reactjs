import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import * as dyeBatchAction from "../../actions/dye_batch";
import { parseTimestamp } from "./../../commons/utils";

class DyeBatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  componentDidMount() {
    const { dyeBatchAction } = this.props;
    const { getListDyeBatchRequest } = dyeBatchAction;
    getListDyeBatchRequest();
  }

  render() {
    const { classes, listDyeBatch, loading } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách lô nhuộm (Phiếu nhập)
        </Typography>
        <Divider />
        {!listDyeBatch.length && !loading ? (
          <Typography variant="h5" gutterBottom className={classes.notFound}>
            Không tìm thấy phiếu nào
          </Typography>
        ) : (
          this.renderTable()
        )}
      </React.Fragment>
    );
  }

  renderTable() {
    const { classes, listDyeBatch, history } = this.props;
    const handleClick = (event, id) => {
      // history.push(`/dye-batch/${id}`);
    };
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã lô nhuộm</TableCell>
              <TableCell align="center">Tên xưởng</TableCell>
              <TableCell align="center">Ngày nhuộm</TableCell>
              <TableCell align="center">Tổng thành phẩm&nbsp;(m)</TableCell>
              <TableCell align="center">Loại vải</TableCell>
              <TableCell align="center">Màu</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listDyeBatch.map((row) => (
              <TableRow
                key={row.id}
                onClick={(event) => handleClick(event, row.id)}
                hover
              >
                <TableCell align="center" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.dyehouseName}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {parseTimestamp(row.dyeDate)}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.fabricLength}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.fabricType}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.color}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  listDyeBatch: state.dyebatch.listDyeBatch,
  loading: state.common.loading,
});

const mapDispatchToProps = (dispatch) => ({
  dyeBatchAction: bindActionCreators(dyeBatchAction, dispatch),
});

DyeBatch.propTypes = {
  classes: PropTypes.object,
  dyeBatchAction: PropTypes.shape({
    getListDyeBatchRequest: PropTypes.func,
  }),
  listDyeBatch: PropTypes.array,
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(DyeBatch);
