const validate = (values) => {
  const errors = {};
  const requiredFields = ["firstName", "lastName", "email", "password", "sex"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Vui lòng nhập thông tin";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Địa chỉ email không hợp lệ";
  }
  return errors;
};

export default validate;
