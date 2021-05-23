const styles = (theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: 0,
    paddingRight: 0,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 280,
  },
  button: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  dataPicker: {
    margin: theme.spacing(2),
  },
});

export default styles;
