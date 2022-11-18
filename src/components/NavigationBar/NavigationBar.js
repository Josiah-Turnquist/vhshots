// React
import React from 'react';

// Material UI & Styles
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import styles from './styles';

import { useTheme } from '@mui/material/styles';

// Animation
import { Fade } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';


// Icons
import IconButton from '@mui/material/IconButton';
// import HomeIcon from '@mui/icons-material/Home';
// import AppsIcon from '@mui/icons-material/Apps';
// import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import MenuIcon from '@mui/icons-material/Menu';
// import ListIcon from '@mui/icons-material/List';
// import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
// import Menu from '@mui/icons-material/Menu';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
// import InfoIcon from '@mui/icons-material/Info';
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';

// Logo
import { ReactComponent as Logo } from '../../assets/logo.svg';

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ isMobile, classes }) => {
  // const theme = useTheme();
  const handleHomeButtonClick = ({}) => {
      // Complete this later.
  };

  const handleProfileButtonClick = ({}) => {
      // Complete this later.
  };

  const handleServicesButtonClick = ({}) => {
      // Complete this later.
  };

  const handleGalleryButtonClick = ({}) => {
    // Complete this later.
    console.error('Pushed gallery');
  };

  function ScrollController(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 0 : 0,
    });
  }

  if (isMobile) {
    return (
      <ScrollController>
      <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{flexDirection: 'row', background: '#1f1f25C0'}}>
      <div className={classes.navContainerMobile} key="nav">

          <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
            <Logo className={classes.logo} />
          </Fade>

          <Fade in={true} timeout={{ enter: 1500, exit: 1000 }} style={{ transitionDelay:  '0ms'}}>
            <IconButton aria-label="profile" sx={{mt: '5px', mr: '5px'}} color="primary" onClick={handleProfileButtonClick}>
              <MenuIcon className={ classes.icons } fontSize="large"/>
            </IconButton>
          </Fade>
    </div>
    </AppBar>
    </ScrollController>
    );  
  } else return (
    <ScrollController>
      <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{flexDirection: 'row', background: '#1f1f25C0'}}> {/*linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(31,31,35,0.5) 5%, rgba(31,31,35,1) 95%);*/}
        <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
          <Button className={ classes.navButton } onClick={handleHomeButtonClick} sx={{ width: '100px', margin: '10px' }}> HOME </Button>
        </Fade>
        <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
          <Button className={ classes.navButton } onClick={handleHomeButtonClick} sx={{ width: '100px', margin: '10px' }}> INFO </Button>
        </Fade>
        <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
          <Logo className={classes.logo}/>
        </Fade>
        <Fade in={true} timeout={{ enter: 2500, exit: 1000 }} style={{ transitionDelay:  '90ms'}}>
          <Button className={ classes.navButton } onClick={handleProfileButtonClick} sx={{ width: '100px', margin: '10px' }}> gallery </Button>
        </Fade>
        <Fade in={true} timeout={{ enter: 2500, exit: 1000 }} style={{ transitionDelay:  '90ms'}}>
          <Button className={ classes.navButton } onClick={handleProfileButtonClick} sx={{ width: '100px', margin: '10px' }}> LOGIN </Button>
        </Fade>
      </AppBar>
    </ScrollController>
  );
}
  
export default withStyles(styles)(NavigationBar);
