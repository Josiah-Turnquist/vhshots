import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./_SlickSliderStyle";
import { withStyles } from '@mui/styles';
import styles from './styles';

import img1 from '../../assets/carshot.jpg'
import img2 from '../../assets/albumshot.jpg'
import img3 from '../../assets/couples.jpg'


function HighlightCarousel({ classes }) {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
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
        <h2>Carousel example</h2>

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
      </div>
    </div>
  );
}

export default withStyles(styles)(HighlightCarousel)