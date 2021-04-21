const validate = (values) => {
  const errors = {};
  const requiredFields = ["length"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Vui lòng nhập thông tin";
    }
  });
  return errors;
};

export default validate;
