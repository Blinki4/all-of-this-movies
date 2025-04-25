import React from 'react'
import './styles/app.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import MovieItemPage from './pages/MovieItemPage'
import {FilmsPage} from './pages/FilmsPage'
import {SeriesPage} from './pages/SeriesPage'
import SearchForm from "./components/SearchForm";
import {useMovieStore} from "./store/movieStore";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {

    const isSearch = useMovieStore(state => state.isSearch)

    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/movie/:id'} element={<MovieItemPage/>}/>
                    <Route path={'/films'} element={<FilmsPage/>}/>
                    <Route path={'/series'} element={<SeriesPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
