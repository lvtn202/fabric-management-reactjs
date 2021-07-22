export const parseTimestamp = (timestamp) =>
  new Intl.DateTimeFormat("vi", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(timestamp);

export const parseTimestampDate = (timestamp) =>
  new Intl.DateTimeFormat("vi", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(timestamp);

export const currencyFormat = (value) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

export const numberFormat = (value, minimumFractionDigits = 1, maximumFractionDigits = 1) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
};

export const sexDescription = (value) => {
  switch (value) {
    case "male":
      return "Nam";
    case "female":
      return "Nữ";
    default:
      return "N/A";
  }
};
