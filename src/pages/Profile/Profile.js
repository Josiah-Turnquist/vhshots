/* eslint-disable no-unused-vars */
// React & MUI
import React, { useState, useEffect } from 'react';

// Components
import Button from '@mui/material/Button';
import Footer from '../../components/Footer/Footer';
import GalleryDialogue from '../../components/GalleryDialogue/GalleryDialogue';

// Theme
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../theme';

// Loader & Icons
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PublishIcon from '@mui/icons-material/Publish';

// Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

// Styled Divs with MUI
import { styled } from '@mui/material/styles';
import { AccessibleForwardTwoTone } from '@mui/icons-material';

// Login
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { shadows } from '@mui/system';

import { Auth } from 'aws-amplify';
import { Storage } from "@aws-amplify/storage"

const Div = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});
const ButtonLink = styled('button')({
  background: 'none',
  border: 'none',
  padding: 0,
  color: '#07b',
  cursor: 'pointer',
});
const FormDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.form, 
  paddingLeft: '50px', 
  paddingRight: '50px', 
  paddingTop: '40px', 
  borderRadius: '8px',
});

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});


const LoginForm = ({ toggleLoading, handlePageChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    // phonenumber: '(123) 456-1234',
  });
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  async function handleLogin(event) {
    event.preventDefault();
    toggleLoading();

    try {
        const user = await Auth.signIn(values.email, values.password).then(() => {
          console.log('Successfully signed in');
          handlePageChange('profile');
        });
    } catch (error) {
        toggleLoading(); // stop loading!!
        handlePageChange('login');
        console.log('Error signing in: ', error);
    }
  }

  const changePageTo = (page) => {
    handlePageChange(page);
  }

  return (
    <FormDiv>
        <Typography variant="h4" sx={{ margin: '20px', marginTop: '40px', color: 'silver'}}>
        Van Holten Shots
        </Typography>
      {/* // Email */}
      <FormControl sx={{ width: '250px' }} variant="outlined">
        <TextField
          id="outlined-required"
          name="email"
          onChange={handleChange}
          label="Email"
        />
      </FormControl>

      {/* // Password */}
      <FormControl sx={{ width: '250px' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>

          <OutlinedInput
            id="password"
            name="password"
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* // Phone */}
        {/* <FormControl sx={{ mt: 0, width: '250px' }} variant="outlined">
          <InputLabel htmlFor="formatted-phone-number">Phone Number</InputLabel>
          
          <OutlinedInput
            id="formatted-phone-number"
            value={values.phonenumber}
            onChange={handleChange}
            name="phonenumber"
            inputComponent={TextMaskCustom}
            label="phonenumber"
          />
        </FormControl> */}

        <Typography variant="h6" sx={{color: 'silver'}}>
        Don't have an account? <ButtonLink onClick={() => {changePageTo('register')}}>Register</ButtonLink>
        </Typography>
        <Button type="submit" onClick={handleLogin} sx={{ margin: '18px', marginTop: '14px', padding: '10px' }}>
            LOGIN
        </Button>
      </FormDiv>
  );
}

const RegisterForm = ({ toggleLoading, handlePageChange }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
    phonenumber: '',
  });

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  
  const changePageTo = (page) => {
    handlePageChange(page);
  }

  async function handleRegister(event) { 
    // TODO: Make this toggle the "Register" button to load, not the entire screen. That way the input fields will save whatever the user typed when an error occurs.
    event.preventDefault();
    toggleLoading();

    try {
      const { user } = await Auth.signUp({
        username: values.email,
        password: values.password,
        confirmPassword: values.confirmpassword,
        phoneNumber: values.phonenumber,
        autoSignIn: { // optional - enables auto sign in after user is confirmed
          enabled: true,
        }
      }).then(() => {
        console.log('Successfully created account!');
        handlePageChange('register');
      });
    } catch (error) {
      toggleLoading(); // stop loading!!
      handlePageChange('register');
      console.log('Error creating user:', error);
    }
  }

  return (
    <FormDiv>
        <Typography variant="h4" sx={{ margin: '20px', marginTop: '40px', color: 'silver'}}>
        Van Holten Shots
        </Typography>
      {/* // Email */}
      <FormControl sx={{ width: '250px' }} variant="outlined">
        <TextField
          id="outlined-required"
          name="email"
          onChange={handleChange}
          label="Email"
        />
      </FormControl>

      {/* // Password */}
      <FormControl sx={{ width: '250px' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>

          <OutlinedInput
            id="password"
            name="password"
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* // Confirm Password */}
        <FormControl sx={{ width: '250px' }} variant="outlined">
          <InputLabel htmlFor="confirm-password">Confirm Password</InputLabel>

          <OutlinedInput
            id="confirm-password"
            name="confirmpassword"
            onChange={handleChange}
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm-Password"
          />
        </FormControl>

        {/* // Phone */}
        <FormControl sx={{ mt: 0, width: '250px' }} variant="outlined">
          <InputLabel htmlFor="formatted-phone-number">Phone Number</InputLabel>
          
          <OutlinedInput
            id="formatted-phone-number"
            value={values.phonenumber}
            onChange={handleChange}
            name="phonenumber"
            inputComponent={TextMaskCustom}
            label="phonenumber"
          />
        </FormControl>
        <Typography variant="h6" sx={{color: 'silver'}}>
        Already have an account? <ButtonLink onClick={() => {changePageTo('login')}}>Login</ButtonLink>
        </Typography>
        <Button type="submit" onClick={handleRegister} sx={{margin: 2}}>
            Register
        </Button>
      </FormDiv>
  );
}

const NonGuest = ({ toggleLoading, handlePageChange, username }) => {
  async function handleSignOut(event) {
    try {
      await Auth.signOut().then(() => {
        toggleLoading();
        handlePageChange('login');
      });
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  return (
    <Div>
      <Typography variant="h3">
        Hello, {username}
      </Typography>

      <Button sx={{margin: '5%', color: 'white'}} variant="outlined" component="span" onClick={handleSignOut}> 
        Sign Out
      </Button>
    </Div>
  );
}

const Developer = ({ toggleLoading, username, handlePageChange }) => {
  async function handleSignOut(event) {
    try {
      await Auth.signOut().then(() => {
        toggleLoading();                // Toggle loading icon
        handlePageChange('login');      // Next cycle should switch screens to login
        console.log('signing out.');    // debug
      });
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }

  async function onChange(e) {
    for (let f = 0; f < e.target.files.length; f++) {
      const file = e.target.files[f];
      console.log(`Uploading File ${f+1} / ${e.target.files.length}`);

      try {
        await Storage.put(`${e.target.name}/${file.name}`, file, {
          contentType: "image/png", // contentType is optional
          acl: "public-read",
          completeCallback: (event) => {
            console.log(`Successfully uploaded ${event.key}`);
          },
          progressCallback: (progress) => {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          },
          errorCallback: (err) => {
              console.error('Unexpected error while uploading', err);
          }
        });
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    }
  }

  return (
    <Div sx={{mt: '30px'}}>
        <Typography variant="h3">
          Welcome back, {username}.
        </Typography>
        <Typography variant="h6" sx={{ color: 'silver', mb: '20%', paddingX: '5vw', textAlign: 'center'}}>
        This is your virtual playground. You'll find everything you need to manipulate your portfolio here.
        </Typography>
      <input
            accept="image/*"
            style={{ display: 'none' }}
            id="estate-upload"
            multiple
            type="file"
            onChange={onChange}
            name="estate"
          />
        <label htmlFor="estate-upload" >
          <Button sx={{width: '240px', color: 'black', m: '10px', display: 'flex', justifyContent: 'flex-start'}} variant="contained" component="span">
            <PublishIcon />
            &#160;&#160;Estate Gallery
          </Button>
        </label> 
        <input
            accept="image/*"
            style={{ display: 'none' }}
            id="portraits-upload"
            multiple
            type="file"
            onChange={onChange}
            name="portraits"
          />
        <label htmlFor="portraits-upload">
          <Button sx={{width: '240px', color: 'black', m: '10px', display: 'flex', justifyContent: 'flex-start'}} variant="contained" component="span">
            <PublishIcon />
            &#160;&#160;Portrait Gallery
          </Button>
        </label> 
        <input
            accept="image/*"
            style={{ display: 'none' }}
            id="film-upload"
            multiple
            type="file"
            onChange={onChange}
            name="film"
          />
        <label htmlFor="film-upload">
          <Button sx={{width: '240px', color: 'black', m: '10px', display: 'flex', justifyContent: 'flex-start'}} variant="contained" component="span">
            <PublishIcon />
            &#160;&#160;Film Gallery
          </Button>
        </label> 
        <input
            accept="image/*"
            style={{ display: 'none' }}
            id="other-upload"
            multiple
            type="file"
            onChange={onChange}
            name="other"
          />
        <label htmlFor="other-upload">
          <Button sx={{width: '240px', color: 'black', m: '10px', display: 'flex', justifyContent: 'flex-start'}} variant="contained" component="span">
            <PublishIcon />
            &#160;&#160;Other Gallery
          </Button>
        </label> 
      {/* <Button variant="raised" component="span" onClick={console.log('clicked')} sx={{margin: '12px'}} >
        Print Results
      </Button> */}

      <Button sx={{margin: '5%', color: 'white'}} variant="outlined" component="span" onClick={handleSignOut}> 
        Sign Out
      </Button>
    </Div>
  );
}

class Profile extends React.Component {
  constructor (props, classes) {
    super(props);
    // this.handleClick = this.handleClick.bind(this); // Otherwise React can't find this.

    this.state = {
      user: {
        username: null,
        attributes: {
          email: null,
        }
      },
      classes: classes,
      pageShown: '',
      loadingPage: true,
    };
  }

  componentDidMount() {
    try {
      Auth.currentUserInfo().then((user) => {
        if (user) {
          console.log(`current user - ${user.attributes.email}`);
          this.setState({user, pageShown: 'profile', loadingPage: false})
        }
        else {
          this.setState({pageShown: 'login', loadingPage: false})
        }
      })
    } catch (error) {
      console.log('error getting user:', error);
    }
  }

  handlePageChange = (page) => {
    console.log('going to page: ', page);

    if (page === 'profile') {
      try {
        Auth.currentUserInfo().then((user) => {
          if (user) {
            console.log(`current user - ${user.attributes.email}`);
            this.setState({user, pageShown: 'profile', loadingPage: false})
          }
          else {
            this.setState({user: {username: null}, pageShown: 'login', loadingPage: false})
          }
        })
      } catch (error) {
        console.log('error getting user:', error);
      }
    } else {
      this.setState({user: {username: null}, pageShown: page, loadingPage: false})
    }
  }

  toggleLoading = () => {
    this.setState({loadingPage: !this.loadingPage})
    // console.log('event.target.value');
  }

  render() {
    if (this.state.loadingPage) {
      return (
        <div >
          <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '30vh'}}>
            <CircularProgress size='10vw'/>
          </Box>
      </div>
      );
    }
    // otherwise it will be this.state.pageShown === profile
    else if (this.state.user?.attributes?.email === 'Josiahturnq@gmail.com') return (
      <div className={this.props.classes.wrapper}>

      <Developer toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} username='Jay' />
      </div>
    )
    else if (this.state.user?.attributes?.email === 'Dubveeh22@gmail.com') return (
      <div className={this.props.classes.wrapper}>

      <Developer toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} username='William' />
      </div>
    )
    else if (this.state.pageShown === 'profile') return (
      <div className={this.props.classes.wrapper}>
      <NonGuest toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange} username='Client Portal' />
      </div>
    )
    else if (this.state.pageShown === 'register') return (
      <div className={this.props.classes.wrapper}>
        <RegisterForm toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange}/>
      </div>
    )
    else /*if (this.state.pageShown === 'login')*/ return (
      <div className={this.props.classes.wrapper}>
        {/* <p>Username - {this.state.user?.username}</p>
        <p>Page - {this.state.pageShown}</p> */}
        <LoginForm toggleLoading={this.toggleLoading} handlePageChange={this.handlePageChange}/>
      </div>
    )
  }
}

export default withStyles(styles)(Profile);
