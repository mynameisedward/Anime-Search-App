import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import Main from './components/Main/Main';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import AboutTitle from './components/AboutTitle/AboutTitle';


function App() {

    const location = useLocation()

    const splitPathname = location.pathname.split('/') // разбиваем путь на части, чтобы не рендерить некоторые компоненты если не нужно



    return (

        <div className="App">
            {splitPathname[2] == 'details' ? <></> : <Header />} {/*Не рендерим Header если в url путь содержит details  */}
            <div className="App__main-part">
                {splitPathname[2] == 'details' ? <></> : <LeftSidebar />} 
                <Routes>
                    <Route path='/anime' element={<Main name={'Top anime'}/>} />
                    <Route path='/manga' element={<Main name={'Top manga'}/>} />
                    <Route path='/anime/details/:id' element={<AboutTitle />} />
                    <Route path='/manga/details/:id' element={<AboutTitle />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
