import React from 'react';

import {Routes, Route} from "react-router-dom"

import './App.css';
import NewsPage from "./components/NewsPage/NewsPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import MessengerPage from "./components/MessengerPage/MessengerPage"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/profile"} element={<ProfilePage/>}/>
                <Route path={"/news"} element={<NewsPage/>}/>
                <Route path={"/messenger"} element={<MessengerPage/>}/>
                <Route path={"*"} element={<NewsPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
