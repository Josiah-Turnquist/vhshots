// React
import React from 'react';

// Material UI & Styles
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import styles from './styles';

// Animation
import { Fade } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import theme from '../../theme';


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

import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


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

function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ bgcolor: 'transparent'}}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="Navigation Bar"
        >
          <StyledTab label="HOME" />
          <StyledTab label="INFO" />
            <Logo width={60} height={60} padding={0}/>
          <StyledTab label="PRICING" />
          <StyledTab label="PROFILE" />
        </StyledTabs>
      </Box>
    </Box>
  );
}

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
        <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{flexDirection: 'row', background: '#1f1f25C0', backdropFilter: 'blur(5px)'}}>
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
      <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{flexDirection: 'row', background: theme.palette.background.overlay, backdropFilter: 'blur(5px)'}}>
        <CustomizedTabs />
      </AppBar>
    </ScrollController>
  );
}
  
export default withStyles(styles)(NavigationBar);
