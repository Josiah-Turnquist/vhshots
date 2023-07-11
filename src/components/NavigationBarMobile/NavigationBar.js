// React
import React, { useState } from 'react';

// Material UI & Styles
import { Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

// Icons
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';

// Animation
import { Fade } from '@material-ui/core';

// Logo
import { ReactComponent as Logo } from '../../assets/vhlogo3.svg';

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ isMobile, classes }) => {

  const handleHomeButtonClick = ({}) => {
      // Complete this later.
      console.error('Pushed home');
  };

  function handleProfileButtonClick () {
      // Complete this later.
      console.error('Pushed profile');
  };

  const handleServicesButtonClick = ({}) => {
      // Complete this later.
      console.error('Pushed services');
  };

  return (
    <div className={classes.navContainer} key="nav">
        {/*<img
            key="nav-logo"
            className={classes.logo}
            src="../../assets/vhlogo.svg"
            alt={config.name}
        />*/}
        <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
          <Logo className={classes.logo} />
        </Fade>

        <div className={classes.navButtonContainer} key="nav-buttons">
          <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
            <Button className={ classes.navHomeButton } variant="outlined" onClick={handleHomeButtonClick}> HOME </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 2500, exit: 1000 }} style={{ transitionDelay:  '90ms'}}>
            <Button className={ classes.navButton } onClick={handleServicesButtonClick}> GALLERY </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 2000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
            <Button className={ classes.navButton } onClick={handleServicesButtonClick}> SERVICES </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 1500, exit: 1000 }} style={{ transitionDelay:  '0ms'}}>
            <IconButton aria-label="profile" className={ classes.iconButtons } color="primary" onClick={handleProfileButtonClick}>
              <AccountBoxRoundedIcon className={ classes.icons } fontSize="large"/>
            </IconButton>
          </Fade>
        </div>

        <hr className={classes.line} />
    </div>
  );
}

export default withStyles(styles)(NavigationBar);
