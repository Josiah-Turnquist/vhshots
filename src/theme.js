// Import library
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const white = '#DFDFDF';
// Create a theme instance.
let theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
        h1: {
            fontFamily: 'Helvetica',
            fontSize: '10vmin',
        },
        h2: {
          fontFamily: 'Roboto',
          fontSize: '8vmin',
          margin: '10px',
          color: white,
        },
        h3: {
          fontFamily: 'Roboto',
          fontSize: '6vmin',
          margin: '10px',
          color: white,
        },
        h4: {
            fontFamily: 'Helvetica',
            fontStyle: 'italic',
            fontSize: 18,
            color: white,
        },
        h5: {
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 500,
        },
        h6: {
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 400,
        },
        body1: {
            fontFamily: 'Helvetica',
            fontSize: 16,
            color: '#fffff',
            fontWeight: 400,
            marginBottom: 16,
            marginTop: 16,
        },
        body2: {
            fontFamily: 'Roboto',
            fontSize: 14,
            color: '#989898',
            fontWeight: 400,
            marginBottom: 16,
        },
        overline: {
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 500,
            color: 'rgba(226, 58, 45, 1)',
            textTransform: 'uppercase',
        },
        button: {
            fontFamily: 'Helvetica',
            fontSize: 16,
            fontWeight: 500,
            margin: '4px',
        },
    },


    palette: {
        mode: 'dark',
        primary: {
            main: '#DFDFDF',
            dark: 'rgb(60, 60, 180)',
            contrastText: '#BFBFBF',
        },
        secondary: {
            main: 'rgba(24, 24, 24, 1)',
            contrastText: 'rgb(212, 212, 212)',
        },
        text: {
            primary: '#BFBFBF',
        },
        background: {
          primary: 'rgb(04, 08, 16)', //'#040416', '#181c24',
          default: '#15161A',
          paper: '#15161A',
          secondary: 'rgb(24, 28, 36)', //'rgb(40, 44, 52)','rgb(24, 28, 36)'
        },
        alert: {
            red: 'rgba(226, 58, 45, 1)',
        },

    },


    components: {
        MuiButtonBase: {
            defaultProps: {
              // The props to apply
              disableRipple: false, // No more ripple, on the whole application 💣!
            },
          },
        MuiPaper: {
            styleOverrides: {
                root: {
                    color: 'red'
                },
            },
        },
    },

    
    overrides: {
        MuiAvatar: {
            root: {
                fontFamily: 'Roboto',
                fontWeight: 'bold',
            },
            colorDefault: {
                backgroundColor: 'white',
            },
        },
        MuiListItemText: {
            primary: {
                color: '#ffffff',
            },
        },
        MuiListItemAvatar: {
            root: {
                minWidth: 40,
            },
        },
    },
});

// Make responsive
theme = responsiveFontSizes(theme);

export default theme;
