import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { currencyFormat, numberFormat, parseTimestamp } from "../../commons/utils";
import { DYE_BATCH } from "./../../constants/path"

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Import(props) {
  const classes = useStyles();
  const { history, recentImport } = props;
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Phiếu nhập gần đây
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Mã lô nhuộm</TableCell>
            <TableCell>Tên xưởng</TableCell>
            <TableCell>Ngày tạo</TableCell>
            <TableCell align="center">Tổng thành phẩm&nbsp;(m)</TableCell>
            <TableCell align="right">Tổng tiền&nbsp;(VND)</TableCell>
            <TableCell>Loại vải</TableCell>
            <TableCell>Màu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recentImport.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.dyeBatchs[0].dyehouseName}</TableCell>
              <TableCell>{parseTimestamp(row.createDate)}</TableCell>
              <TableCell align="center">{numberFormat(row.fabricLength)}</TableCell>
              <TableCell align="right">{currencyFormat(row.money)}</TableCell>
              <TableCell>{row.dyeBatchs[0].fabricType}</TableCell>
              <TableCell>{row.dyeBatchs[0].color}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Button color="primary" onClick={() => history.push(DYE_BATCH)}>
          Xem danh sách
        </Button>
      </div>
    </React.Fragment>
  );
}
