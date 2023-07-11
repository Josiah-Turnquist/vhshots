const styles = (theme) => ({
    root: {    },
    navButtonsContainer: {   // Container to format all the toolbar buttons in a right-aligned row
        position: 'absolute',
        zIndex: 999,
        top: 16,
        right: 20,

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

        color: '#BFBFBF',
        fontSize: 'large',
        fontFamily: 'Roboto',
        fontWeight: '400',
    },
    navButton: {    // Regular buttons at the upper-right corner (explore, artists, create)
        width: '120px',
        height: '40px',
        flexDirection: 'row',
        fontSize: 'large',
        fontFamily: 'Roboto',
        fontWeight: '400'
    },
    iconButtons: {      // Icons at the upper-right corner (search, notifications, profile)
        width: '45px',
        height: '45px',
        top: 1,
    },
    logo: {
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '80px',
        height: '80px',
      },

  });

export default styles;
