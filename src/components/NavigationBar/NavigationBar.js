// React
import React, { useState, useEffect } from 'react';

// Material UI & Styles
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import styles from './styles';

// Animation
import { Fade } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import theme from '../../theme';
import Home from '../../pages/Home';
import Gallery from '../../pages/Gallery/Gallery';
import Info from '../../pages/Info/Info';
import Profile from '../../pages/Profile/Profile';

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
// Logo
import { ReactComponent as Logo } from '../../assets/logo.svg';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box'

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: theme.palette.primary.contrastText,
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    ":hover": {
      color: 'white',
    },
    transition: 'color .4s ease',
  }),
);

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ classes, changeRoute }) => {
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      console.error('visiting home');
    } else if (newValue === 1) {
      console.error('visiting gallery');
    } 
  };

  // Device Type
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 600;

  if (isMobile) {
    return (
      // Mobile View
      <>
        <ScrollController>
          <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{flexDirection: 'row', background: '#1f1f25C0', backdropFilter: 'blur(5px)'}}>
            <div className={classes.navContainerMobile} key="nav">

                <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '10ms'}}>
                  <Logo className={classes.logo} />
                </Fade>

                <Fade in={true} timeout={{ enter: 1500, exit: 1000 }} style={{ transitionDelay:  '0ms'}}>
                  <IconButton aria-label="profile" sx={{mt: '5px', mr: '5px'}} color="primary">
                    <MenuIcon className={ classes.icons } fontSize="large"/>
                  </IconButton>
                </Fade>
          </div>
        </AppBar>
      </ScrollController>
        {value === 0 && <Home width/>}
        {value === 1 && <Gallery />}
        {value === 2 && <Info />}
        {value === 3 && <Profile />}
        </>
    );  
  } else return (
    // Web View
    <>
    <ScrollController>
      <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{flexDirection: 'row', background: theme.palette.background.overlay, backdropFilter: 'blur(5px)'}}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ bgcolor: 'transparent'}}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="Navigation Bar"
            >
              <StyledTab label="HOME" sx={{width: 'calc(121.5px + 0.1vw)', letterSpacing: '2px', fontSize: 'calc(1rem + 0.2vw)'}}/>
              <StyledTab label="GALLERY" sx={{width: 'calc(121.5px + 0.1vw)', letterSpacing: '2px', fontSize: 'calc(1rem + 0.2vw)'}}/>
                <Logo width={60} height={60} padding={0}/>
              <StyledTab label="INFO" sx={{width: 'calc(121.5px + 0.1vw)', letterSpacing: '2px', fontSize: 'calc(1rem + 0.2vw)'}}/>
              <StyledTab label="login" sx={{width: 'calc(121.5px + 0.1vw)', letterSpacing: '2px', fontSize: 'calc(1rem + 0.2vw)'}}/>
            </StyledTabs>
          </Box>
        </Box>
      </AppBar>
    </ScrollController>
    {value === 0 && <Home width/>}
    {value === 1 && <Gallery />}
    {value === 2 && <Info />}
    {value === 3 && <Profile />}
    </>
  );
}
  
export default withStyles(styles)(NavigationBar);
