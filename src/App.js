import React from 'react';
import { Navbar } from './components/layout/Navbar';
import Routes from './Routes';
import Icons from './components/icons/Icons';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <div className="Content">
          <Routes />
        </div>
      </div>
      <a className="Back-To-Top" href="#root">
        {Icons.BackToTop}
      </a>
    </div>
  );
};

export default App;
