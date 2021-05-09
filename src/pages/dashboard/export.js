import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { parseTimestamp } from "../../commons/utils";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Export(props) {
  const classes = useStyles();
  const { history, recentExport } = props;
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Phiếu xuất gần đây
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Mã</TableCell>
            <TableCell>Xưởng nhuộm</TableCell>
            <TableCell>Ngày tạo</TableCell>
            <TableCell>Loại vải</TableCell>
            <TableCell align="center">Tổng độ dài&nbsp;(m)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentExport.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.dyehouse}</TableCell>
              <TableCell>{parseTimestamp(row.createDate)}</TableCell>
              <TableCell>{parseTimestamp(row.createDate)}</TableCell>
              <TableCell align="center">{row.fabricLength}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Button
          color="primary"
          // onClick={() => history.push("/export")}
        >
          Xem danh sách
        </Button>
      </div>
    </React.Fragment>
  );
}
