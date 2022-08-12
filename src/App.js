import './App.css';

// Theme
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Pages
import Home from './pages/Home';

// AWS
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App">
        {/* <h1>Hello {user.username}</h1> */}
        {/* <button onClick={signOut}>Sign out</button> */}
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default withAuthenticator(App);
