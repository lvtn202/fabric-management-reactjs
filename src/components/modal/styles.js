const styles = (theme) => ({
    modal: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      width: 800,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2,4,4),
      outline: 'none',
    },
  });
  
  export default styles;