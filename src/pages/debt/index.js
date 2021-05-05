import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import * as dyePlantAction from "../../actions/dye_plant";
import {
  Paper,
  IconButton,
  InputBase,
  TableContainer,
  TableCell,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { currencyFormat } from "./../../commons/utils";

class Debt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const { dyePlantAction } = this.props;
    const { getListDyePlantRequest } = dyePlantAction;
    getListDyePlantRequest();
  }

  handleSearch = (ev) => {
    ev.preventDefault();
    this.props.dyePlantAction.getListDyePlantRequest(this.state.keyword);
  };

  handleClick = (event, id) => {
    // this.props.history.push(`/dye-plant/${id}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Công nợ
        </Typography>
        <Divider />
        <Paper
          component="form"
          className={classes.root}
          onSubmit={this.handleSearch}
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
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes, listDyePlant, loading } = this.props;

    return (
      <React.Fragment>
        {!listDyePlant.length && !loading ? (
          <Typography variant="h5" gutterBottom className={classes.notFound}>
            Không tìm thấy xưởng nào
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
                  <TableCell align="center">Tên xưởng</TableCell>
                  <TableCell align="center">Công nợ&nbsp;(VNĐ)</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listDyePlant
                  .filter((item) => Number(item.debt) > 0)
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      // onClick={(event) => this.handleClick(event, row.id)}
                      hover
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">
                        {currencyFormat(row.debt)}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={(event) => this.handleClick(event, row.id)}
                        >
                          Thanh toán
                        </Button>
                      </TableCell>
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
  listDyePlant: state.dyeplant.listDyePlant,
  loading: state.common.loading,
});

const mapDispatchToProps = (dispatch) => ({
  dyePlantAction: bindActionCreators(dyePlantAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

Debt.propTypes = {
  classes: PropTypes.object,
};

export default compose(withConnect, withStyles(styles))(Debt);
