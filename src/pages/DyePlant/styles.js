const styles = (theme) => ({
  root: {
    marginTop: '20px',
    flexGrow: 1,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
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
  divider: {
    height: 28,
    margin: 4,
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginTop: '20px',
  }
});

export default styles;