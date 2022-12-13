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
      carousel1: [
      ],
      carousel2: [
      ],
      carousel3: [
      ],
      carousel4: [
      ],
    };

    // this.handleClick = this.handleClick.bind(this); // Otherwise React can't find this.
  }

  componentDidMount() {
    console.log('mounting gallery');

    // Load Carousel 1
    Storage.list('carousel1/', { pageSize : 'ALL' })
      .then(response => this.setState({ 
        carousel1: response.results 
      }))

    // Load Carousel 2
    Storage.list('carousel2/', { pageSize : 'ALL' })
    .then(response => this.setState({ 
      carousel2: response.results 
    }))

    // Load Carousel 3
    Storage.list('carousel3/', { pageSize : 'ALL' })
    .then(response => this.setState({ 
      carousel3: response.results 
    }))

    // Load Carousel 4
    Storage.list('carousel4/', { pageSize : 'ALL' })
    .then(response => this.setState({ 
      loadingPage: false,
      carousel4: response.results 
    }))
  }

  // handleClick() {
  //   // this.setState(prevState => ({
  //   //   loadingPage: !prevState.loadingPage
  //   // }));
  //   // for listing ALL files without prefix, pass '' instead
  //   Storage.list('estate/')
  //     .then(response => this.setState({ 
  //       loadingPage: false,
  //       images: response 
  //     }))
  //     console.log(this.state.images);
  // }

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
          <HighlightCarousel images={this.state.carousel1} title='Real Estate' />
          <HighlightCarousel images={this.state.carousel2} title='Portraits' />
          <HighlightCarousel images={this.state.carousel3} title='Vehicles' />
          <HighlightCarousel images={this.state.carousel4} title='Drone Photography' />
        </div>
      );
    }
  }
}


export default withStyles(styles)(Gallery);
