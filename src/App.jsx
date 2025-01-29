import React from 'react';
import './components/Navbar/Navbar';
import Navigationbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhoAreWe from './components/WhoAreWe/WhoAreWe';

const App = () => {
  return (
    <div>
      <Navigationbar />
      <Hero />
      <WhoAreWe />
    </div>
  );
}

export default App;
