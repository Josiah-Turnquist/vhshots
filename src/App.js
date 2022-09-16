import './App.css';

// Pages
import Home from './pages/Home';


function App({ signOut, user }) {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <Home />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
