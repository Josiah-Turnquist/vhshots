const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginTop: '-6px',
    position: 'relative',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '100vw',
    height: '83vh',
  },
  wrapperRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  signup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },

});

export default styles;
