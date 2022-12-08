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
        h3: { // Submission Form Title
            fontFamily: 'Roboto',
            fontSize: '6vmin',
            margin: '10px',
            color: white,
        },
        h4: { // Gallery Highlight Titles
            fontFamily: 'Helvetica',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '4px', 
            lineHeight: '2.235',
            fontSize: 'calc(1rem + 0.2vw)',
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
        button: { // Note, this doesn't change the nav bar for some reason
            fontFamily: 'Helvetica',
            fontSize: 'calc(1rem + 0.2vw)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '2px', 
        },
        submissionButton: {
            fontFamily: 'Helvetica',
            fontSize: '16px',
            fontWeight: 500,
            textTransform: 'uppercase',
        },
    },


    palette: {
        mode: 'dark',
        primary: {
            main: '#EFEFEF',
            dark: 'rgb(60, 60, 180)',
            contrastText: '#BFBFBF',
        },

        secondary: {
            main: 'rgba(24, 24, 24, 1)',
            contrastText: 'rgb(212, 212, 212)',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#BFBFBF',
            placeholder: '#474747'
        },
        background: {
          primary: 'rgb(04, 08, 16)', //'#040416', '#181c24',
          default: '#1f1f25',//'#15161A',   IF YOU CHANGE THIS ALSO CHANGE INDEX.HTML
          overlay: '#1f1f25C0',
          pressed: '#0101f23',
          paper: '#15161A',
          input: '#0E0E0E',
          secondary: 'rgb(24, 28, 36)', //'rgb(40, 44, 52)','rgb(24, 28, 36)'
        },
        alert: {
            red: 'rgba(226, 58, 45, 1)',
        },
        input: {
            background: '#0E0E0E',
            backgroundFocused: 'rgb(24, 28, 36)',
            text: '#FFFFFF',
            textPlaceholder: '#676767',
            textSelection: 'rgb(80 119 225 / 49%)', //#517894
        },
        button: {
            // text: '#EFEFEF',
            background: '#E16B4C',
            onHover: '#d15B3C',
        }

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
