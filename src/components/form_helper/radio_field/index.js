import React from "react";
import { FormControl, RadioGroup, FormLabel } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

const AppRadioGroup = ({ input, classes, label, children, ...rest }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{label}</FormLabel>
    <RadioGroup {...input} {...rest}>
      {children}
    </RadioGroup>
  </FormControl>
);

AppRadioGroup.propTypes = {
  input: PropTypes.object,
  children: PropTypes.array,
};

export default withStyles(styles)(AppRadioGroup);
