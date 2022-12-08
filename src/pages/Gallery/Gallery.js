// React & MUI
import React, { useState, useEffect } from 'react';

// Components
import Footer from '../../components/Footer/Footer';
import HighlightCarousel from '../../components/HighlightCarousel/HighlightCarousel';

// Theme
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../theme';

// Icons
// import CircularProgress from '@mui/material/CircularProgress';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

// Styled Divs with MUI
import { styled } from '@mui/material/styles';

class Gallery extends React.Component {
  render() {
    return <>
      <HighlightCarousel title='Real Estate' />
      <HighlightCarousel title='Portraits' />
      <HighlightCarousel title='Vehicles' />
      <HighlightCarousel title='Drone Photography' />
    </>
  }
}

export default (Gallery);
