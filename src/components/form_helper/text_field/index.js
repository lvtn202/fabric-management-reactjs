import React from 'react';
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';

const AppTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    variant="outlined"
    {...input}
    {...custom}
  />
);

AppTextField.propTypes  = {
    label: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object
}

export default AppTextField;
