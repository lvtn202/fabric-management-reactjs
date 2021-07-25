const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  button: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  datePicker: {
    marginLeft: theme.spacing(2),
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  grid: {
    // marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
});

export default styles;
