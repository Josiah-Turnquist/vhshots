// React & MUI
import React, { useState, useEffect } from 'react';

// Components
import Footer from '../../components/Footer/Footer';
import GalleryDialogue from '../../components/GalleryDialogue/GalleryDialogue';
import { Typography } from '@mui/material';

// Theme
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../theme';

// Icons
// import CircularProgress from '@mui/material/CircularProgress';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Time-Based Guarantee
import AccessibleIcon from '@mui/icons-material/Accessible'; // Want to be sure your kids get to see what you look like? We keep your photos 'til your old and crunchy, so nobody misses out on family memories.
import LandslideIcon from '@mui/icons-material/Landslide'; // Got a wild idea? I like to live on the edge.
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler'; // Extreme Athlete? Let's catch your best moments.
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'; // Family Event? Let's make it unforgettable together.

// Styles
import { withStyles } from '@mui/styles';
import styles from './styles';

// aws
import { Storage } from "@aws-amplify/storage"

// Styled Divs with MUI
import { styled } from '@mui/material/styles';

class Info extends React.Component {
  constructor (props, classes) {
    super(props);
    this.state = {
      partnerships: [
      ],
      partnershipsLoaded: false,
      partnershipsError: false,
      collaborations: [
      ],
      collaborationsLoaded: false,
      collaborationsError: false,
    };
  }

  componentDidMount() {
    console.log('mounting logos');

    // Load Partnerships
    Storage.list('partnerships/', { pageSize : 'ALL' })
      .then(response => {this.setState({ 
        partnerships: response.results,
        partnershipsLoaded: true,
      }); console.log(response.results)})
      .catch(response => this.setState({
        partnershipsError: true
      }))

    // Load Collaborations
    Storage.list('collaborations/', { pageSize : 'ALL' })
      .then(response => this.setState({ 
        collaborations: response.results,
        collaborationsLoaded: true,
      }))
      .catch(response => this.setState({
        collaborationsError: true
      }))
  }


  render() {
    return (
      <div>
        <div style={{background: 'linear-gradient(180deg, #181818 10% 98%, rgb(32 32 37) 100% 73%)', width: '100%', height: '80vh', maxHeight: '500px'}}>
          <Typography variant="h1">
            About Will Van Holten
          </Typography>

          <div style={{background: 'linear-gradient(325deg, rgba(41, 41, 41, 0.48), rgba(41, 41, 41, 0))', top: '0px', height: 'calc(100% - 140px)', margin: '0px 55px 0px 55px', position: 'relative', display: 'flex', justifyContent: 'space-between'}}> {/*325 or 162 */ }
            <div style={{width: '100%', margin: '0 0 5% 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
                <Typography variant="h2" style={{maxWidth: '450px'}}>
                  Biography
                </Typography>
                <Typography variant="body2" style={{maxWidth: '450px'}}>
                I'm passionate photographer who finds joy in collaborating with creative minds to capture extraordinary moments. 
                </Typography>
                <Typography variant="body2" style={{maxWidth: '450px'}}>
                By day, I channel my expertise into high-quality construction work, while my artistic pursuits in photography allow me to explore my creativity and connect with others on a profound level. 
                </Typography>
              </div>
            </div>
            <img 
              style={{height: '100%', top: 0, right: 0, position: 'relative', filter: 'drop-shadow(5px 8px 3px rgba(0, 0, 0, 0.25))'}} 
              className="profile"
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/info/profile.jpg`} 
              alt='img of william' 
              key='profile image'
            />
          </div>
        </div>

        <Typography variant="h2" margin={'50px 0 10px 0'}>
          Partnerships
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
          {this.state.partnershipsLoaded === true && <img src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${this.state.partnerships[2].key}`} alt='partnership1'/>}
          {this.state.partnershipsLoaded === true && <img src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${this.state.partnerships[1].key}`} alt='partnership2'/>}
        </div>

        <Typography variant="h2" margin={'50px 0 10px 0'}>
          Collaborations
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '65px'}}>
          {this.state.collaborationsLoaded === true && <img src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${this.state.collaborations[1].key}`} alt='collaboration1'/>}
        </div>

        <div style={{background: 'linear-gradient(0deg, #181818 10% 98%, rgb(32 32 37) 100% 73%)', width: '100%', height: '80vh', maxHeight: '500px'}}>
          <Typography variant="h1" padding={'50px 0px'}>
            My Principles
          </Typography>
        </div>
      </div>
    );
  }
}

export default (Info);
