// React & MUI
import React, { useState, useEffect } from 'react';

// Components
import Footer from '../../components/Footer/Footer';
import HighlightCarousel from '../../components/HighlightCarousel/HighlightCarousel';

// Loader
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Icons
// import CircularProgress from '@mui/material/CircularProgress';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Storage } from "@aws-amplify/storage"


// Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

// Styled Divs with MUI
import { styled } from '@mui/material/styles';

// Storage.list('estate/') // for listing ALL files without prefix, pass '' instead


class Gallery extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loadingPage: true,
      images: [

      ],
    };

    this.handleClick = this.handleClick.bind(this); // Otherwise React can't find this.
  }

  componentDidMount() {
    console.log('mounting gallery');
    Storage.list('estate/')
      .then(response => this.setState({ 
        loadingPage: false,
        images: response 
      }))
  }

  handleClick() {
    // this.setState(prevState => ({
    //   loadingPage: !prevState.loadingPage
    // }));
    // for listing ALL files without prefix, pass '' instead
    Storage.list('estate/')
      .then(response => this.setState({ 
        loadingPage: false,
        images: response 
      }))
      console.log(this.state.images);
  }

  render() {
    if (this.state.loadingPage) {
      return (
        <div >
          <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '30vh'}}>
            <CircularProgress size='10vw'/>
          </Box>
      </div>
      );
    }
    else {
      return (
        <div className={this.props.classes.wrapper} >
          <HighlightCarousel title='Real Estate' />
          <HighlightCarousel title='Portraits' />
          <HighlightCarousel title='Vehicles' />
          <HighlightCarousel title='Drone Photography' />
        </div>
      );
    }
  }
}


export default withStyles(styles)(Gallery);
