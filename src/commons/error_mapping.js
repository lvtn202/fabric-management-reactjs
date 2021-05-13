// eslint-disable-next-line import/no-anonymous-default-export
export const errorMapping = (error) => {
  switch (error) {
    case "SYSTEM_ERROR":
      return "Lỗi hệ thống, vui lòng thử lại sau";
    case "EMAIL_NOT_EXISTED":
      return "Email không tồn tại";
    case "WRONG_PASSWORD":
      return "Sai mật khẩu";
    case "ERROR_TOKEN":
      return "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại";
    default:
      break;
  }
};
