// React & MUI
import React, { useState, useEffect } from 'react';

// Components
import Footer from '../../components/Footer/Footer';
import HighlightCarousel from '../../components/HighlightCarousel/HighlightCarousel';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import theme from '../../theme';
import Skeleton from '@mui/material/Skeleton';


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
// import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { light } from '@mui/material/styles/createPalette';

// icons
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

const Div = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

// const imgStyle = {
//   display: 'grid', 
//   gridTemplateColumns: 'repeat(8, 1fr)',
//   gridTemplateRows: 'repeat(8, 5vw)',
//   gridGap: '15px',
// }

class AtomicImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        // null
      },
      src: props.src,
      handleImageLoad: props.handleImageLoad,
      isLoaded: false,
    };
    this.onImgLoad = this.onImgLoad.bind(this);
  }

   onImgLoad({ target: img }) {
       this.setState({
        dimensions:{
          height: img.offsetHeight,
          width: img.offsetWidth,
        },
        isLoaded: true,
      }
    );
    this.props.handleImageLoad(img.offsetHeight, this.props.col);
   }

   render(){
    const {src} = this.state;
    const {isLoaded} = this.state;

    return (
      // !isLoaded ? (
      //   <Skeleton
      //     sx={{ bgcolor: 'white.900' }}
      //     variant="rectangular"
      //   />
      // ) : (
      <img 
        className="image"
        style={{
          width: '100%', 
          paddingBottom: '5px',
          opacity: isLoaded ? null : 0
          
        }} 
        src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${src}`} 
        alt='' 
        key={src}
        loading='lazy'
        onLoad={this.onImgLoad}
        onClick={() => {this.props.onSelect(src)}}
      />
    );
  }
}

class GalleryViewInner extends React.Component {
  constructor (props, classes) {
    super(props);
    this.state = {
      currentIndex: 0,
      hasMore: true,
      cap: this.props.images.all.length,
      lengthA: this.props.images.column1Length,
      column1: this.props.images.column1,
      lengthB: this.props.images.column2Length,
      column2: this.props.images.column2,
      lengthC: this.props.images.column3Length,
      column3: this.props.images.column3,
    };
  }

  componentDidMount() {
    this.firstFetch();
  }


  firstFetch() {
      // Start chain reaction ONLY if there is at least one image
      console.error(this.props.images.all);
      if (this.state.cap > 0) {
        this.fetchNext();
        console.error('fetching images');
        console.error(this.state.cap);
      } else {
        this.state.hasMore = false;
      }
  }
  
  fetchNext = () => {
    // console.log('fetching next');
    console.log(`size col 1: ${this.state.lengthA}`);
    console.log(`size col 2: ${this.state.lengthB}`);
    console.log(`size col 3: ${this.state.lengthC}`);
    if (this.state.hasMore) {
      if (this.state.lengthA <= this.state.lengthB && this.state.lengthA <= this.state.lengthC) {
        this.setState((prevState) => ({
          column1: prevState.column1.concat(this.props.images.all[this.state.currentIndex]),
        }))
        // console.log('added to col a');
      } else if ( this.state.lengthB <= this.state.lengthA && this.state.lengthB <= this.state.lengthC ) {
        this.setState((prevState) => ({
          column2: prevState.column2.concat(this.props.images.all[this.state.currentIndex]),
        }))
        // console.log('added to col b');
      } else {
        this.setState((prevState) => ({
          column3: prevState.column3.concat(this.props.images.all[this.state.currentIndex]),
        }))
        // console.log('added to col c');
      }
    }
  }

  handleImageLoad = (size, column) => {
    // console.error('LOADED WITHIN GALLERY');
    // console.error('current index');
    // console.error(this.state.currentIndex);
    // console.error('cap');
    // console.error(this.state.cap);
    if (column === 1) {
      this.setState({
        lengthA: this.state.lengthA + size,
        currentIndex: this.state.currentIndex + 1,
        hasMore: (this.state.currentIndex < this.state.cap - 1 ? true : false),
      }, () => {
        if (this.props.images.all[this.state.currentIndex] !== undefined) {
          // console.log(this.state.hasMore);
          this.fetchNext();
        }
      })
    } else if (column === 2) {
      this.setState({
        lengthB: this.state.lengthB + size,
        currentIndex: this.state.currentIndex + 1,
        hasMore: (this.state.currentIndex < this.state.cap - 1 ? true : false),
      }, () => {
        if (this.props.images.all[this.state.currentIndex] !== undefined) {
          // console.log(this.state.hasMore);
          this.fetchNext();
        }
      })    
    } else if (column === 3) {
      this.setState({
        lengthC: this.state.lengthC + size,
        currentIndex: this.state.currentIndex + 1,
        hasMore: (this.state.currentIndex < this.state.cap - 1 ? true : false),
      }, () => {
        if (this.props.images.all[this.state.currentIndex] !== undefined) {
          // console.log(this.state.hasMore);
          this.fetchNext();
        }
      })
    } else {
      console.error('column does not exist');
    }

  }

  render() {
    console.log(this.state.hasMore);

    if (this.state.cap === 0) {
      return (
        <div style={{ width: '100%' }}>
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'space-evenly'}}>
          <ImageNotSupportedIcon style={{ width: '100px', height: '100px', marginTop: '20vh', color: theme.palette.icons.noImage, alignSelf: 'center' }} />
          <Typography variant="h2" style={{ padding: '23px 0px 26px 0px' }}>
            No images found
          </Typography>          
        </div>
      </div>
      )
    } 
    return (
      <div style={{ width: '100%' }}>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
          <div style={{width: 'calc(33vw - 11px)'}}>
            {this.state.column1.map((item) => (
              <AtomicImage handleImageLoad={this.handleImageLoad} col={1} src={item.key} key={item.key} onSelect={this.props.onSelect}/>
            ))}
          </div>
          <div style={{width: 'calc(33vw - 11px)'}}>
            {this.state.column2.map((item) => (
              <AtomicImage handleImageLoad={this.handleImageLoad} col={2} src={item.key} key={item.key} onSelect={this.props.onSelect}/>
            ))}
          </div>
          <div style={{width: 'calc(33vw - 11px)'}}>
            {this.state.column3.map((item) => (
              <AtomicImage handleImageLoad={this.handleImageLoad} col={3} src={item.key} key={item.key} onSelect={this.props.onSelect}/>
            ))}
          </div>  
        </div>
        {this.state.hasMore && <Box sx={{display: 'flex', justifyContent: 'center', height: '150px'}}>
          <CircularProgress size='40px' style={{ alignSelf: 'center' }} />
        </Box>}
      </div>
    );
  }
}

const GalleryView = ({ toggleLoading, handlePageChange, pageShown, galleryName, images, getUser }) => {

  const [lightbox, setLightbox] = useState(false);          // show lightbox (true / false)
  const [lightboxImage, setLightboxImage] = useState(null); // image source (e.g. https://aws.s3...)

  // useEffect(() => {
  //   initLightboxJS("08E9-E32F-6E73-6368", "team");
  // });

  const onSelect = (image) => {
    console.log(`Selected ${image}`);
    setLightbox(true);
    setLightboxImage(image);
  }

  const onUnselect = () => {
    setLightbox(false);
    setLightboxImage(null);
  }

  const onRemove = () => {
    // Remove Image Carousel 1
    Storage.remove(lightboxImage)
      .then(response => {
        console.log(`removed image ${lightboxImage}`);
      }
    )
  }

  const onDownload = () => {
    
  }


  return (
    <Div>
      {!lightbox && <IconButton aria-label="back button" size="large" style={{ backdropFilter: 'blur(5px)', backgroundColor: theme.palette.background.overlay, position: 'fixed', left: '11px', top: '85px', zIndex: 10}} onClick={() => {handlePageChange('gallery')}}>
        <WestIcon fontSize="inherit" style={{color: 'white', margin: '0px'}} />
      </IconButton>}
      <Typography variant="h2" style={{ padding: '23px 0px 26px 0px' }}>
        {galleryName}
      </Typography>
      
      <GalleryViewInner images={images} onSelect={onSelect} onUnselect={onUnselect}/>

      {lightbox && <div style={{ backgroundColor: theme.palette.background.overlayGallery, backdropFilter: 'blur(5px)', position: 'fixed', width: '100vw', height: '100vh', left: '0', top: '0' }}>
        
      {getUser().attributes.email === 'will@vhshots.com' && <IconButton aria-label="Download Image" onClick={onDownload} style={{ top: (window.innerWidth >= 650 ? '70px' : null), bottom: (window.innerWidth >= 650 ? null : 16), right: '90px', position: 'fixed' }}>
          <DownloadIcon fontSize='large' color='primary' />
        </IconButton>}
        {getUser().attributes.email === 'will@vhshots.com' && <IconButton aria-label="Remove Image" onClick={onRemove} style={{ top: (window.innerWidth >= 650 ? '70px' : null), bottom: (window.innerWidth >= 650 ? null : 16), right: '150px', position: 'fixed' }}>
          <DeleteIcon fontSize='large' color='primary' />
        </IconButton>}
        <IconButton aria-label="Exit Preview" onClick={onUnselect} style={{ top: (window.innerWidth >= 650 ? '70px' : null), bottom: (window.innerWidth >= 650 ? null : 16), right: '30px', position: 'fixed' }}>
          <CloseIcon fontSize='large' color='primary' />
        </IconButton>
        <img src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${lightboxImage}`} style={{ objectFit: 'cover', position: 'fixed', maxWidth: '80vw', maxHeight: (window.innerWidth >= 650 ? '80vh' : '75vh'), left: '50%', top: (window.innerWidth >= 650 ? 'calc(50% + 35px)' : '50%'), transform: 'translate(-50%, -50%)' }} alt={lightboxImage}/>
      </div>}

      {/* <SlideshowLightbox className="GalleryViewer"> */}
        {/* {images.map((item) => (
          <div className='gallery'>
            <img 
              // style={{maxWidth: '25%', flex: '25%', padding: '4px 4px' }} 
              className="gallery"
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${item.key}`} 
              alt='' 
              key={item.eTag}
            />
          </div>
        ))} */}
      {/* </SlideshowLightbox>  */}
    </Div>
  );
}

