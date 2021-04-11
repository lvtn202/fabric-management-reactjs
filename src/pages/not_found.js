import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";

const styles = (theme) => ({
  root: {
    padding: "40px 15px",
    textAlign: "center",
  },
});

class NotFound extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>        
          <div>
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div class="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, withStyles(styles))(NotFound);
