const validate = (values) => {
  const errors = {};
  const requiredFields = ["length"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Vui lòng nhập thông tin";
    }
    if (values.length && values.length <= 0) {
      errors[field] = "Vui lòng nhập độ dài lớn hơn 0";
    }
  });
  return errors;
};

export default validate;
