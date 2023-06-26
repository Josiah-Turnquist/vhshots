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
      <img 
        className="image"
        style={{
          width: '100%', paddingBottom: '5px',
          backgroundColor: isLoaded ? 'transparent' : '#FFFFFF07',
        }} 
        src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${src}`} 
        alt='' 
        key={src}
        loading='lazy'
        onLoad={this.onImgLoad}
      /> 
    );
  }
}

// function getImageHeight (src) {
//   //                                            // 1200, 3600 portrait
//   let h = 0;
//   const gap = 11 * 4
//   Image.getSize(src, (width, height) => { 
//     let aspectRatio = width / height;           // 0.333333
//     h = ((window.innerWidth - gap) / 3) / aspectRatio;
//   })
//   return h;                                     // 100
// }

// class MyMasonryItem extends React.Component {
//   static getColumnSpanFromProps = ({ isFeatured }, getState) => {
//     if (isFeatured) {
//       return 2;
//     }
//     return 1;
//   }
//   static getHeightFromProps = (getState, props, columnSpan, columnGutter) => {
//     return IMAGE_HEIGHT + TITLE_HEIGHT + FOOTER_HEIGHT;
//   }

//   render() {
//     return <img 
//       style={{ maxWidth: '30vw' }}
//       src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${item.key}`} 
//       alt='' 
//     />
//   }
// }

// const PAGE_SIZE = 20;
// class GalleryView2 extends React.Component {
//   state = {
//     items: null,
//     hasMore: null,
//     isLoading: true,
//     hasNext: undefined,
//     hasNextPage: true,
//   }

//   componentDidMount() {
//     this.fetch()
//   }

//   loadNextPage = async () => { // load this into array that's kept in a higher component (navbar)
//     if (this.state.hasNextPage) {
//       let response = await Storage.list('estate/', {
//         pageSize: PAGE_SIZE,
//         nextToken: this.state.nextToken,
//       });

//       if (response.hasNextToken) {
//        this.state.nextToken = response.nextToken;
//       } else {
//         this.state.nextToken = undefined;
//         this.state.hasNextPage = false;
//       }
//       // render list items from response.results
//     }
//   };

//   fetch () {
//     // update isLoading flag appropriately
//     const additionalData = this.loadNextPage()
//     this.setState((prevState) => ({
//       items: prevState.items.concat(additionalData.items),
//       hasMore: additionalData.hasMore,
//     }))
//   }

//   getState = () => this.state

//   render () {
//     if (!this.state.items) { return }
//     const myArrayOfItems = [{ name: 'Hello' }, { name: 'World' }]

//     return (
//       <Div>
//         <IconButton aria-label="back button" size="large" style={{ backdropFilter: 'blur(5px)', backgroundColor: theme.palette.background.overlay, position: 'fixed', left: '11px', top: '85px'}} onClick={() => {handlePageChange('gallery')}}>
//           <WestIcon fontSize="inherit" style={{color: 'white', margin: '0px'}} />
//         </IconButton>
//         <Typography variant="h3">
//           {galleryName} Gallery
//         </Typography>

//         <Masonry
//           items={this.state.items}
//           itemComponent={(props) => (<MyMasonryItem />)}
//           alignCenter={true}
//           containerClassName="masonry"
//           layoutClassName="masonry-view"
//           pageClassName="masonry-page"
//           loadingElement={<span>Loading...</span>}
//           columnWidth={columnWidth}
//           numColumns={numColumns}
//           columnGutter={columnGutter}
//           hasMore={this.state.hasMore}
//           isLoading={this.state.isFetching}
//           onInfiniteLoad={this.fetch}
//           getState={this.getState}
//         />
//       </Div>
//     )
//   }
// }

class GalleryViewInner extends React.Component {
  constructor (props, classes) {
    super(props);
    this.state = {
      currentIndex: 0,
      hasMore: true,
      cap: this.props.images.length,
      lengthA: 0,
      column1: [

      ],
      lengthB: 0,
      column2: [

      ],
      lengthC: 0,
      column3: [

      ]
    };
  }

  componentDidMount() {
    this.fetch();
  }

