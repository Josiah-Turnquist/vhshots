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
// import { withStyles } from '@mui/styles';
// import styles from './styles';

// aws
import { Storage } from "@aws-amplify/storage"

// Styled Divs with MUI
// import { styled } from '@mui/material/styles';

class Info extends React.Component {
  constructor (props, classes) {
    super(props);
    this.state = {
      // width: 0,
      height: 0,
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

    // Window size 
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

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

  resize() {
    if (this.state.width !== window.innerWidth) {
        this.setState({width: window.innerWidth});
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }


  render() {
    return (
      <div>
        {window.innerWidth > 650 && <div style={{background: 'linear-gradient(180deg, #181818 10% 98%, rgb(32 32 37) 100% 73%)', textAlign: '-webkit-center', width: '100%', height: '80vh', maxHeight: '500px'}}>
          <Typography variant="h1">
            About Will Van Holten
          </Typography>

          {/* 325 degrees */}
          <div style={{background: 'linear-gradient(205deg, rgba(41, 41, 41, 0.48), rgba(41, 41, 41, 0))', maxWidth: '800px', top: '0px', height: 'calc(100% - 140px)', margin: '0px 55px 0px 55px', position: 'relative', display: 'flex'}}> {/*325 or 162 */ }
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
              style={{height: '100%', position: 'relative', filter: 'drop-shadow(5px 8px 3px rgba(0, 0, 0, 0.25))'}} 
              className="profile"
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/info/profile.jpg`} 
              alt='img of william' 
              key='profile image'
            />
          </div>
        </div>}
        {window.innerWidth <= 650 && <div style={{background: 'linear-gradient(180deg, #181818 10% 98%, rgb(32 32 37) 100% 73%)', textAlign: '-webkit-center', width: '100%', paddingBottom: '60px'}}>
          <Typography variant="h1">
            About Will Van Holten
          </Typography>

          <div style={{background: 'linear-gradient(325deg, rgba(41, 41, 41, 0.48), rgba(41, 41, 41, 0))', maxWidth: '325px', top: '0px', position: 'relative', display: 'flex', flexDirection: 'column'}}> {/*325 or 162 */ }
            <div style={{width: '100%', margin: '0 0 6% 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
              style={{position: 'relative', filter: 'drop-shadow(5px 8px 3px rgba(0, 0, 0, 0.25))', width: '100%', maxWidth: '360px', marginTop: '10px', alignSelf: 'center'}} 
              className="profile"
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/info/profile.jpg`} 
              alt='img of william' 
              key='profile image'
            />
          </div>
        </div>}

        <Typography variant="h2" margin={'50px 0 0 0'}>
          Partnerships
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
          {this.state.partnershipsLoaded === true && <img style={{marginTop: '10px'}} src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${this.state.partnerships[2].key}`} alt='partnership1'/>}
          {this.state.partnershipsLoaded === true && <img style={{marginTop: '10px'}} src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${this.state.partnerships[1].key}`} alt='partnership2'/>}
        </div>

        <Typography variant="h2" margin={'50px 0 10px 0'}>
          Collaborations
        </Typography>
        <div style={{display: 'flex', justifyContent: 'space-evenly', marginBottom: '65px'}}>
          {this.state.collaborationsLoaded === true && <img src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/${this.state.collaborations[1].key}`} alt='collaboration1'/>}
        </div>

        <div style={{background: 'linear-gradient(180deg, rgb(32 32 37) 0%, #181818 1%, #181818 99%, rgb(32 32 37) 100%)', width: '100%', paddingBottom: '80px'}}>
          <Typography variant="h1" padding={'50px 0px'}>
            My Principles
          </Typography>

          {window.innerWidth > 650 &&  <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '5px', height: '250px', flexDirection: 'row'}}> 
            <img   
              style={{width: '350px', objectFit: 'cover', height: '250px', top: 0, right: 0, position: 'relative'}}
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/my-principles/banner1.jpg`}
              alt='SOME PRINCIPLE'
              key='banner1 image'
            />
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '3%', height: '100%'}}>
              <Typography variant="h2" style={{textAlign: 'left', padding: '10px 30px'}}>
                CREATIVITY
              </Typography>
              <Typography variant="body2" style={{textAlign: 'left', maxWidth: '600px', fontSize: 'clamp(10px, 1.55vw, 16px)', padding: '10px 30px'}}>
                Through my lens, I strive to unveil the essence of each subject, infusing it with a unique artistic perspective that sparks imagination and evokes emotions. I believe that creativity is the key to unlocking truly memorable photographs, and I am dedicated to crafting visual masterpieces that leave a lasting impression on all who behold them.
              </Typography>
            </div>
          </div>}

