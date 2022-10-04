const styles = (theme) => ({
    root: {},
    navContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
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
        marginTop: '10px',
        backgroundColor: theme.palette.background.background,
        "&:hover": {
            backgroundColor: theme.palette.background.pressed,
            cursor: 'pointer',
        }
      },
    navButtonsContainer: {   // Container to format all the toolbar buttons in a right-aligned row
        position: 'absolute',
        zIndex: 999,
        top: 16,
        right: 20,
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
    },
    navHomeButton: {    // Home at the upper-right corner. Required for correct coloring.
        borderColor: '#BFBFBF',
        width: '120px',
        height: '40px',
        top: 1,
        color: '#BFBFBF',
        fontWeight: '400',
    },
    navButton: {    // Regular buttons at the upper-right corner (explore, artists, create)
        width: '120px',
        height: '40px',
    },
    iconButtons: {      // Icons at the upper-right corner (search, notifications, profile)
        width: '45px',
        height: '45px',
        top: 3,
    },
  });

export default styles;
