import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import * as dyePlantAction from "../../actions/dye_plant";
import {
  Divider,
  Typography,
  Paper,
  IconButton,
  InputBase,
  TableContainer,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { currencyFormat } from "./../../commons/utils";

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
    const { classes, listDyePlant, history, loading } = this.props;
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
        {!listDyePlant.length && !loading ? (
          <Typography variant="h5" gutterBottom className={classes.notFound}>
            Không tìm thấy xưởng nào
          </Typography>
        ) : (
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Tên xưởng</TableCell>
                  <TableCell align="center">Công nợ&nbsp;(VNĐ)</TableCell>
                  <TableCell align="center">Mộc tồn&nbsp;(m) </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
        )}
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
