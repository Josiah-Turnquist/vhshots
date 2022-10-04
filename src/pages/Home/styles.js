import zIndex from "@mui/material/styles/zIndex";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  contentWrapper: {
    width: '100vw',
    height: '100vh',
    zIndex: 1001,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photo: {
    "&:hover": {
      color: theme.palette.background.pressed,
      outline: '15px solid rgba(22, 22, 22, 0.5)',
    }
  },
  photos: {
    width: '32%',
    height: '90%',
    objectFit: 'cover',
  },
});

export default styles;