  // addToColumn(size, column) {
  //   const index = this.state.currentIndex;
  //   if (column === 1) {}
  //   this.setState((prevState) => ({
  //     column1: prevState.column1.concat(this.props.images[index]),
  //     hasMore: (index !== this.state.cap),
  //   }))
  // }

  fetch() {
    // if (this.state.hasMore === false) {
    //   this.setState({ 
    //     hasMore: false,
    //   })
    //   return; // end function
    // } else {

      // Start chain reaction ONLY if there is at least one image
      if (this.state.cap > 0) {
        this.fetchNext();
        // this.setState((prevState) => ({
        //   column1: prevState.column1.concat(this.props.images[0]),
        //   hasMore: (this.state.currentIndex !== this.props.images.length),
        // }))
      }


      // let a = 0;
      // let b = 0;
      // let c = 0;
      // for (let i = this.state.currentIndex; i < this.props.images.length; i++) {
      //   if (a <= b && a <= c) {
      //     this.setState((prevState) => ({
      //       column1: prevState.column1.concat(this.props.images[i]),
      //       hasMore: (i !== this.props.images.length),
      //       lengthA: this.state.lengthA + 1,
      //     }))
      //     a += 1;
      //     console.log(`column A is now ${a}`);
      //   } else if ( b <= a && b <= c ) {
      //     this.setState((prevState) => ({
      //       column2: prevState.column2.concat(this.props.images[i]),
      //       hasMore: (i !== this.props.images.length),
      //       lengthB: this.state.lengthB + 1,
      //     }))
      //     b += 1;
      //     console.log(`column B is now ${b}`);
      //   } else {
      //     this.setState((prevState) => ({
      //       column3: prevState.column3.concat(this.props.images[i]),
      //       hasMore: (i !== this.props.images.length),
      //       lengthC: this.state.lengthC + 1,
      //     }))
      //     c += 1;
      //     console.log(`column C is now ${c}`);
      //   }
      // }
    // }

  }
  
  fetchNext = () => {
    console.log('fetching next');
    console.log(`size col 1: ${this.state.lengthA}`);
    console.log(`size col 2: ${this.state.lengthB}`);
    console.log(`size col 3: ${this.state.lengthC}`);
    if (this.state.hasMore) {
      if (this.state.lengthA <= this.state.lengthB && this.state.lengthA <= this.state.lengthC) {
        this.setState((prevState) => ({
          column1: prevState.column1.concat(this.props.images[this.state.currentIndex]),
        }))
        console.log('added to col a');
      } else if ( this.state.lengthB <= this.state.lengthA && this.state.lengthB <= this.state.lengthC ) {
        this.setState((prevState) => ({
          column2: prevState.column2.concat(this.props.images[this.state.currentIndex]),
        }))
        console.log('added to col b');
      } else {
        this.setState((prevState) => ({
          column3: prevState.column3.concat(this.props.images[this.state.currentIndex]),
        }))
        console.log('added to col c');
      }
    }
  }

  handleImageLoad = (size, column) => {
    console.error('LOADED WITHIN GALLERY');
    console.error('current index');
    console.error(this.state.currentIndex);
    console.error('cap');
    console.error(this.state.cap);
    if (column === 1) {
      this.setState({
        lengthA: this.state.lengthA + size,
        currentIndex: this.state.currentIndex + 1,
        hasMore: (this.state.currentIndex !== this.props.cap - 2 ? true : false),
      }, () => {
        if (this.props.images[this.state.currentIndex] !== undefined) {
          console.log(this.state.hasMore);
          this.fetchNext();
        }
      })
    } else if (column === 2) {
      this.setState({
        lengthB: this.state.lengthB + size,
        currentIndex: this.state.currentIndex + 1,
        hasMore: (this.state.currentIndex !== this.props.cap - 2 ? true : false),
      }, () => {
        if (this.props.images[this.state.currentIndex] !== undefined) {
          console.log(this.state.hasMore);
          this.fetchNext();
        }
      })    
    } else if (column === 3) {
      this.setState({
        lengthC: this.state.lengthC + size,
        currentIndex: this.state.currentIndex + 1,
        hasMore: (this.state.currentIndex !== this.state.cap - 2 ? true : false),
      }, () => {
        if (this.props.images[this.state.currentIndex] !== undefined) {
          console.log(this.state.hasMore);
          this.fetchNext();
        }
      })
    } else {
      console.error('column does not exist');
    }

  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
        <div style={{width: 'calc(33vw - 11px)'}}>
          {this.state.column1.map((item) => (
            <AtomicImage handleImageLoad={this.handleImageLoad} col={1} src={item.key} key={item.key}/>
          ))}
        </div>
        <div style={{width: 'calc(33vw - 11px)'}}>
          {this.state.column2.map((item) => (
            <AtomicImage handleImageLoad={this.handleImageLoad} col={2} src={item.key} key={item.key}/>
          ))}
        </div>
        <div style={{width: 'calc(33vw - 11px)'}}>
          {this.state.column3.map((item) => (
            <AtomicImage handleImageLoad={this.handleImageLoad} col={3} src={item.key} key={item.key}/>
          ))}
        </div>        
      </div>
    );
  }
}

