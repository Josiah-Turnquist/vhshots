import React from 'react';
import './App.css';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Info/Info';


// import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import NavigationBar from './components/NavigationBar/NavigationBar';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      <NavigationBar />
    </div>
  );
}

// With Authenticator
export default (App);