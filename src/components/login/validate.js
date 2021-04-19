const validate = (values) => {
    const errors = {};
    const requiredFields = ["password", "email"];
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
    if (values.phoneNumber && !/^(0[1-9][0-9]{8}[0-9]?)$/i.test(values.phoneNumber)) {
      errors.phoneNumber = "Số điện thoại không hợp lệ, phải gồm 10 số";
    }
    return errors;
  };
  
  export default validate;
  