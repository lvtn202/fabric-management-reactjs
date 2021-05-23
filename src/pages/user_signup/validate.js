const validate = (values) => {
  const errors = {};
  const requiredFields = ["firstName", "lastName", "email", "password", "sex"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Vui lòng nhập thông tin";
    }
  });
  return errors;
};

export default validate;
