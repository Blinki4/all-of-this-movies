import React from 'react';
import './styles/app.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>


                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
