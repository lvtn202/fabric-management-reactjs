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
