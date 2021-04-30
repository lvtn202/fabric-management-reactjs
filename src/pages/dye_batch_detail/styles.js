const styles = (theme) => ({
  grid: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginTop: "20px",
    maxHeight: 500,
  },
  notFound: {
    marginTop: 16,
    alignItems: "center",
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
});

export default styles;
