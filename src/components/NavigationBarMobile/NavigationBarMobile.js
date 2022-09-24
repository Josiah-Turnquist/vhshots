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

// Logo
import { ReactComponent as Logo } from '../../assets/VHLogo.svg';

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ classes }) => {
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

        <div className={classes.navButtonsContainer} key="nav-buttons">
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
        </div>

        <hr className={classes.line} />
    </div>
  );
}

export default withStyles(styles)(NavigationBar);
