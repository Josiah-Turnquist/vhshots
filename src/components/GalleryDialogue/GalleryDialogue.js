import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// Images
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Components
import GalleryImage from '../GalleryImage';

// Icons
import AutoAwesomeMosaicRoundedIcon from '@mui/icons-material/AutoAwesomeMosaicRounded';

// AWS
import { Storage } from "@aws-amplify/storage"

// Styles
import styles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GalleryDialogue({ galleryData }) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= galleryData.length) {
      setLoading(false);
    }
  }


  const handleClickOpen = () => {
    setOpen(true);
    // setLoading(!loading);

    // console.log('uploading...');
    // Storage.put("test.txt", "Hello").then(() => {
    //   console.log('Uploaded successfully?');
    // })

    
  };

  const handleClose = () => {
    setOpen(false);
    // setLoading(!loading);
  };

  return (
    <div>
      <Button 
        variant="contained" 
        sx={{mt: 4}} 
        endIcon={loading ? <AutoAwesomeMosaicRoundedIcon /> : <CircularProgress size="20px" color="inherit" />}
        onClick={handleClickOpen}
        loading={loading}
        >
        Photo Gallery
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        // fullWidth
        maxWidth='md'
      >
        <DialogTitle>{"Van Holten Shots Gallery"}</DialogTitle>
        <DialogContent>
        <ImageList variant="masonry" gap={10}>
          {galleryData.map((item) => (
            <ImageListItem key={item.img}>
              <GalleryImage item={item}/>
              {/* <img
                style={{display: loading ? "none" : "block"}}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onLoad={imageLoaded}
              /> */}
            </ImageListItem>
          ))}
        </ImageList>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default (styles)(GalleryDialogue);
