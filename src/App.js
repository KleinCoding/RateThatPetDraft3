import React from 'react';
import NavBar from './Components/Navbar/NavBar'
import ScrollContainer from './Components/ScrollContainer/ScrollContainer'
import routes from './routes.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      {routes}
      <br/>
      <br/>
      <div><h1>This is the App.js</h1></div>
      <ScrollContainer />
    </div>
  );
}

export default App;
