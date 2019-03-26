import React from 'react';
import Home from './components/Home/App'
import AppBar from './components/AppBar/App'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className = 'global-layout'>
        <AppBar/>
        <div>
          <Home/>
        </div>
      </div>
    );
  }
}

export default App;
