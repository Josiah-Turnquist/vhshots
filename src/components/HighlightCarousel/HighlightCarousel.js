import React from "react";
import Slider from "react-slick";
// Import css files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./_SlickSliderStyle";
import { withStyles } from '@mui/styles';
import styles from './styles';
import { Typography } from '@mui/material';

function HighlightCarousel( props ) {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: props.speed,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 600,
    arrows: false,
    adaptiveHeight: true,
    lazyLoad: 'progressively', // change to on demand for pre-loaded.
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
  };

  return (

    <div className={props.classes.root}>
      <div className={props.classes.wrapper} onClick={props.onClick}>
        <SliderWrapper className={props.classes.carousel}>
          <Slider {...settings}>
              {props.reel.map((image) => {
                return <div className={props.classes.imageWrapper} key={`${image.key}-div`}>
                  <img 
                  className={props.classes.images}
                  src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${image.key}`}
                  alt={image.key}
                  key={`${image.key}-image`}
                  />
                </div>
              })}
          </Slider>
        </SliderWrapper>

        <Typography variant="h4" sx={{fontSize: 'calc(0.75rem + 0.6vw)'}}>
        {props.title}
      </Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(HighlightCarousel)