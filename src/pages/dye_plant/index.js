import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import DataGridTable from "./table";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
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
    // const handleClick = (event, id) => {
    //   history.push(`/dye-plant/${id}`);
    // };
    // const handleSearch = (ev) => {
    //   ev.preventDefault();
    //   this.props.dyePlantAction.getListDyePlantRequest(this.state.keyword);
    // };
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách xưởng nhuộm
        </Typography>
        <Divider />

        {/* <Paper
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
        </Paper> */}

        <div className={classes.tableContainer}>
          <DataGridTable data={listDyePlant} history={history} />
        </div>
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
