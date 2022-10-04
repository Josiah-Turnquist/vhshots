// React
import React from 'react';

// Material UI & Styles
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import styles from './styles';

import { useTheme } from '@mui/material/styles';

// Animation
import { Fade } from '@mui/material';

// Icons
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import Menu from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

// Logo
import { ReactComponent as Logo } from '../../assets/logo.svg';

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ isMobile, classes }) => {
  const theme = useTheme();
  const handleHomeButtonClick = ({}) => {
      // Complete this later.
  };

  const handleProfileButtonClick = ({}) => {
      // Complete this later.
  };

  const handleServicesButtonClick = ({}) => {
      // Complete this later.
  };

  // if (isMobile) {
  //   return (
  //     <div className={classes.navContainer} key="nav" >
  //         <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
  //           <Logo className={classes.logo}  />
  //         </Fade>
  
  //         <div className={classes.navButtonsContainer} key="nav-buttons">
  //           <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
  //           </Fade>
  //         </div>
  
  //         <hr className={classes.line} />
  //     </div>
  //   );  
  // }
  return (
    <div className={classes.navContainer} key="nav">
      <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
        <Button className={ classes.navButton } onClick={handleHomeButtonClick} sx={{ margin: '10px' }}> HOME </Button>
      </Fade>
      <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
        <Button className={ classes.navButton } onClick={handleHomeButtonClick} sx={{ margin: '10px' }}> INFO </Button>
      </Fade>
      <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
        <Logo className={classes.logo}/>
      </Fade>
      <Fade in={true} timeout={{ enter: 2500, exit: 1000 }} style={{ transitionDelay:  '90ms'}}>
        <Button className={ classes.navButton } onClick={handleProfileButtonClick} sx={{ margin: '10px' }}> GALLERY </Button>
      </Fade>
      <Fade in={true} timeout={{ enter: 2500, exit: 1000 }} style={{ transitionDelay:  '90ms'}}>
        <Button className={ classes.navButton } onClick={handleProfileButtonClick} sx={{ margin: '10px' }}> LOGIN </Button>
      </Fade>

        {/* <div className={classes.navButtonsContainer} key="nav-buttons">
          <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
            <Button className={ classes.navHomeButton } fontFamily={theme.typography.button} variant="outlined" onClick={handleHomeButtonClick} disableRipple='true'> HOME </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 2500, exit: 1000 }} style={{ transitionDelay:  '90ms'}}>
            <Button className={ classes.navButton } onClick={handleProfileButtonClick}> PROFILE </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 2000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
            <Button className={ classes.navButton } onClick={handleServicesButtonClick}> SERVICES </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 1500, exit: 1000 }} style={{ transitionDelay:  '0ms'}}>
            <IconButton aria-label="profile" className={ classes.iconButtons } color="primary" onClick={handleProfileButtonClick}>
              <Menu className={ classes.icons } variant='outlined' fontSize="large"/>
            </IconButton>
          </Fade>
        </div> */}

        {/* <hr className={classes.line} /> */}
    </div>
  );
}
  
export default withStyles(styles)(NavigationBar);
