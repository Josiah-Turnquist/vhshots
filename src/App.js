import './App.css';

// Pages
import Home from './pages/Home';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <Home />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default withAuthenticator(App);
