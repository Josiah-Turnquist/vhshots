// React
import React from "react";

// Material UI & Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

// Contact Me
import photographer from '../../assets/photographer.jpg'
import { DataStore } from '@aws-amplify/datastore';
import { ContactForm } from '../../models';

import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import awsExports from '../../aws-exports';
import { 
  ContactFormCreateForm 
} from '../../ui-components';
import awsTheme from '../../aws-theme';
import { ThemeProvider } from '@aws-amplify/ui-react';

// Custom Theme
// const theme = {
//   name: 'my-theme',
//   tokens: {
//     components: {
//       button: {
//         primary: {
//           backgroundColor: '#E16B4C',
//           _hover: { backgroundColor: '#D15B3C' },
//           _active: { backgroundColor: '#F15B3C' },
//           _disabled: { backgroundColor: '#F1cB3C' },
//           _focus: { backgroundColor: '#912B0C', borderColor: '#912B0C', boxShadow: 'none' },
//           // fontFamily: 'Helvetica',
//           // fontSize: 'calc(1rem + 0.2vw)',
//           // fontWeight: 500,
//           // textTransform: 'uppercase',
//           // letterSpacing: '2px', 
//         },
//         borderRadius: '32px',
//         width: '100vw',
//       },
//     },
//     colors: {
//       font: {
//         default: {
//           variable: 'Helvetica',
//           textTransform: 'uppercase',
//         },
//         primary: '#FFFFFF',
//         secondary: '#FFFFFF'
//       },
//     },
//   },
// };

// If we decide to make this more interactive then it should probably be a ReactComponent.
const NavigationBar = ({ classes }) => {
  const initialValues = {
    Name: "Josiah",
    Email: "josiahturnq@gmail.com",
    Subject: "This is new",
    Message: "Well this is weird.",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Subject, setSubject] = React.useState(initialValues.Subject);
  const [Message, setMessage] = React.useState(initialValues.Message);
  let modelFields = {
    Name,
    Email,
    Subject,
    Message,
  };

  const handleContactMeButtonClick = () => {
    console.log('Tried to contact photographer.');

    // await DataStore.save(new SendGridEmail(modelFields));
    //   if (onSuccess) {
    //     onSuccess(modelFields);
    //   }
    //   if (clearOnSuccess) {
    //     resetStateValues();
    //   }

    DataStore.save(new ContactForm(modelFields))
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      console.error(error);
    })
};

  return (
    <div className={classes.infoWrapper} style={{zIndex: 1000}}>
      <Typography className={classes.infoText} variant="h1" style={{ fontSize: '24px' }}>
        Contact Me
      </Typography>

      <ThemeProvider theme={awsTheme} width='75vw'>
        <ContactFormCreateForm width='70vw' fontFamily="Helvetica" marginRight='38px'/>
      </ThemeProvider>

      {/* <input className={classes.inputs} placeholder="Email" />
      <input className={classes.inputs} placeholder="Name" />
      <input className={classes.inputs} placeholder="Where are you looking to shoot?" />
      <input className={classes.inputs} placeholder="How did you hear about us?" />

        <button className={classes.submissionButton} onClick={handleContactMeButtonClick} sx={{ margin: '10px' }}> 
          <Typography variant="submissionButton" color='primary'>
            submit 
          </Typography>
        </button> */}


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
