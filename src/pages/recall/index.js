import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import DataGridTable from "./table";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import * as recallActions from "../../actions/recall";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { RECALL_CREATION } from "./../../constants/path";

class RecallList extends React.Component {
  componentDidMount() {
    const { recallActions } = this.props;
    const { getListRecallRequest } = recallActions;
    getListRecallRequest();
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách phiếu hàng trả
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { history, classes, listRecall } = this.props;
    return (
      <React.Fragment>
        <Box display="flex" justifyContent="center" m={1} p={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push(RECALL_CREATION)}
          >
            Tạo mới
          </Button>
        </Box>

        <div className={classes.tableContainer}>
          <DataGridTable data={listRecall} history={history} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.common.loading,
  listRecall: state.recall.listRecall,
});

const mapDispatchToProps = (dispatch) => ({
  recallActions: bindActionCreators(recallActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

RecallList.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.object,
  listRecall: PropTypes.array,
  recallActions: PropTypes.shape({
    getListRecallRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(RecallList);
