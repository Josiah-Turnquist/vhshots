const styles = (theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    },
    wrapper: {
      
      // [theme.breakpoints.down('md')]: {
      //   width: '90vw',
      //   margin: '5vw', 
      // },
      // [theme.breakpoints.up('md')]: {
        width: '44vw',
        margin: '3vw', 
      // },
      
      // width: '80vw'
      marginTop: '10px',
      marginBottom: '5vh',
      justifyContent: 'center',
    },
    carousel: {
      textAlign: 'center',
      color: 'white',
      objectFit: 'cover',
    },
    images: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      outline: 'none',
      borderRadius: '4px',
      "&:focus": {
        border: `2px solid red`,
      },
      "&:hover": {
        background: theme.palette.button.onHover,
        cursor: 'pointer',
      },
    },
  });

export default styles;
