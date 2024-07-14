import React, {FC, useEffect} from 'react';
import MoviesList from "../components/MoviesList";
import Hero from "../components/Hero";
import {useMovieStore} from "../store/movieStore";
import KinopoiskApi from "../api/kinopoiskApi";
import {useNavigate} from "react-router-dom";


const MainPage: FC = () => {
    const navigateTo = useNavigate()
    const {movies, getNewMovies, isLoading, error} = useMovieStore(state => state)

    useEffect(() => {
        getNewMovies(20, 1)
    }, []);

    if (isLoading) {
        return <h1>Загрузка, подождите</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const onMovieClick = (id: number) => {
        navigateTo('/movie/' + id)
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
                                <li
                                    key={movie.id}
                                    className='trend__item film'
                                    onClick={() => onMovieClick(movie.id)}
                                >
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