// React
import React from 'react';

// Material UI & Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

import { useTheme } from '@mui/material/styles';

// Contact Me
import photographer from '../../assets/photographer.jpg'

import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ classes }) => {
  const theme = useTheme();

  return (
    <div className={classes.infoWrapper} style={{zIndex: 1000}}>
      <div className={classes.profile}>
      </div>
      <Typography className={classes.infoText} variant="h3">
        Will Van Holten Photography
      </Typography>

      <div className={classes.profileQuote} >
        <img src={photographer} alt="profile" className={classes.profileImg}></img>
        <Typography variant="h4" style={{marginLeft: '16px'}}>
          Photography has been an amazing opportunity for me to get more involved in my school, my community and my profession. 
          I am a Bay Area native College Park Alumni with 8 years of photo and video experience. 
          My prior experience ranges from event photography with organizations such as Meals On Wheels and The Fallen Heroes to wedding videography and senior portraits. 
          I have 8 years of experience with the Adobe suite as well as experience with Final Cut pro.
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
  );
}

export default withStyles(styles)(NavigationBar);
