import React from "react";
import Slider from "react-slick";
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./_SlickSliderStyle";
import { withStyles } from '@mui/styles';
import styles from './styles';
import { Typography } from '@mui/material';

import img1 from '../../assets/carshot.jpg'
import img2 from '../../assets/albumshot.jpg'
import img3 from '../../assets/couples.jpg'


function HighlightCarousel({ classes, title }) {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 600,
    arrows: false,
    adaptiveHeight: false,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  return (

    <div className={classes.root}>
      <div className={classes.wrapper}>
        <SliderWrapper className={classes.carousel}>
          <Slider {...settings}>
            <div >
              <img
                className={classes.images}
                src={img1}
                alt='image1'
               />
            </div>
            <div >
            <img
                className={classes.images}
                src={img2}
                alt='image1'
               />
            </div>
            <div >
            <img
                className={classes.images}
                src={img3}
                alt='image1'
               />
            </div>
          </Slider>
        </SliderWrapper>

        <Typography variant="h4" sx={{fontSize: 'calc(0.75rem + 0.6vw)'}}>
        {title}
      </Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(HighlightCarousel)