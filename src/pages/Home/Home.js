// React & MUI
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

// Components
import NavigationBar from '../../components/NavigationBar';
import GalleryDialogue from '../../components/GalleryDialogue';

// Theme
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

// Icons
// import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// Styles
import styles from './styles';

// Images
import hero from '../../assets/profileshot2.jpg'
import landscape from '../../assets/carshot.jpg'
import grad from '../../assets/gradpose.jpg'
import couples from '../../assets/couples.jpg'
import profile from '../../assets/profileshot3.jpg'
import photographer from '../../assets/photographer.jpg'
import maintenance1 from '../../assets/maintenance_dark.JPG'
import maintenance2 from '../../assets/maintenance_light.JPG'

// Transitions
import { Fade } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// Contact Me
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// Data
import { headline } from './data';

// Styled Divs with MUI
import { styled } from '@mui/material/styles';

// AWS
import { Storage } from "@aws-amplify/storage"
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);



const Home = ({ classes }) => {
  console.info('This is the dev branch!');

  const Div = styled('div')``; // If you want to style a div

  const [offline, setOffline] = React.useState(0);
  const [loading, setLoading] = React.useState(1);
  function handleClick () {
    setLoading(!loading);
    Storage.put("test.txt", "Hello").then(() => {
      console.log('Uploaded successfully?');
    })

  }
  var galleryData = [];
  Storage.list('') // for listing ALL files without prefix, pass '' instead
    .then(result => {
      result.forEach(item => {
        if (item.key != '') {
          galleryData.push({img: `https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${item.key}`, title: 'asd'})
        }
      })
    })
    .catch(err => console.log(err));

  // Device Type
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      console.log(width);
  }

  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;
  if (offline) {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <header className="App-header"
          style={{ backgroundImage: isMobile ? `url(${maintenance2})` : `url(${maintenance1})`, height: '100vh', width: '100vw', backgroundSize: 'cover', backgroundBlendMode: 'overlay', backgroundPosition: '50% 10%' }}>

            <Box // Gray Box
              sx={{
                position: 'fixed',
                bgcolor: theme.palette.secondary.main,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
                mb: '35vh',
                opacity: '95%',
                width: {xs: '85%', sm: '50%', md: '400px'},
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center' },
                  m: 3,
                  top: '100px',
                }}
              >
                <Box // DOWN FOR MAINTENANCE BOX
                  sx={{
                    mt: 0,
                    mb: 1.5,
                    p: 1.0,
                    backgroundColor: alpha(theme.palette.primary.dark, 0.2),
                    borderRadius: '5px',
                    color: 'primary.main',
                    fontWeight: 'medium',
                    display: 'flex',
                    fontSize: 12,
                    alignItems: 'center',
                    '& svg': {
                      fontSize: 21,
                      mr: 0.5,
                    },
                  }}
                >
                  <ErrorOutlineIcon />
                  DOWN FOR MAINTENANCE
                </Box>
                <Box component="span" sx={{ fontSize: 16, color: 'silver', mt: 1 }}>
                  Check out our gallery in the meantime
                </Box>
                {/* <Button 
                  variant="contained" 
                  sx={{mt: 4}} 
                  endIcon={loading ? <AutoAwesomeMosaicRoundedIcon /> : <CircularProgress size="20px" color="inherit" />}
                  onClick={handleClick}
                  loading={loading}
                  >
                  Photo Gallery
                </Button> */}
                <GalleryDialogue galleryData={galleryData}/>
              </Box>
            </Box>
          </header>
        </ThemeProvider>
      </div>
    ); 
  } else {
    return (
        <div className={classes.root}>
          <div className={classes.heroWrapper}>
            <Fade in={true} timeout={{ enter: 1300, exit: 1000 }} style={{ transitionDelay:  '1000ms'}}>
              <img src={hero} className={classes.hero} alt="profile" />
            </Fade>
            <Fade in={true} timeout={{ enter: 2000, exit: 1000 }} style={{ transitionDelay:  '720ms'}}>
              <Typography className={classes.heroText} variant="h2" color='primary'>
                {headline}
              </Typography>
            </Fade>
          </div>

          <NavigationBar />

          <div className={classes.firstShowcaseWrapper} style={{backgroundImage: 'url(' + landscape + ')', backgroundPosition: 'center', backgroundSize: 'cover', borderTopLeftRadius: '26px', borderTopRightRadius: '26px'}}>
            <Typography className={classes.firstShowcaseText} variant="h3" color='primary'>
              LANDSCAPES

            </Typography>
            <div className={classes.overlayShadow} />
          </div>

          <div className={classes.secondShowcaseWrapper} style={{backgroundImage: 'url(' + grad + ')', backgroundPositionY: '25%', backgroundSize: 'cover', borderTopLeftRadius: '26px', borderTopRightRadius: '26px'}}>
            <Typography className={classes.secondShowcaseText} variant="h3" color='primary'>
               GRADS
            </Typography>
            <div className={classes.overlayShadow} />
          </div>

          <div className={classes.firstShowcaseWrapper} style={{backgroundImage: 'url(' + couples + ')', backgroundPositionY: '25%', backgroundSize: 'cover', borderTopLeftRadius: '26px', borderTopRightRadius: '26px'}}>
            <Typography className={classes.firstShowcaseText} variant="h3" color='primary'>
               COUPLES
            </Typography>
            <div className={classes.overlayShadow} />
          </div>

          <div className={classes.secondShowcaseWrapper} style={{backgroundImage: 'url(' + profile + ')', backgroundPositionY: '25%', backgroundSize: 'cover', borderTopLeftRadius: '26px', borderTopRightRadius: '26px'}}>
            <Typography className={classes.secondShowcaseText} variant="h3" color='primary'>
               PROFILE
            </Typography>
            <div className={classes.overlayShadow} />
          </div>

          <div className={classes.infoWrapper} style={{zIndex: 1000}}>
            <div className={classes.profile}>
            </div>
            <Typography className={classes.infoText} variant="h3">
              Will Van Holten Photography
            </Typography>

            <div className={classes.profileQuote} >
              <img src={photographer} alt="profile" className={classes.profileImg}></img>
              <Typography variant="h4" style={{marginLeft: '16px'}}>
                <q>When you like doing what you love, loving what you do is what you love to do every day.</q>
              </Typography>
            </div>

            <Typography className={classes.infoText} variant="h5" color='primary'>
              <IconButton aria-label="Instagram" href="https://www.instagram.com/wvhshots/?hl=en">
                <InstagramIcon fontSize='large' color='primary' />
              </IconButton>
              <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/">
                <LinkedInIcon fontSize='large' color='primary' />
              </IconButton>
              <IconButton aria-label="Email">
                <EmailIcon fontSize='large' color='primary' />
              </IconButton>
            </Typography>
          </div>


        </div>
    );
  }
};

export default withAuthenticator(withStyles(styles)(Home));
