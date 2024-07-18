import React, {FC, useEffect, useState} from 'react';
import MoviesList from "../components/MoviesList";
import Hero from "../components/Hero";
import {useMovieStore} from "../store/movieStore";
import KinopoiskApi from "../api/kinopoiskApi";
import {useNavigate} from "react-router-dom";
import {IMovie} from "../types/IMovie";
import RatingBadge from "../components/ui/RatingBadge";


const MainPage: FC = () => {
    const navigateTo = useNavigate()
    const {movies, getNewMovies, isLoading, error} = useMovieStore(state => state)
    const [series, setSeries] = useState<IMovie[]>([])

    useEffect(() => {
        getNewMovies(10, 1)
        fetchAll();
    }, []);

    const fetchAll = async () => {
        setSeries(await KinopoiskApi.getNewSeries(10, 1))
    }


    if (isLoading) {
        return <h1>Загрузка, подождите</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    const onMovieClick = (id: string) => {
        navigateTo('/movie/' + id)
    }


    return (
        <main className='main-page'>
            <Hero title={movies[0]?.name} image={movies[0]?.backdrop.url} id={movies[0]?.id}
                  description={movies[0]?.shortDescription}/>


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
                                    onClick={() => onMovieClick(movie.id.toString())}
                                >
                                    <img
                                        className='film__image'
                                        draggable={false}
                                        width={150}
                                        height={225}
                                        src={movie?.poster.url}
                                        alt=""/>
                                    <div className="film__info">
                                        <a className='film__name' href="">{movie?.name}</a>
                                        <div className='rating'>
                                            <RatingBadge rating={movie?.rating.kp}/>
                                            <p className='film__date'>{movie?.year}</p>
                                        </div>
                                    </div>
                                </li>
                        }/>
                    </ul>
                </div>
            </section>

            <section className="section trend">
                <div className="section__header">
                    <h2 className='trend__title'>Сериалы</h2>
                </div>
                <div className="section__body">
                    <ul className='trend__list'>
                        <MoviesList moviesList={series} renderItem={
                            (movie) =>
                                <li
                                    key={movie.id}
                                    className='trend__item film'
                                    onClick={() => onMovieClick(movie.id.toString())}
                                >
                                    <img
                                        className='film__image'
                                        draggable={false}
                                        width={150}
                                        height={225}
                                        src={movie?.poster?.url}
                                        alt=""/>
                                    <div className="film__info">
                                        <a className='film__name' href="">{movie?.name}</a>
                                        <div className='rating'>
                                            <RatingBadge rating={movie?.rating.kp}/>
                                            <p className='film__date'>{movie?.year}</p>
                                        </div>
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