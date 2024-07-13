import React, {FC} from 'react';
import {IMovie} from "../types/IMovie";
import FilmsList from "../components/FilmsList";
import Hero from "../components/Hero";
import KinopoiskApi from "../api/kinopoiskApi";
import {useMovieStore} from "../store/movieStore";


const MainPage: FC = () => {


    const movieList: IMovie[] = []


    return (
        <main className='main-page'>
            <Hero title={'123123'} image={'./'}/>

            {/*<section className="section trend">*/}
            {/*    <div className="section__header">*/}
            {/*        <h2 className='trend__title'>Популярно</h2>*/}
            {/*    </div>*/}
            {/*    <div className="section__body">*/}
            {/*        <ul className='trend__list'>*/}
            {/*            <FilmsList filmsList={movieList} renderItem={*/}
            {/*                (film) =>*/}
            {/*                    <li key={film.id} className='trend__item film'>*/}
            {/*                        <img*/}
            {/*                            className='film__image'*/}
            {/*                            width={150}*/}
            {/*                            height={225}*/}
            {/*                            src={film.poster}*/}
            {/*                            alt=""/>*/}
            {/*                        <div className="film__info">*/}
            {/*                            <a className='film__name' href="">{film.name}</a>*/}
            {/*                            <p className='film__date'>{film.releaseYears[0].start}</p>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*            }/>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section className="section trend">*/}
            {/*    <div className="section__header">*/}
            {/*        <h2 className='trend__title'>Популярное</h2> //todo Списки только с фильмами и с сериалами*/}
            {/*    </div>*/}
            {/*    <div className="section__body">*/}
            {/*        <ul className='trend__list'>*/}
            {/*            <FilmsList filmsList={movieList} renderItem={*/}
            {/*                (film) =>*/}
            {/*                    <li key={film.id} className='trend__item film'>*/}
            {/*                        <img*/}
            {/*                            className='film__image'*/}
            {/*                            width={150}*/}
            {/*                            height={225}*/}
            {/*                            src={film.poster}*/}
            {/*                            alt=""/>*/}
            {/*                        <div className="film__info">*/}
            {/*                            <a className='film__name' href="">{film.name}</a>*/}
            {/*                            <p className='film__date'>{film.releaseYears[0].start}</p>*/}
            {/*                        </div>*/}
            {/*                    </li>*/}
            {/*            }/>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</section>*/}
        </main>
    );
};

export default MainPage;