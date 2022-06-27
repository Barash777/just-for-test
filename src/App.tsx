import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from 'react-router-dom';
import Profile from './Profile';

function App() {
    return (
        <div className="App">
            <NavLink to={'/'}>main-- </NavLink>
            <NavLink to={'/login'}>login-- </NavLink>
            <NavLink to={'/profile'}>profile-- </NavLink>
            <NavLink to={'/profile/settings'}>settings-- </NavLink>

            <a
                href={'https://www.google.com'}
                target={'_blank'}
                rel="noreferrer"
            >test</a>

            <Routes>
                <Route path={'/*'} element={<div>404</div>}/>
                <Route path={'/'} element={<div>main</div>}/>
                <Route path={'/login'} element={<div>login</div>}/>
                <Route path={'/profile'} element={<div>profile</div>}/>
                <Route path={'/profile/settings'} element={<div>settings</div>}/>
            </Routes>
        </div>
    );
}

export default App;
