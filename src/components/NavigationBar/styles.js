const styles = (theme) => ({
    root: {},
    navContainerMobile: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    navButton: {    // Regular buttons at the upper-right corner (explore, artists, create)
        width: '120px',
        height: '40px',
    },
    icons: {
        margin: '15px',
    },
    // },
    // navButtonContainer: {   // Container to format all the toolbar buttons in a right-aligned row
    //     position: 'absolute',
    //     zIndex: 999,
    //     top: 20,
    //     right: 25,
    //     left: 25,
    //     height: '40px',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // },
    // navHomeButton: {    // Home at the upper-right corner. Required for correct coloring.
    //     flexDirection: 'row',
    //     borderColor: '#BFBFBF',
    //     width: '120px',
    //     height: '40px',
    //     marginLeft: '5px',
    //     backgroundColor: theme.palette.background.background,
    //     "&:hover": {
    //         backgroundColor: theme.palette.background.pressed,
    //         cursor: 'pointer',
    //     }
      },
    // navButtonsContainer: {   // Container to format all the toolbar buttons in a right-aligned row
    //     position: 'absolute',
    //     zIndex: 999,
    //     top: 16,
    //     right: 20,
    //     height: '40px',
    //     display: 'flex',
    //     flexDirection: 'row',
    // },
    // navHomeButton: {    // Home at the upper-right corner. Required for correct coloring.
    //     borderColor: '#BFBFBF',
    //     width: '120px',
    //     height: '40px',
    //     top: 1,
    //     color: '#BFBFBF',
    //     fontWeight: '400',
    // },
  });

export default styles;
