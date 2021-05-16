import { withStyles } from "@material-ui/styles";
import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import DataGridTable from "./table";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import * as dyeBatchAction from "../../actions/dye_batch";

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
    const { classes, listDyeBatch, history } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách lô nhuộm (Phiếu nhập)
        </Typography>
        <Divider />

        <div className={classes.tableContainer}>
          <DataGridTable data={listDyeBatch} history={history} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  listDyeBatch: state.dyebatch.listDyeBatch,
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
