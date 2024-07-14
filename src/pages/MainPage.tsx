import React, {FC, useEffect} from 'react';
import {IMovie} from "../types/IMovie";
import MoviesList from "../components/MoviesList";
import Hero from "../components/Hero";
import KinopoiskApi from "../api/kinopoiskApi";
import {useMovieStore} from "../store/movieStore";
import loginPage from "./LoginPage";
import {deflateRaw} from "node:zlib";
import {log} from "node:util";


const MainPage: FC = () => {


    const {movies, getNewMovies, isLoading, error} = useMovieStore(state => state)


    useEffect(() => {
        getNewMovies(10, 1)
    }, []);


    if (isLoading) {
        return <h1>Загрузка, подождите</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <main className='main-page'>
            <Hero title={movies[0]?.name} image={movies[0]?.backdrop.url}/>


            <section className="section trend">
                <div className="section__header">
                    <h2 className='trend__title'>Популярно</h2>
                </div>
                <div className="section__body">
                    <ul className='trend__list'>
                        <MoviesList moviesList={movies} renderItem={
                            (movie) =>
                                <li key={movie.id} className='trend__item film'>
                                    <img
                                        className='film__image'
                                        width={150}
                                        height={225}
                                        src={movie.poster.url}
                                        alt=""/>
                                    <div className="film__info">
                                        <a className='film__name' href="">{movie.name}</a>
                                        <p className='film__date'>{movie.releaseYears[0].start}</p>
                                    </div>
                                </li>
                        }/>
                    </ul>
                </div>
            </section>

            <section className="section trend">
                <div className="section__header">
                    <h2 className='trend__title'>Популярное</h2>
                </div>
                <div className="section__body">
                    <ul className='trend__list'>
                        <MoviesList moviesList={movies} renderItem={
                            (movie) =>
                                <li key={movie.id} className='trend__item film'>
                                    <img
                                        className='film__image'
                                        width={150}
                                        height={225}
                                        src={movie.poster.url}
                                        alt=""/>
                                    <div className="film__info">
                                        <a className='film__name' href="">{movie.name}</a>
                                        <p className='film__date'>{movie.releaseYears[0].start}</p>
                                    </div>
                                </li>
                        }/>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default MainPage;