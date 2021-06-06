const validate = (values) => {
  const errors = {};
  const requiredFields = ["dyeplantId", "fabricType"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Vui lòng nhập thông tin";
    }
  });
  return errors;
};

export default validate;
