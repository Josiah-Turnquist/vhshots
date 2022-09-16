import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Theme
import { ThemeProvider } from "@mui/material/styles";
import theme from './theme';

import App from './App';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App theme={theme}/>
    </ThemeProvider>, 
    document.getElementById('root'));
