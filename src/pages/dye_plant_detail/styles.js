
const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  typography: {
    marginTop: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  grid: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  debtField: {
    marginTop: theme.spacing(2),
    float: 'left',
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
  button :{
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  }
});

export default styles;