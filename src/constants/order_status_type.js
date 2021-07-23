import Chip from "@material-ui/core/Chip";
import green from "@material-ui/core/colors/green";
import orange from "@material-ui/core/colors/orange";

const CREATED = "CREATED";
const IN_PROGRESS = "IN_PROGRESS";
const COMPLETED = "COMPLETED";
const CANCELLED = "CANCELLED";

export const statusDescription = (status) => {
  switch (status) {
    case CREATED:
      return (
        <Chip
          variant="outlined"
          label="Đã tạo"
          style={{
            color: green.A400,
            border: `1px solid ${green.A400}`,
            backgroundColor: `transparent !important`,
          }}
        />
      );
    case IN_PROGRESS:
      return (
        <Chip
          variant="outlined"
          label="Đang xử lí"
          style={{
            color: orange.A400,
            border: `1px solid ${orange.A400}`,
            backgroundColor: `transparent !important`,
          }}
        />
      );
    case COMPLETED:
      return <Chip variant="outlined" label="Hoàn thành" color="primary" />;
    case CANCELLED:
      return <Chip variant="outlined" label="Đã hủy" color="secondary" />;
    default:
      return "";
  }
};
