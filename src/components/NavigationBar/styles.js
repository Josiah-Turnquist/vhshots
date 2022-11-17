const styles = (theme) => ({
    root: {},
    navContainerMobile: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    navContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: '5px',
    },
    line: {     // Create the line for the navigation bar
        width: '100%',
        opacity: 0.2,
        zIndex: 999,
        position: 'absolute',
        top: 79,
        left: 0,
        margin: 0,
    },
    logo: {
        zIndex: 1000,
        width: '70px',
        height: '70px',
        marginLeft: '5px',
        backgroundColor: theme.palette.background.background,
        "&:hover": {
            backgroundColor: theme.palette.background.pressed,
            cursor: 'pointer',
        },
    },
    navButton: {    // Regular buttons at the upper-right corner (explore, artists, create)
        width: '120px',
        height: '40px',
    },
    icons: {
        margin: '15px',
    },
  });

export default styles;
