// React
import React from "react";

// Material UI & Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

// Contact Me
// import photographer from '../../assets/photographer.jpg'

import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'josiahturnq@gmail.com', // Change to your recipient
  from: 'will@vhshots.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ classes }) => {
  const handleContactMeButtonClick = () => {
    console.log('Tried to contact photographer.');

    sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
    
    // Complete this later.
};

  return (
    <div className={classes.infoWrapper} style={{zIndex: 1000}}>
      <div className={classes.profile}>
      </div>

      <Typography className={classes.infoText} variant="h3">
        Contact Me
      </Typography>

      <input className={classes.inputs} placeholder="Email" />
      <input className={classes.inputs} placeholder="Name" />
      <input className={classes.inputs} placeholder="Where are you looking to shoot?" />
      <input className={classes.inputs} placeholder="How did you hear about us?" />

        <button className={classes.submissionButton} onClick={handleContactMeButtonClick} sx={{ margin: '10px' }}> 
          <Typography variant="submissionButton" color='primary'>
            submit 
          </Typography>
        </button>


      <Typography className={classes.infoText} variant="h5" color='primary'>
        <IconButton aria-label="Instagram" href="https://www.instagram.com/wvhshots/?hl=en">
          <InstagramIcon fontSize='large' color='primary' />
        </IconButton>
        <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/will-van-holten-94329a193">
          <LinkedInIcon fontSize='large' color='primary' />
        </IconButton>
        <IconButton aria-label="Email" href="mailto:will@vhshots.com">
          <EmailIcon fontSize='large' color='primary' />
        </IconButton>
      </Typography>
    </div>
  );
}

export default withStyles(styles)(NavigationBar);
