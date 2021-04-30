import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import * as dyeBatchAction from "../../actions/dye_batch";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { currencyFormat, parseTimestamp } from "../../commons/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

class DyeBatchDetail extends React.Component {
  componentDidMount() {
    var { match } = this.props;
    const { dyeBatchAction } = this.props;
    const {
      getDetailDyeBatchRequest,
      getListFabricDyeBatchRequest,
    } = dyeBatchAction;
    if (match) {
      var id = match.params.id;
      getDetailDyeBatchRequest(id);
      getListFabricDyeBatchRequest(id);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Chi tiết phiếu nhập
        </Typography>
        <Divider />
        {this.renderInfo()}
        <Divider className={classes.divider} />
        <Typography variant="h6" gutterBottom>
          {`Danh sách cây vải`}
        </Typography>
        {this.renderTable()}
      </React.Fragment>
    );
  }

  renderInfo() {
    const { classes, detailDyeBatch } = this.props;
    return (
      <React.Fragment className={classes.grid}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Box display="flex" mt={2}>
              <Box fontWeight="fontWeightMedium">Xưởng nhuộm:</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" mt={2}>
              <Box fontWeight="normal" ml={1}>
                {detailDyeBatch.dyehouseName ?? ""}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" mt={2}>
              <Box fontWeight="fontWeightMedium">Ngày nhập:</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontWeight="normal" mt={2}>
              <Box>{parseTimestamp(detailDyeBatch.dyeDate) ?? ""}</Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" mt={2}>
              <Box fontWeight="fontWeightMedium">Lô nhuộm:</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" mt={2}>
              <Box fontWeight="normal" ml={1}>
                {detailDyeBatch.dyeBatchId ?? ""}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" mt={2}>
              <Box fontWeight="fontWeightMedium">Nhân viên:</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontWeight="normal" mt={2}>
              <Box>{detailDyeBatch.lastName}</Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" mt={2}>
              <Box fontWeight="fontWeightMedium">Loại vải:</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" mt={2}>
              <Box fontWeight="normal" ml={1}>
                {detailDyeBatch.fabricType ?? ""}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" mt={2}>
              <Box fontWeight="fontWeightMedium">Tài xế:</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontWeight="normal" mt={2}>
              <Box>{detailDyeBatch.driver}</Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" mt={2}>
              <Box fontWeight="fontWeightMedium">Đơn giá:</Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box fontWeight="normal" mt={2}>
              <Box>{currencyFormat(detailDyeBatch.price)}</Box>
            </Box>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  renderTable() {
    const { classes, listFabricDyeBatch } = this.props;
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã cây vải</TableCell>
              <TableCell align="center">Độ dài mộc</TableCell>
              <TableCell align="center">Độ dài thành phẩm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listFabricDyeBatch.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {parseTimestamp(row.rawLength)}
                </TableCell>
                <TableCell align="center">{row.finishedLength}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  detailDyeBatch: state.dyebatch.detailDyeBatch,
  listFabricDyeBatch: state.dyebatch.listFabricDyeBatch,
});

const mapDispatchToProps = (dispatch) => ({
  dyeBatchAction: bindActionCreators(dyeBatchAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

DyeBatchDetail.propTypes = {
  classes: PropTypes.object,
};

export default compose(withConnect, withStyles(styles))(DyeBatchDetail);
