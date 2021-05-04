const validate = (values) => {
  const errors = {};
  const requiredFields = ["returnReason", "returnLength", "receivedName", "dyehouseId"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Vui lòng nhập thông tin";
    }
  });
  return errors;
};

export default validate;
