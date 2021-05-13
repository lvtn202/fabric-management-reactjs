import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchIcon from "@material-ui/icons/Search";
import { currencyFormat } from "./../../commons/utils";
import * as dyePlantAction from "../../actions/dye_plant";

class DyePlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  componentDidMount() {
    const { dyePlantAction } = this.props;
    const { getListDyePlantRequest } = dyePlantAction;
    getListDyePlantRequest();
  }

  render() {
    const { classes, listDyePlant, history } = this.props;
    const handleClick = (event, id) => {
      history.push(`/dye-plant/${id}`);
    };
    const handleSearch = (ev) => {
      ev.preventDefault();
      this.props.dyePlantAction.getListDyePlantRequest(this.state.keyword);
    };
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách xưởng nhuộm
        </Typography>
        <Divider />
        <Paper
          component="form"
          className={classes.root}
          onSubmit={handleSearch}
        >
          <InputBase
            className={classes.input}
            placeholder="Tìm tên xưởng"
            inputProps={{ "aria-label": "search dye plant" }}
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
          <Table
            stickyHeader
            className={classes.table}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Tên xưởng</TableCell>
                <TableCell align="center">Công nợ&nbsp;(VNĐ)</TableCell>
                <TableCell align="center">Mộc tồn&nbsp;(m) </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!listDyePlant.length && (
                <TableRow>
                  <TableCell colSpan={3}>Không tìm thấy xưởng nào</TableCell>
                </TableRow>
              )}
              {listDyePlant.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={(event) => handleClick(event, row.id)}
                  hover
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    {currencyFormat(row.debt)}
                  </TableCell>
                  <TableCell align="center">{row.inStock}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

DyePlant.propTypes = {
  classes: PropTypes.object,
  dyePlantAction: PropTypes.shape({
    getListDyePlantRequest: PropTypes.func,
  }),
  listDyePlant: PropTypes.array,
};

const mapStateToProps = (state) => ({
  listDyePlant: state.dyeplant.listDyePlant,
  loading: state.common.loading,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(DyePlant);
