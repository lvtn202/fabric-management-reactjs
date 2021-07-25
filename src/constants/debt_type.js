import Typography from "@material-ui/core/Typography";
import { currencyFormat } from "../commons/utils";

export const debtDescription = (value) => {
  switch (value) {
    case 1:
      return "Nhập thành phẩm";
    case 2:
      return "Trả hàng";
    case 3:
      return "Thanh toán công nợ";
    default:
      return "N/A";
  }
};

export const formatAmount = (debt) => {
  switch (debt.type) {
    case 1:
      return `+ ${currencyFormat(debt.amount)}`;
    case 2:
    case 3:
      return `- ${currencyFormat(debt.amount)}`;
    default:
      return "N/A";
  }
};

export const formatAmountComponent = (debt) => {
  switch (debt.type) {
    case 1:
      return (
        <Typography color="secondary">{`+${currencyFormat(
          debt.amount
        )}`}</Typography>
      );
    case 2:
    case 3:
      return (
        <Typography color="primary">{`-${currencyFormat(
          debt.amount
        )}`}</Typography>
      );
    default:
      return "N/A";
  }
};
