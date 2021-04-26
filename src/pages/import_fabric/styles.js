const styles = (theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(2),
  },
  selectField: {
    width: "80%",
  },
  table: {
    minWidth: 650,
  },
  grid: {
    marginTop: theme.spacing(2),
  },
  tableContainer: {
    margin: theme.spacing(2),
    maxHeight: 440,
    maxWidth: "60%",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  stepper: {
    padding: theme.spacing(2, 0, 2),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

export default styles;
