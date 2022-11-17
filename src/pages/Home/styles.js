import zIndex from "@mui/material/styles/zIndex";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  contentWrapper: {
    width: '100vw',
    zIndex: 1001,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '5px',
  },
  photo: {
    // "&:hover": {
    //   color: theme.palette.background.pressed,
    //   outline: '15px solid rgba(22, 22, 22, 0.5)',
    // },
    objectFit: 'cover',
    height: '45vh',
    [theme.breakpoints.down('sm')]: {
      minWidth: '94vw',
    },
    [theme.breakpoints.down('md')]: {
      width: '45vw',
      margin: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '31.5vw',
      height: '91vh',
    },
  },
});

export default styles;
