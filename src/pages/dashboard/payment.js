import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { currencyFormat, parseTimestampDate } from "./../../commons/utils";
import { PAYMENT } from "./../../constants/path"

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Payment(props) {
  const classes = useStyles();
  const { money, history } = props;
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Thanh toán gần đây
      </Typography>
      <Typography component="p" variant="h4">
        {currencyFormat(money)}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {`Từ ngày ${parseTimestampDate(new Date().getTime() - 604800000)}`}
      </Typography>
      <div>
        <Button color="primary" onClick={() => history.push(PAYMENT)}>
          Xem danh sách
        </Button>
      </div>
    </React.Fragment>
  );
}
