const styles = (theme) => ({
    root: {},
    navContainer: {
    },
    infoWrapper: {
        position: 'absolute',
        height: '370px',
        width: '100vw',
        backgroundColor: theme.palette.background.primary,
        display: 'flex',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      },
      infoText: {
        position: 'relative',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        textAlign: 'center',
        marginTop: '10px',
      },
      profileImg: {
        position: 'relative',
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignSelf: 'center',
      },
      profileQuote: {
        display: 'flex',
        flexDirection: 'row',
        // textAlign: 'center',
        alignItems: 'center',
        maxWidth: '80vw',
        marginTop: '15px',
      }
  });

export default styles;
