import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import * as adminActions from "../../actions/admin";
import DataGridTable from "./table";

class UserList extends React.Component {
  componentDidMount() {
    const { adminActions } = this.props;
    const { getListUserRequest } = adminActions;
    getListUserRequest();
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          Danh sách nhân viên
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { listUser, classes } = this.props;
    return (
      <div className={classes.tableContainer}>
        <DataGridTable data={listUser} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listUser: state.admin.listUser,
});

const mapDispatchToProps = (dispatch) => ({
  adminActions: bindActionCreators(adminActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

UserList.propTypes = {
  classes: PropTypes.object,
  listUser: PropTypes.array,
  adminActions: PropTypes.shape({
    getListUserRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(UserList);
