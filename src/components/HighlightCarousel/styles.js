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
      // width: '44vw',
      // margin: '3vw', 
      // },
      width: '42vw',
      margin: '3vw', 
      maxWidth: '550px',
      maxHeight: '550px',
      marginTop: '6vh',
      marginBottom: '2vh',
      justifyContent: 'center',
    },
    carousel: {
      textAlign: 'center',
      color: 'white',
      objectFit: 'cover',
      transition: 'all 0.3s ease-out',
      "&:hover": {
        cursor: 'pointer',
        opacity: 0.7,
        transition: 'all 0.3s ease-in',
      },
    },
    imageWrapper: {
      width: '100%',
      height: '42vw',
      maxWidth: '550px',
      maxHeight: '550px',
    },
    images: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      outline: 'none',
      borderRadius: '4px',
      // "&:focus": {
      //   border: `2px solid red`,
      // },
      // "&:hover": {
      //   background: theme.palette.button.onHover,
      //   cursor: 'pointer',
      // },
    },
  });

export default styles;
