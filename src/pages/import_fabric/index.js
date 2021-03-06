import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { bindActionCreators, compose } from "redux";
import ListFabricForm from "./list_fabric_form";
import InfoForm from "./info_form";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import * as importActions from "../../actions/import";
import { DYE_BATCH } from "./../../constants/path"

class ImportFabric extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      disableNext: true,
      disableFinish: true,
      dyehouse: {},
      fabricType: "",
      color: "",
      driver: "",
      fabrics: [],
    };
  }

  handleNext = () => {
    if (this.state.activeStep === 1) {
      const {
        dyehouse,
        fabricType,
        color,
        driver,
        fabrics,
        orderId,
      } = this.state;
      const { history, importActions, userId } = this.props;
      const { createImportRequest } = importActions;
      let body = JSON.stringify({
        userId: userId,
        dyehouseId: dyehouse.id,
        fabricType: fabricType,
        color: color,
        fabrics: fabrics,
        driver: driver,
        orderId: orderId,
        createDate: new Date().getTime(),
      });
      createImportRequest(body, () => {
        history.push(DYE_BATCH);
      });
    } else {
      this.setState({ activeStep: this.state.activeStep + 1 });
    }
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return <InfoForm handleUpdateInfo={this.handleUpdateInfo} />;
      case 1:
        return (
          <ListFabricForm
            infoValues={this.state}
            handleUpdateFabrics={this.handleUpdateFabrics}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  handleUpdateFabrics = (fabrics) => {
    if (fabrics.length) {
      this.setState({
        fabrics,
        disableFinish: false,
      });
    } else {
      this.setState({
        disableFinish: true,
      });
    }
  };

  handleUpdateInfo = (infoFormValues) => {
    const { driver, dyehouse, fabricType, color, orderId } = infoFormValues;
    this.setState({
      driver,
      dyehouse,
      fabricType,
      color,
      orderId,
      disableNext: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h5" gutterBottom>
          T???o phi???u nh???p
        </Typography>
        <Divider />
        {this.renderPage()}
      </React.Fragment>
    );
  }

  renderPage() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    const steps = ["Th??ng tin x?????ng", "Danh s??ch c??y v???i"];

    return (
      <div className={classes.layout}>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {this.getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={this.handleBack} className={classes.button}>
                    Tr??? l???i
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                  disabled={
                    activeStep === steps.length - 1
                      ? this.state.disableFinish
                      : this.state.disableNext
                  }
                >
                  {activeStep === steps.length - 1 ? "T???o phi???u" : "Ti???p theo"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.auth.id,
});

const mapDispatchToProps = (dispatch) => ({
  importActions: bindActionCreators(importActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

ImportFabric.propTypes = {
  classes: PropTypes.object,
  importActions: PropTypes.shape({
    createImportRequest: PropTypes.func,
  }),
};

export default compose(withConnect, withStyles(styles))(ImportFabric);
