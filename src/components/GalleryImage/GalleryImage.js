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

// Styles
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function GalleryDialogue({ item }) {
  const [loading, setLoading] = React.useState(true);
  console.log(item.img);

  const imageLoaded = () => {
    setLoading(false);
  }

  return (
    <img
        style={{display: loading ? "none" : "block"}}
        src={`${item.img}?w=248&fit=crop&auto=format`}
        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        onLoad={imageLoaded}
      />
  );
}


export default withStyles(styles)(GalleryDialogue);
