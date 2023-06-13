// Import library
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { shadows } from "@mui/system";

const white = '#DFDFDF';
// Create a theme instance.
let theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        fontSize: 14,
        h1: {
            fontFamily: 'Helvetica',
            fontSize: '16px',
            letterSpacing: '4px',
            padding: '30px 0px 30px 0px',
            color: 'rgba(192, 192, 192, 1)',
            fontWeight: 300,
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textTransform: 'uppercase',
            textAlign: 'center',
        },
        h2: { // Logo + Info Titles
            fontFamily: 'Helvetica',
            fontSize: '14px',
            letterSpacing: '4px',
            padding: '36px 0px 36px 0px',
            fontWeight: 300,
            color: 'rgba(192, 192, 192, 1)',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            textTransform: 'uppercase',
            textAlign: 'center',
        },
        h3: { // Submission Form Title
            fontFamily: 'Roboto',
            fontSize: '6vmin',
            margin: '10px',
            color: white,
        },
        h4: { // Login Header
            fontFamily: 'Helvetica',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '4px', 
            marginTop: '-10px',
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
        body1: { // Input Fields
            fontFamily: 'Helvetica',
            fontSize: 16,
            color: '#ffffff',
            fontWeight: 400,
            marginBottom: 16,
            marginTop: 16,
        },
        body2: {
            fontFamily: 'Arial',
            fontSize: 12,
            lineHeight: '150%',
            textAlign: 'center',
            letterSpacing: '1.5px',
            marginBottom: '12px', // Paragraph Spacing
            color: '#ffffff',
            fontWeight: 400,
            padding: '0 15%',
        },
        body3: {
            fontFamily: 'Roboto',
            fontSize: 12,
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
          form: '#00000034',
        },
        alert: {
            red: 'rgba(226, 58, 45, 1)',
        },
        input: {
            background: '#0E0E0E',
            backgroundFocused: 'rgb(24, 28, 36)',
            text: '#FFFFFF',
            textPlaceholder: '#676767',
            textSelection: 'rgb(80 119 255 / 75%)', //#517894
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
