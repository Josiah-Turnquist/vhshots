// React & MUI
import React, { useState, useEffect } from 'react';

// Components
import Footer from '../../components/Footer/Footer';
import HighlightCarousel from '../../components/HighlightCarousel/HighlightCarousel';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import theme from '../../theme';

// Loader
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import WestIcon from '@mui/icons-material/West';

// aws
import { Storage } from "@aws-amplify/storage"


// Styles
import { withStyles } from '@mui/styles';
import styles from './styles';
import './GalleryView.css';

// Styled Divs with MUI
import { styled } from '@mui/material/styles';

// Lightbox
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'

const Div = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

const imgStyle = {
  display: 'grid', 
  gridTemplateColumns: 'repeat(8, 1fr)',
  gridTemplateRows: 'repeat(8, 5vw)',
  gridGap: '15px',
}

const GalleryView = ({ toggleLoading, handlePageChange, pageShown, galleryName, images }) => {

  useEffect(() => {
    initLightboxJS("08E9-E32F-6E73-6368", "team");
  });


  return (
    <Div>
      <IconButton aria-label="back button" size="large" style={{ backdropFilter: 'blur(5px)', backgroundColor: theme.palette.background.overlay, position: 'fixed', left: '11px', top: '85px'}} onClick={() => {handlePageChange('gallery')}}>
        <WestIcon fontSize="inherit" style={{color: 'white', margin: '0px'}} />
      </IconButton>
      <Typography variant="h3">
        {galleryName} Gallery
      </Typography>
      
      {/* <div style={imgStyle}> */}
        <SlideshowLightbox className="GalleryViewer">

          {images.map((item) => (
            <img 
            // style={{maxWidth: '25%', flex: '25%', padding: '4px 4px' }} 
            className="images"
            src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${item.key}`} 
            alt='' 
            key={item.eTag}
          />
          ))}
        </SlideshowLightbox> 
      {/* </div> */}
    </Div>
  );
}

/*
 * This function will divide and sort an array, so instead of sorting vertically into columns, it can sort horizontally.
 */
function resort(arr) {
  let sortedArray = []
  const size = arr.length;
  const cols = 3;
  for (let a = 0; a < cols; a++) {
    for (let i = 0; i < size; i += cols) {
      if (arr[a + i] !== undefined) {
        sortedArray.push(arr[a + i]);
      }
    }
  }

  return sortedArray;
}

class Gallery extends React.Component {
  constructor (props, classes) {
    super(props);
    this.state = {
      carousel1: [
      ],
      carousel2: [
      ],
      carousel3: [
      ],
      carousel4: [
      ],
      gallery1: [
      ],
      gallery2: [
      ],
      gallery3: [
      ],
      gallery4: [
      ],
      classes: classes,
      pageShown: '',
      loadingPage: true,
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


  handlePageChange = (page) => {
    this.setState({
      loadingPage: true,
    })

    // Null
    if (page === 'gallery') {
      this.setState({ 
        loadingPage: false,
        pageShown: page,
      })
    }

    // First gallery
    if (page === 'gallery1') {
      if (this.state.gallery1.length === 0) {
        console.log('gallery1 was empty -- populating array.');

        // Load Gallery 1
        try {
          Storage.list('estate/', { pageSize : 'ALL' })
          .then(response => {this.setState({ 
            loadingPage: false,
            gallery1: resort([...response.results]),
            pageShown: page,
          }); console.log(this.state.gallery1)})
        } catch (error) {
          console.log('error loading gallery:', error);
        }
      } else {
        this.setState({
          loadingPage: false,
          pageShown: page,
        })
      }
    }

    // Second gallery
    if (page === 'gallery2') {
      if (this.state.gallery2.length === 0) {
        console.log('gallery2 was empty -- populating array.');

        // Load Gallery 2
        try {
          Storage.list('portraits/', { pageSize : 'ALL' })
          .then(response => {this.setState({ 
            loadingPage: false,
            gallery2: resort([...response.results]),
            pageShown: page,
          }); console.log(this.state.gallery2)})
        } catch (error) {
          console.log('error loading gallery:', error);
        }
      } else {
        this.setState({
          loadingPage: false,
          pageShown: page,
        })
      }
    }

    // Third gallery
    if (page === 'gallery3') {
      if (this.state.gallery3.length === 0) {
        console.log('gallery3 was empty -- populating array.');

        // Load Gallery 3
        try {
          Storage.list('film/', { pageSize : 'ALL' })
          .then(response => {this.setState({ 
            loadingPage: false,
            gallery3: resort([...response.results]),
            pageShown: page,
          }); 
        })
        } catch (error) {
          console.log('error loading gallery:', error);
        }
      } else {
        this.setState({
          loadingPage: false,
          pageShown: page,
        })
      }
    }

    // Fourth gallery
    if (page === 'gallery4') {
      if (this.state.gallery4.length === 0) {
        console.log('gallery4 was empty -- populating array.');

        // Load Gallery 4
        try {
          Storage.list('other/', { pageSize : 'ALL' })
          .then(response => {this.setState({ 
            loadingPage: false,
            gallery4: resort([...response.results]),
            pageShown: page,
          }); 
        })
        } catch (error) {
          console.log('error loading gallery:', error);
        }
      } else {
        this.setState({
          loadingPage: false,
          pageShown: page,
        })
      }
    }
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
    else if (this.state.pageShown === 'gallery1') {
      return (
        <GalleryView galleryName='Real Estate' toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.state.gallery1}/>
      );
    }
    else if (this.state.pageShown === 'gallery2') {
      return (
        <GalleryView galleryName='Portrait' toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.state.gallery2}/>
      );
    }
    else if (this.state.pageShown === 'gallery3') {
      return (
        <GalleryView galleryName='Film' toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.state.gallery3}/>
      );
    }
    else if (this.state.pageShown === 'gallery4') {
      return (
        <GalleryView galleryName='Other' toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.state.gallery4}/>
      );
    }
    else {
      return (
        <div className={this.props.classes.wrapper} >
          <HighlightCarousel reel={this.state.carousel1} title='Real Estate' onClick={() => {            
            this.handlePageChange('gallery1');
          }}/>
          <HighlightCarousel reel={this.state.carousel2} title='Portraits' onClick={() => {
            this.handlePageChange('gallery2');
          }}/>
          <HighlightCarousel reel={this.state.carousel3} title='Film' onClick={() => {
            this.handlePageChange('gallery3');
          }}/>
          <HighlightCarousel reel={this.state.carousel4} title='Other' onClick={() => {
            this.handlePageChange('gallery4');
          }}/>
        </div>
      );
    }
  }
}


export default withStyles(styles)(Gallery);
