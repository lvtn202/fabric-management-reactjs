import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class DyePlant extends React.Component {
  render() {
    const { classes } = this.props;
    var rows = [];
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách xưởng nhuộm
        </Typography>
        <Divider />

        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Tìm tên xưởng"
            inputProps={{ "aria-label": "search google maps" }}
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
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Tên xưởng</TableCell>
                <TableCell align="center">Công nợ</TableCell>
                <TableCell align="center">Mộc tồn&nbsp;(m) </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DyePlant));
