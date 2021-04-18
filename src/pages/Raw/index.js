import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import * as rawActions from "../../actions/raw";
import {
  Paper,
  Tabs,
  Tab,
  Typography,
  Divider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

class Raw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  componentDidMount() {
    const { rawActions } = this.props;
    const { getListRawRequest } = rawActions;
    getListRawRequest();
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
        <Table className={classes.table} aria-label="simple table">
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
    const { classes } = this.props;
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  listRaw: state.raw.listRaw,
});

const mapDispatchToProps = (dispatch) => ({
  rawActions: bindActionCreators(rawActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Raw.propTypes = {
  classes: PropTypes.object,
  listRaw: PropTypes.array,
};

export default compose(withConnect, withStyles(styles))(Raw);
