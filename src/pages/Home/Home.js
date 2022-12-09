// React & MUI
import React, { useState, useEffect } from 'react';

// Components
import Footer from '../../components/Footer';

// import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';


// Icons
// import CircularProgress from '@mui/material/CircularProgress';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

// Styled Divs with MUI
import { styled } from '@mui/material/styles';

// AWS
// import { Storage } from "@aws-amplify/storage"

const Home = ({ classes }) => {
  const Div = styled('div')``; // If you want to style a div

  const [loading, setLoading] = React.useState(1);
  const [images, setImages] = useState([]);

  function handleClick () {
    setLoading(!loading);
    // Storage.put("test.txt", "Hello").then(() => {
    //   console.log('Uploaded successfully?');
    // })

  }

  // https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/estate/exterior2.JPG
  var galleryData = [];

  useEffect( () => {
  // Storage.list('estate/') // for listing ALL files without prefix, pass '' instead
  //   .then(response => {
      console.log('fetching images');
      // for (let i = 0; i < response.length; i++) {
      //   galleryData[i] = `https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${response[i].key}`;
      // }
      // response.forEach(item => {
      //   if (item.key !== '') {
      //     galleryData.push({img: `https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${item.key}`, title: 'asd'})
      //   }
      // })
      galleryData.push({img: 'https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/home_showcase/image1.jpg', title: 'asd'})
      galleryData.push({img: 'https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/home_showcase/image2.jpg', title: 'asd'})
      galleryData.push({img: 'https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/home_showcase/image3.jpg', title: 'asd'})
      galleryData.push({img: 'https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/home_showcase/image4.jpg', title: 'asd'})

      console.log();
      setImages(galleryData);
    // })
    // .catch(err => console.log(err));
  }, [])

  // Device Type
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 600;
  return (
    <div className={classes.root}>
    <div className={classes.contentWrapper} >

      <Grid container justifyContent={{xs: "center", md: 'space-between'}} rows={1}>
        <img 
        src={images[0]?.img}
        alt='pictures'
        className={classes.photo}
        />
      <img 
        src={images[1]?.img}
        alt='pictures'
        className={classes.photo}
      />
      <img 
        src={images[2]?.img}
        alt='pictures'
        className={classes.photo}
      />
      {width < 900 && <img 
        src={images[3]?.img}
        alt='pictures'
        className={classes.photo}
      />}
      </Grid>

    </div>
    <Footer />
  </div>
  );

};

export default withStyles(styles)(Home);
