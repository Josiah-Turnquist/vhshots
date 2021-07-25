// React
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// Components
import NavigationBar from '../../components/NavigationBar';

// Styles
import styles from './styles';

// Images
import hero from '../../assets/profileshot2.jpg'
import landscape from '../../assets/carshot.jpg'
import grad from '../../assets/gradpose.jpg'
import photographer from '../../assets/photographer.jpg'

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

const Home = ({ classes }) => {
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
              <IconButton color="foreground" aria-label="Instagram" href="https://www.instagram.com/wvhshots/?hl=en">
                <InstagramIcon fontSize='large' color='primary' />
              </IconButton>
              <IconButton color="foreground" aria-label="LinkedIn" href="https://www.linkedin.com/in/">
                <LinkedInIcon fontSize='large' color='primary' />
              </IconButton>
              <IconButton onClick="copyToClipboard('#p1');return false" color="foreground" aria-label="Email">
                <EmailIcon fontSize='large' color='primary' />
              </IconButton>
            </Typography>
          </div>


        </div>
    );
};

export default withStyles(styles)(Home);
