const styles = (theme) => ({
    root: {},
    navContainer: {
    },

    // logo: {     // Create the upper-left logo
    //     position: 'absolute',
    //     zIndex: 999,
    //     height: '260px',
    //     top: 27,
    //     left: 50,
    // },
    line: {     // Create the line for the navigation bar
        width: '100%',
        opacity: 0.2,
        zIndex: 999,
        position: 'absolute',
        top: 79,
        left: 0,
        margin: 0,
    },
    navButtonContainer: {   // Container to format all the toolbar buttons in a right-aligned row
        position: 'absolute',
        zIndex: 999,
        top: 20,
        right: 25,
        left: 25,
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    navHomeButton: {    // Home at the upper-right corner. Required for correct coloring.
        flexDirection: 'row',
        borderColor: '#BFBFBF',
        width: '120px',
        height: '40px',
        marginLeft: '5px',
        marginRight: '5px',
        color: '#BFBFBF',
        fontSize: 'large',
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    navButton: {    // Regular buttons at the upper-right corner (explore, artists, create)
        width: '120px',
        height: '40px',
        marginLeft: '5px',
        marginRight: '5px',
        flexDirection: 'row',
        color: theme.palette.text,
        fontSize: 'large',
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    iconButtons: {      // Icons at the upper-right corner (search, notifications, profile)
        width: '40px',
        height: '40px',
        marginLeft: '5px',
        marginRight: '5px',
    },
    icons: {
        color: theme.palette.primary.main,
    },
    logo: {
      zIndex: 100,
      position: 'absolute',
      top: -40,
      left: -40,
      width: '150px',
      height: '150px',
    },
  });

export default styles;