          {window.innerWidth <= 650 &&  <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '5px', height: '250px', flexDirection: 'column'}}> 
            <img   
              style={{width: '100%', objectFit: 'cover', height: '250px'}}
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/my-principles/banner1.jpg`}
              alt='SOME PRINCIPLE'
              key='banner1 image'
            />
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '3%', width: '100%', top: '-30px', position: 'relative', height: '100%'}}>
              <Typography variant="h2" style={{textAlign: 'center', width: '100vw', padding: '10px 30px'}}>
                CREATIVITY
              </Typography>
              {/* <Typography variant="body2" style={{textAlign: 'left', maxWidth: '600px', fontSize: 'clamp(10px, 1.55vw, 16px)', padding: '10px 30px'}}>
                Through my lens, I strive to unveil the essence of each subject, infusing it with a unique artistic perspective that sparks imagination and evokes emotions. I believe that creativity is the key to unlocking truly memorable photographs, and I am dedicated to crafting visual masterpieces that leave a lasting impression on all who behold them.
              </Typography> */}
            </div>
          </div>}

          {window.innerWidth > 650 && <div style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-start', marginTop: '40px', alignItems: 'flex-start', height: '250px'}}> 
            <img   
              style={{width: '350px', objectFit: 'cover', height: '250px', top: 0, right: 0, position: 'relative'}}
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/my-principles/banner2.jpg`}
              alt='SOME PRINCIPLE'
              key='banner2 image'
            />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '3%', height: '100%'}}>
              <Typography variant="h2" style={{textAlign: 'right', padding: '10px 30px'}}>
                PERSPECTIVE
              </Typography>
              <Typography variant="body2" style={{textAlign: 'right', maxWidth: '610px', fontSize: 'clamp(10px, 1.55vw, 16px)', padding: '10px 30px'}}>
              With a keen eye for architectural details and a deep understanding of how angles can enhance the visual impact, I meticulously compose each shot to highlight the unique features and character of every home I photograph. By carefully selecting the perfect vantage points, I create captivating images that not only showcase the beauty of the property but also convey a sense of space, depth, and ambiance. 
              </Typography>
            </div>
          </div>}

          {window.innerWidth <= 650 &&  <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '40px', height: '250px', flexDirection: 'column'}}> 
            <img   
              style={{width: '100%', objectFit: 'cover', height: '250px'}}
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/my-principles/banner2.jpg`}
              alt='SOME PRINCIPLE'
              key='banner2 image'
            />
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '3%', width: '100%', top: '-30px', position: 'relative', height: '100%'}}>
              <Typography variant="h2" style={{textAlign: 'center', width: '100vw', padding: '10px 30px'}}>
                PERSPECTIVE
              </Typography>
              {/* <Typography variant="body2" style={{textAlign: 'left', maxWidth: '600px', fontSize: 'clamp(10px, 1.55vw, 16px)', padding: '10px 30px'}}>
                Through my lens, I strive to unveil the essence of each subject, infusing it with a unique artistic perspective that sparks imagination and evokes emotions. I believe that creativity is the key to unlocking truly memorable photographs, and I am dedicated to crafting visual masterpieces that leave a lasting impression on all who behold them.
              </Typography> */}
            </div>
          </div>}

          {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
            <img 
              style={{width: '350px', objectFit: 'cover', height: '250px', top: 0, right: 0, position: 'relative'}}
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/my-principles/banner2.jpg`} 
              alt='SOME PRINCIPLE' 
              key='banner2 image'
            />
            <div style={{width: '100%', margin: '0 0 5% 0', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'column'}}>
                <Typography variant="h2" style={{maxWidth: '100%'}}>
                  PERSPECTIVE
                </Typography>
                <Typography variant="body2" style={{maxWidth: '100%'}}>
                  I'm passionate photographer who finds joy in collaborating with creative minds to capture extraordinary moments. 
                </Typography>
                <Typography variant="body2" style={{maxWidth: '100%'}}>
                  By day, I channel my expertise into high-quality construction work, while my artistic pursuits in photography allow me to explore my creativity and connect with others on a profound level. 
                </Typography>
              </div>
            </div>
          </div> */}



          {window.innerWidth > 650 && <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '40px', height: '250px'}}> 
            <img   
              style={{width: '350px', objectFit: 'cover', height: '250px', top: 0, right: 0, position: 'relative'}}
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/my-principles/banner3.jpg`}
              alt='SOME PRINCIPLE'
              key='banner3 image'
            />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '1%', height: '100%'}}>
              <Typography variant="h2" style={{textAlign: 'left', padding: '10px 30px 10px 30px'}}>
                COMMITMENT
              </Typography>
              <Typography variant="body2" style={{textAlign: 'left', maxWidth: '700px', fontSize: 'clamp(10px, 1.55vw, 16px)', padding: '10px 30px'}}>
                My unwavering commitment to my clients is a core of my business. I get it. Every moment is precious - and deserves to be captured with precision and artistry. From weddings and events to intimate portraits, I approach each assignment with dedication and empathy, ensuring that I understand and fulfill the vision of my clients. With a blend of technical expertise and a genuine passion for storytelling, I aim to create photographs that not only freeze moments in time but also evoke the emotions and preserve the essence of those cherished occasions for a lifetime.
              </Typography>
            </div>
          </div>}

          {window.innerWidth <= 650 &&  <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop: '40px', height: '250px', flexDirection: 'column'}}> 
            <img   
              style={{width: '100%', objectFit: 'cover', height: '250px'}}
              src={`https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/my-principles/banner3.jpg`}
              alt='SOME PRINCIPLE'
              key='banner3 image'
            />
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '3%', width: '100%', top: '-30px', position: 'relative', height: '100%'}}>
              <Typography variant="h2" style={{textAlign: 'center', width: '100vw', padding: '10px 30px'}}>
                COMMITMENT
              </Typography>
              {/* <Typography variant="body2" style={{textAlign: 'left', maxWidth: '600px', fontSize: 'clamp(10px, 1.55vw, 16px)', padding: '10px 30px'}}>
                Through my lens, I strive to unveil the essence of each subject, infusing it with a unique artistic perspective that sparks imagination and evokes emotions. I believe that creativity is the key to unlocking truly memorable photographs, and I am dedicated to crafting visual masterpieces that leave a lasting impression on all who behold them.
              </Typography> */}
            </div>
          </div>}
        </div>
        <Footer />
      </div>
    );
  }
}

export default (Info);
