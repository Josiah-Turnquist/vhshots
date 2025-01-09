import React from 'react';
import './App.css';

// import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import NavigationBar from './components/NavigationBar/NavigationBar';

// SEO
import { Helmet } from 'react-helmet';


Amplify.configure(awsExports);


function App({ signOut, user }) {
  return (
    <div className="App">
      <Helmet>
        <title>Van Holten Photography</title>
        <meta name="description" content="Van Holten Shots (vhshots) is a talented Bay Area and San Francisco based photographer. Specializing in real estate, family, couples, and grad photos, Will keeps himself at the top of the game." />
        <meta name="keywords" content="photographer, photography, real estate, family photos, bay area, san francisco, memories" />
        <meta name="author" content="Will Van Holten" />
        <meta property="og:title" content="Van Holten Photography" />
        <meta property="og:description" content="Van Holten Shots (vhshots) is a stunning Bay Area and San Francisco based photographer. Specializing in real estate, family, couples, and grad photos, Will keeps himself at the top of the game." />
        <meta property="og:image" content="https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/info/profile.jpg" />
        <meta property="og:url" content="https://vhshots.com/" />
        <meta name="twitter:title" content="Van Holten Shots" />
        <meta name="twitter:description" content="Van Holten Shots (vhshots) is a stunning Bay Area and San Francisco based photographer. Specializing in real estate, family, couples, and grad photos, Will keeps himself at the top of the game." />
        <meta name="twitter:image" content="https://vhshots-storage-4c3a7943-admin02206-dev.s3.us-west-1.amazonaws.com/public/info/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <NavigationBar />
    </div>
  );
}

// With Authenticator
export default (App);