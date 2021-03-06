// Import library
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
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
          color: '#AFAFAF',
        },
        h3: {
          fontFamily: 'Roboto',
          fontSize: '6vmin',
          margin: '10px',
          color: '#AFAFAF',
        },
        h4: {
            fontFamily: 'Helvetica',
            fontStyle: 'italic',
            fontSize: 18,
            color: '#AFAFAF',
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
            fontFamily: 'Ego',
            fontSize: 14,
            textTransform: 'unset',
        },
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#DFDFDF',
            contrastText: '#BFBFBF',
        },
        secondary: {
            main: 'rgba(44, 44, 44, 1)',
            contrastText: 'rgb(212, 212, 212)',
        },
        text: {
            primary: '#BFBFBF',
        },
        background: {
          primary: 'rgb(04, 08, 16)', //'#040416', '#181c24',
          secondary: 'rgb(24, 28, 36)', //'rgb(40, 44, 52)','rgb(24, 28, 36)'
        },
        alert: {
            red: 'rgba(226, 58, 45, 1)',
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


export default theme;