// const GalleryView1 = ({ toggleLoading, handlePageChange, pageShown, galleryName, images }) => {
//   let a = 0;
//   let b = 0;
//   let c = 0;
//   for (let i = 0; i < images.length; i++) {
//     if ( a < b < c) {
//       a += getImageHeight(`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${images[i].key}`);
//       console.log(`column A is now ${a}`);
//     } else if ( b < a < c) {
//       b += getImageHeight(`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${images[i].key}`);
//       console.log(`column B is now ${a}`);
//     } else {
//       c += getImageHeight(`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${images[i].key}`);
//       console.log(`column C is now ${a}`);
//     }
//   }

//   return (
//     <Div>
//       <IconButton aria-label="back button" size="large" style={{ backdropFilter: 'blur(5px)', backgroundColor: theme.palette.background.overlay, position: 'fixed', left: '11px', top: '85px'}} onClick={() => {handlePageChange('gallery')}}>
//         <WestIcon fontSize="inherit" style={{color: 'white', margin: '0px'}} />
//       </IconButton>
//       <Typography variant="h3">
//         {galleryName} Gallery
//       </Typography>
      
//       <div class="gal" id="gal">
//         {images.map((item) => (
//           <div class="gal-item"> 
//             <img 
//               src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${item.key}`} 
//               alt='' 
//               key={item.eTag}
//             />
//           </div>
//       ))}
//       </div>
//     </Div>
//   );
  
// }

const GalleryView = ({ toggleLoading, handlePageChange, pageShown, galleryName, images }) => {

  // useEffect(() => {
  //   initLightboxJS("08E9-E32F-6E73-6368", "team");
  // });


  return (
    <Div>
      <IconButton aria-label="back button" size="large" style={{ backdropFilter: 'blur(5px)', backgroundColor: theme.palette.background.overlay, position: 'fixed', left: '11px', top: '85px', zIndex: 10}} onClick={() => {handlePageChange('gallery')}}>
        <WestIcon fontSize="inherit" style={{color: 'white', margin: '0px'}} />
      </IconButton>
      <Typography variant="h2" style={{ padding: '23px 0px 26px 0px' }}>
        {galleryName}
      </Typography>
      
      <GalleryViewInner images={[...images]}/>
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

  console.log(arr);
  console.log(sortedArray);
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
          <HighlightCarousel reel={this.state.carousel1} title='Real Estate' speed={8000} onClick={() => {            
            this.handlePageChange('gallery1');
          }}/>
          <HighlightCarousel reel={this.state.carousel2} title='Portraits' speed={9000} onClick={() => {
            this.handlePageChange('gallery2');
          }}/>
          <HighlightCarousel reel={this.state.carousel3} title='Film' speed={10000} onClick={() => {
            this.handlePageChange('gallery3');
          }}/>
          <HighlightCarousel reel={this.state.carousel4} title='Other' speed={7000} onClick={() => {
            this.handlePageChange('gallery4');
          }}/>
        </div>
      );
    }
  }
}


export default withStyles(styles)(Gallery);
