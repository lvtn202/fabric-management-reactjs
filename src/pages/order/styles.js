const styles = (theme) => ({
  root: {
    marginTop: '20px',
    flexGrow: 1,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  tableContainer: {
    marginTop: '20px',
    maxHeight: 500,
  }
});

export default styles;
