import React, {FC} from 'react';
import {IMovie} from "../types/IMovie";
import FilmsList from "../components/FilmsList";
import Hero from "../components/Hero";


const MainPage: FC = () => {

    const movieList: IMovie[] = [
        {
            id: 1,
            name: 'Чепук',
            poster: '../images/spider-man-bg.jpg',
            releaseDate: new Date()
        },
        {
            id: 2,
            name: 'Новый человек паук: высокое напряжение',
            poster: '../images/spider-man-across-bg.jpg',
            releaseDate: new Date()
        },
        {
            id: 3,
            name: 'Оно',
            poster: '../images/it-poster.jpg',
            releaseDate: new Date()
        },
        {
            id: 4,
            name: 'Особо опасен',
            poster: '../images/it-poster.jpg',
            releaseDate: new Date()
        },
        {
            id: 5,
            name: 'Законопослушный гражданин',
            poster: '../images/it-poster.jpg',
            releaseDate: new Date()
        },
        {
            id: 6,
            name: 'Законопослушный гражданин',
            poster: '../images/it-poster.jpg',
            releaseDate: new Date()
        },
        {
            id: 7,
            name: 'Законопослушный гражданин',
            poster: '../images/it-poster.jpg',
            releaseDate: new Date()
        },
        {
            id: 8,
            name: 'Законопослушный гражданин',
            poster: '../images/it-poster.jpg',
            releaseDate: new Date()
        },
        {
            id: 9,
            name: 'Законопослушный гражданин',
            poster: '../images/it-poster.jpg',
            releaseDate: new Date()
        },
    ]


    return (
        <main className='main-page'>
            <Hero title={movieList[0].name} image={movieList[0].poster}/>

            <section className="section trend">
                <div className="section__header">
                    <h2 className='trend__title'>В тренде</h2>
                </div>
                <div className="section__body">
                    <ul className='trend__list'>
                        <FilmsList filmsList={movieList} renderItem={
                            (film) =>
                                <li key={film.id} className='trend__item film'>
                                    <img
                                        className='film__image'
                                        width={150}
                                        height={225}
                                        src={film.poster}
                                        alt=""/>
                                    <div className="film__info">
                                        <a className='film__name' href="">{film.name}</a>
                                        <p className='film__date'>{film.releaseDate.toLocaleDateString('Ru-ru')}</p>
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
                        <FilmsList filmsList={movieList} renderItem={
                            (film) =>
                                <li key={film.id} className='trend__item film'>
                                    <img
                                        className='film__image'
                                        width={150}
                                        height={225}
                                        src={film.poster}
                                        alt=""/>
                                    <div className="film__info">
                                        <a className='film__name' href="">{film.name}</a>
                                        <p className='film__date'>{film.releaseDate.toLocaleDateString('Ru-ru')}</p>
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