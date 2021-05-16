const validate = (values) => {
  const errors = {};
  const requiredFields = ["password", "confirmPassword"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Vui lòng nhập thông tin";
    }
  });

  if (
    values.password &&
    values.confirmPassword &&
    values.confirmPassword !== values.password
  ) {
    errors.confirmPassword = "Mật khẩu không khớp";
  }
  return errors;
};

export default validate;
