import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Main from './components/Main/Main';
import AboutWork from './components/AboutWork/AboutWork';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__main-part">
        <LeftSidebar />
        <Main />
        <AboutWork />
      </div>
    </div>
  );
}

export default App;