/*
 * This function will divide and sort an array, so instead of sorting vertically into columns, it can sort horizontally.
 */
// function resort(arr) {
//   let sortedArray = []
//   const size = arr.length;
//   const cols = 3;
//   for (let a = 0; a < cols; a++) {
//     for (let i = 0; i < size; i += cols) {
//       if (arr[a + i] !== undefined) {
//         sortedArray.push(arr[a + i]);
//       }
//     }
//   }

//   console.log(arr);
//   console.log(sortedArray);
//   return sortedArray;
// }

class Gallery extends React.Component {
  constructor (props, classes) {
    super(props);

    // console.log(this.props.images.estate.carousel);
    this.state = {
      carousel1: this.props.images.estate.carousel,
      carousel2: this.props.images.portraits.carousel,
      carousel3: this.props.images.film.carousel,
      carousel4: this.props.images.other.carousel,
      gallery1: this.props.images.estate.all,
      gallery2: this.props.images.portraits.all,
      gallery3: this.props.images.film.all,
      gallery4: this.props.images.other.all,
      classes: classes,
      pageShown: '',
      loadingPage: false,
    };

    // this.handleClick = this.handleClick.bind(this); // Otherwise React can't find this.
  }

  componentDidMount() {
    // console.log('mounting gallery');

    // // Load Carousel 1
    // Storage.list('carousel1/', { pageSize : 'ALL' })
    //   .then(response => this.setState({ 
    //     carousel1: response.results 
    //   }))

    // // Load Carousel 2
    // Storage.list('carousel2/', { pageSize : 'ALL' })
    // .then(response => this.setState({ 
    //   carousel2: response.results 
    // }))

    // // Load Carousel 3
    // Storage.list('carousel3/', { pageSize : 'ALL' })
    // .then(response => this.setState({ 
    //   carousel3: response.results 
    // }))

    // // Load Carousel 4
    // Storage.list('carousel4/', { pageSize : 'ALL' })
    // .then(response => this.setState({ 
    //   loadingPage: false,
    //   carousel4: response.results 
    // }))
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
          .then(response => {
            response.results.sort(function(a,b){
              return new Date(b.lastModified) - new Date(a.lastModified);
            });
            this.setState({ 
            loadingPage: false,
            gallery1: [...response.results],
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
          .then(response => {
            response.results.sort(function(a,b){
              return new Date(b.lastModified) - new Date(a.lastModified);
            });
            this.setState({ 
            loadingPage: false,
            gallery2: [...response.results],
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
          .then(response => {
            response.results.sort(function(a,b){
              return new Date(b.lastModified) - new Date(a.lastModified);
            });
            this.setState({ 
            loadingPage: false,
            gallery3: [...response.results],
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
          .then(response => {
            response.results.sort(function(a,b){
              return new Date(b.lastModified) - new Date(a.lastModified);
            });
            this.setState({ 
            loadingPage: false,
            gallery4: [...response.results],
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
            <CircularProgress size='10vw' style={{ animation: '3s infinite alternate slidein' }}/>
          </Box>
        </div>
      );
    }
    else if (this.state.pageShown === 'gallery1') {
      return (
        <GalleryView galleryName='Real Estate' getUser={this.props.getUser} toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.props.images.estate}/>
      );
    }
    else if (this.state.pageShown === 'gallery2') {
      return (
        <GalleryView galleryName='Portrait' getUser={this.props.getUser} toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.props.images.portraits}/>
      );
    }
    else if (this.state.pageShown === 'gallery3') {
      return (
        <GalleryView galleryName='Film' getUser={this.props.getUser} toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.props.images.film}/>
      );
    }
    else if (this.state.pageShown === 'gallery4') {
      return (
        <GalleryView galleryName='Weddings' getUser={this.props.getUser} toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} pageShown={this.state.pageShown} images={this.props.images.other}/>
      );
    }
    else {
      return (
        <div className={this.props.classes.wrapper} >
          <HighlightCarousel reel={this.state.carousel1} title='Real Estate' speed={8000} onClick={() => {            
            this.handlePageChange('gallery1');
          }}/>
          <HighlightCarousel reel={this.state.carousel2} title='Portraits' speed={9000} onClick={() => {
            this.handlePageChange('gallery2');
          }}/>
          <HighlightCarousel reel={this.state.carousel3} title='Film' speed={10000} onClick={() => {
            this.handlePageChange('gallery3');
          }}/>
          <HighlightCarousel reel={this.state.carousel4} title='Weddings' speed={7000} onClick={() => {
            this.handlePageChange('gallery4');
          }}/>
        </div>
      );
    }
  }
}


export default withStyles(styles)(Gallery);
