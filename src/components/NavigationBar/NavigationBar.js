// React
import React from 'react';

// Material UI & Styles
import Button from '@mui/material/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import { useTheme } from '@mui/material/styles';

// Animation
import { Fade } from '@material-ui/core';

// Logo
import { ReactComponent as Logo } from '../../assets/vhlogo3.svg';

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

        <div className={classes.navButtonContainer} key="nav-buttons">
          <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '180ms'}}>
            <Button className={ classes.navHomeButton } variant="outlined" onClick={handleHomeButtonClick} disableRipple='true'> HOME </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 2500, exit: 1000 }} style={{ transitionDelay:  '90ms'}}>
            <Button className={ classes.navButton } onClick={handleProfileButtonClick}> PROFILE </Button>
          </Fade>
          <Fade in={true} timeout={{ enter: 2000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
            <Button className={ classes.navButton } onClick={handleServicesButtonClick}> SERVICES </Button>
          </Fade>
        </div>

        <hr className={classes.line} />
    </div>
  );
}

export default withStyles(styles)(NavigationBar);
