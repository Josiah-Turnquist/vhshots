// React
import React, { useState, useEffect } from 'react';


// Material UI & Styles
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
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
import { Fade } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import theme from '../../theme';
import Home from '../../pages/Home';
import Gallery from '../../pages/Gallery';
import Info from '../../pages/Info';
import Profile from '../../pages/Profile';

// Nav Drawer
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Components
import { Typography } from '@mui/material';

// Icons

import CollectionsIcon from '@mui/icons-material/Collections';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import LoginIcon from '@mui/icons-material/Login';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import AppsIcon from '@mui/icons-material/Apps';
// import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
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
import { DataUsage } from '@mui/icons-material';
import { sizeHeight } from '@mui/system';

// AWS & Auth 
import { Auth } from 'aws-amplify';
import { Storage } from "@aws-amplify/storage"

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

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ classes }) => {
  const [value, setValue] = React.useState(0);
  const [user, setUser] = React.useState({
    username: null,
    attributes: {
      email: null,
    }
  });
  const [mounted, setMounted] = React.useState(false);
  const [images, setImages] = React.useState({
    estate: {
      all: [],
      carousel: [],
      column1: [],
      column2: [],
      column3: [],
      column1Length: 0,
      column2Length: 0,
      column3Length: 0,
    },
    portraits: {
      all: [],
      carousel: [],
      column1: [],
      column2: [],
      column3: [],
      column1Length: 0,
      column2Length: 0,
      column3Length: 0,    
    },
    film: {
      all: [],
      carousel: [],
      column1: [],
      column2: [],
      column3: [],
      column1Length: 0,
      column2Length: 0,
      column3Length: 0,
    },
    other: {
      all: [],
      carousel: [],
      column1: [],
      column2: [],
      column3: [],
      column1Length: 0,
      column2Length: 0,
      column3Length: 0,
    }
  })


  const fetchAllCarousels = () => {
    // Load Carousel 1
    Storage.list('carousel1/', { pageSize : 'ALL' })
    .then(response => {
      images.estate.carousel = response.results;
    })

    // Load Carousel 2
    Storage.list('carousel2/', { pageSize : 'ALL' })
    .then(response => {
      images.portraits.carousel = response.results;
    })

    // Load Carousel 3
    Storage.list('carousel3/', { pageSize : 'ALL' })
    .then(response => {
      images.film.carousel = response.results;
    })

    // Load Carousel 4
    Storage.list('carousel4/', { pageSize : 'ALL' })
    .then(response => {
      images.other.carousel = response.results;
    })

    // setImages({...images});
  }

  const fetchAllImages = () => {
    // Load Gallery 1
    try {
      Storage.list('estate/', { pageSize : 'ALL' })
      .then(response => {
        response.results.sort(function(a,b){
          return new Date(b.lastModified) - new Date(a.lastModified);
        });
        images.estate.all = response.results;
      })
    } catch (error) {
      console.log('error loading gallery:', error);
    }

    // Load Gallery 2
    try {
      Storage.list('portraits/', { pageSize : 'ALL' })
      .then(response => {
        response.results.sort(function(a,b){
          return new Date(b.lastModified) - new Date(a.lastModified);
        });
        images.portraits.all = response.results;
      })
    } catch (error) {
      console.log('error loading gallery:', error);
    }

    // Load Gallery 3
    try {
      Storage.list('film/', { pageSize : 'ALL' })
      .then(response => {
        response.results.sort(function(a,b){
          return new Date(b.lastModified) - new Date(a.lastModified);
        });
        images.film.all = response.results;
      })
    } catch (error) {
      console.log('error loading gallery:', error);
    }

    // Load Gallery 4
    try {
      Storage.list('other/', { pageSize : 'ALL' })
      .then(response => {
        response.results.sort(function(a,b){
          return new Date(b.lastModified) - new Date(a.lastModified);
        });
        images.other.all = response.results;
      })
    } catch (error) {
      console.log('error loading gallery:', error);
    }
  }

  // if not mounted, mount
  if (!mounted) {
    fetchAllCarousels()

    fetchAllImages()

    console.log('images');
    console.log(images);
    setMounted(true);
  }


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Device Type
  const [width, setWidth] = useState(window.innerWidth);

  // Menu Drawer (for mobile)
  const [drawer, setDrawer] = React.useState(false);

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

  if (user.username === null) {
    try {
      Auth.currentUserInfo().then((user) => {
        if (user) {
          console.log(`current user - ${user.attributes.email}`);
          setUser(user);
        }
        else {
          // this.setState({pageShown: 'login', loadingPage: false})
        }
      })
    } catch (error) {
      console.log('error getting user:', error);
    }
  }

  const getUser = () => {
    console.log(`getting user - ${user.username}`);
    return user;
  }

  const changeUser = ( data ) => {
    console.log(`setting new user - ${user.username}`);
    setUser({
      username: data.username,
      attributes: {
        email: data.attributes.email,
      }
    });
  }

  const deleteImage = (image) => {
    // TODO - Delete Image
    console.log(`Deleting image ${image}`);

    // delete from S3
    // ...storage.remove...

    // delete from 'all' 
    
    
    // reorganize columns

  }

  const getPageTitle = (value) => {
    if (isMobile) {
      if (value === 0) {
        return 'Home';
      } else if (value === 1) {
        return 'Gallery';
      }
      else if (value === 2) {
        return 'NULL PAGE';
      }
      else if (value === 3) {
        return 'Info';
      }
      else if (value === 4) {
        return 'Profile';
      }
    }
  }

  const toggleDrawer = (open) => (event) => {
    // console.log('click type: ', event.type);
    console.log('click open: ', !drawer);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(!drawer);

    // fetchAllCarousels()
    // .then(reponse => {
    //   console.log('Fetched all slider images.');
      console.log(images);
    // })
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {setValue(0)}} sx={{ height: '50px', color: 'gray' }}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={text} sx={{color: 'white'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Gallery', 'Info', user.username != null ? 'Profile' : 'Login'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {setValue(index === 0 ? index+1 : index + 2)}} sx={{ height: '50px', color: 'gray' }}>
              <ListItemIcon>
                {index === 0 ? <CollectionsIcon /> : index === 1 ? <DataUsageIcon /> : <PersonOutlineIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{color: 'white'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      // Mobile View
      <>
        <ScrollController>
          <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{flexDirection: 'row', background: '#1f1f25C0', backdropFilter: 'blur(5px)'}}>
            <div className={classes.navContainerMobile} key="nav">

                <Fade in={true} timeout={{ enter: 3000, exit: 1000 }} style={{ transitionDelay:  '10ms', paddingLeft: '4px' }}>
                  <Logo className={classes.logo} />
                </Fade>

                <Fade in={true} timeout={{ enter: 1500, exit: 1000 }} style={{ transitionDelay:  '0ms'}}>
                  <div onClick={toggleDrawer()} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#2A2A2E', borderRadius: '32px', height: '58px', alignItems: 'center', padding: '0px 2px 0px 21px', margin: '3px 14px 0px 12px'}}>
                    <Typography variant="h1" style={{ padding: 0, letterSpacing: '2px' }}>
                      {getPageTitle(value)}
                    </Typography>

                    <IconButton aria-label="profile" color="primary" style={{ margin: '0px 8px' }}>
                      <MenuIcon className={ classes.icons } fontSize="large" />
                      <Drawer
                        anchor={'top'}
                        open={drawer}
                        onClose={toggleDrawer(false)}
                      >
                        {list('top')}
                      </Drawer>
                    </IconButton>
                  </div>
                </Fade>
          </div>
        </AppBar>
      </ScrollController>
        {value === 0 && <Home />}
        {value === 1 && <Gallery getUser={getUser} deleteImage={deleteImage} images={images}/>}
        {value === 3 && <Info getUser={getUser} />}
        {value === 4 && <Profile userData={user} getUser={getUser} setUser={changeUser} />}
        </>
    );  
  } else return (
    // Web View
    <>
    <ScrollController>
      <AppBar position='sticky' component='nav' className={classes.navContainer} sx={{ flexDirection: 'row', background: theme.palette.background.overlay, backdropFilter: 'blur(5px)' }}>
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
              <StyledTab label={user.username != null ? 'Profile' : 'Login'} sx={{width: 'calc(121.5px + 0.1vw)', letterSpacing: '2px', fontSize: 'calc(1rem + 0.2vw)'}}/>
            </StyledTabs>
          </Box>
        </Box>
      </AppBar>
    </ScrollController>
    {value === 0 && <Home />}
    {value === 1 && <Gallery getUser={getUser} deleteImage={deleteImage} images={images}/>}
    {value === 3 && <Info getUser={getUser} />}
    {value === 4 && <Profile userData={user} getUser={getUser} setUser={changeUser} />}
    </>

  );
}
  
export default withStyles(styles)(NavigationBar);
