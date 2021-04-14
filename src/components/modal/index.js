import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { bindActionCreators, compose } from "redux";
import { Typography, Box, Modal, Divider } from "@material-ui/core";
import * as modalActions from "./../../actions/modal";

class ModalComponent extends React.Component {
  render() {
    const { classes, open, title, component, modalActions } = this.props;
    return (
      <Modal open={open} onClose={modalActions.hideModal}>
        <div className={classes.modal}>
          <Typography variant="h6" >{title}</Typography>
          <Divider/>
          <Box mt={2}>{component}</Box>
        </div>
      </Modal>
    );
  }
}

ModalComponent.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  title: PropTypes.string,
  component: PropTypes.object,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func,
  }),
};

const mapStateToProps = (state) => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component,
});

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(ModalComponent);
