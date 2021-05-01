const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
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
    marginTop: theme.spacing(2),
    maxHeight: 500,
  },
  notFound: {
    marginTop: 16,
    alignItems: "center",
  },
});

export default styles;
