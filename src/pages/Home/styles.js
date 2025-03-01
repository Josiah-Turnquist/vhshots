const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginTop: '-6px',
    position: 'relative',
  },
  contentWrapper: {
    width: '100vw',
    zIndex: 1001,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '5px',
  },
  photo: {
    // "&:hover": {
    //   color: theme.palette.background.pressed,
    //   outline: '15px solid rgba(22, 22, 22, 0.5)',
    // },
    objectFit: 'cover',
    height: '45vh',
    transition: 'all 0.3s ease-out',
    // "&:hover": {
    //   cursor: 'pointer',
    //   opacity: 0.7,
    //   transition: 'all 0.3s ease-in',
    // },
    [theme.breakpoints.down('sm')]: {
      minWidth: '94vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '45vw',
      height: '42.75vh', // delete this if don't want to stick to screen size
      margin: '2vw', 
      borderRadius: '2px',
    },
    [theme.breakpoints.up('md')]: {
      width: '31.5vw',
      height: '91vh',
      marginTop: '2px',
    },
  },
});

export default styles;
