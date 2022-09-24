import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Theme
import { ThemeProvider } from "@mui/material/styles";
import customTheme from './theme';

import App from './App';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <ThemeProvider theme={customTheme}>
        <App theme={customTheme}/>
    </ThemeProvider>, 
    document.getElementById('root'));
