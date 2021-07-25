import React from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { numberFormat, parseTimestamp } from "../../commons/utils";

export default function Export(props) {
  const { recentExport } = props;
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
              <TableCell>{row.fabricType}</TableCell>
              <TableCell align="center">{numberFormat(row.fabricLength)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Button
          color="primary"
          // onClick={() => history.push("/export")}
        >
          Xem danh sách
        </Button>
      </div> */}
    </React.Fragment>
  );
}
