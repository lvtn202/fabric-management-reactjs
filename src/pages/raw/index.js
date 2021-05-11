import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import * as rawActions from "../../actions/raw";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class Raw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  componentDidMount() {
    const { rawActions } = this.props;
    const {
      getListRawRequest,
      getListRawAllPlantsRequest,
      getListFabricTypeRequest,
    } = rawActions;
    getListRawRequest();
    getListRawAllPlantsRequest();
    getListFabricTypeRequest();
  }

  render() {
    const { classes } = this.props;
    const handleChange = (event, newValue) => {
      this.setState({ tabIndex: newValue });
    };
    return (
      <Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách vải mộc
        </Typography>
        <Divider className={classes.divider} />
        <Paper className={classes.tabs}>
          <Tabs
            value={this.state.tabIndex}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Kho" />
            <Tab label="Xưởng" />
          </Tabs>
        </Paper>
        {this.state.tabIndex === 0
          ? this.renderRawStock()
          : this.renderRawAllPlant()}
      </Fragment>
    );
  }
  renderRawStock = () => {
    const { classes, listRaw } = this.props;
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Mã loại vải</TableCell>
              <TableCell align="center">Số cây</TableCell>
              <TableCell align="center">Độ dài&nbsp;(m) </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listRaw.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell align="center">{row.fabricType}</TableCell>
                <TableCell align="center">{row.rawNumber}</TableCell>
                <TableCell align="center">{row.rawLength}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  renderRawAllPlant() {
    const { classes, listFabricType, listRawAllPlant, history } = this.props;
    return (
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Xưởng</TableCell>
              {listFabricType.map((row) => (
                <TableCell align="center">{row.type}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {listRawAllPlant.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={() =>
                  history.push(`/dye-plant/${row.dyehouseId}/raw`)
                }
              >
                <TableCell align="center">{row.dyehouseName}</TableCell>
                {row.fabricTypes.map((item) => (
                  <TableCell align="center">{item.rawLength}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  listRaw: state.raw.listRaw,
  listRawAllPlant: state.raw.listRawAllPlant,
  listFabricType: state.raw.listFabricType,
});

const mapDispatchToProps = (dispatch) => ({
  rawActions: bindActionCreators(rawActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Raw.propTypes = {
  classes: PropTypes.object,
  listRaw: PropTypes.array,
  listRawAllPlant: PropTypes.array,
  listFabricType: PropTypes.array,
  rawActions: PropTypes.shape({
    getListRawRequest: PropTypes.func,
    getListRawAllPlantsRequest: PropTypes.func,
    getListFabricTypeRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(Raw);
