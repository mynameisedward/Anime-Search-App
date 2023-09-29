import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Main from './components/Main/Main';
import AboutWork from './components/AboutWork/AboutWork';
import { Routes, Route, Link } from 'react-router-dom';
import Loader from './components/Loader/Loader';


function App() {
    return (

        <div className="App">

            <Header />
            {/* <Loader /> */}
            <div className="App__main-part">
                <LeftSidebar />
                <Routes>
                    <Route path='/anime' element={<Main name={'Top anime'}/>} />
                    <Route path='/manga' element={<Main name={'Top manga'}/>} />
                    {/* <AboutWork /> */}
                </Routes>
            </div>
        </div>
    );
}

export default App;
