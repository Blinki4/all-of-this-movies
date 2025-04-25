import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";
import KinopoiskApi from "../api/kinopoiskApi";
import useFetching from "../hooks/useFetching";
import Loader from "../components/ui/Loader";
import {getCountiesString} from "../utils/getCountiesString";
import {IMovie} from "../types/IMovie";
import CustomButton, {ButtonVariant} from "../components/ui/CustomButton";
import KinoboxPlayer from "../components/KinoboxPlayer";
import PersonsList from "../components/PersonsList";


type MovieItemParams = {
    id: string
}

const MovieItemPage: FC = () => {
    const params = useParams<MovieItemParams>()
    const {data, isLoading, error} = useFetching<IMovie>(async () => await KinopoiskApi.getMovie(params.id!))

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://kinobox.tv/kinobox.min.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, []);


    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <h1 className='error'>{error.toString()}</h1>
    }


    const scrollToWatch = () => {
        const player = document.getElementById('watch')
        player?.scrollIntoView()
    }

    return (
        <section className='section'>
            <div className="movie-item__main-info">
                <img
                    className='movie-item__poster'
                    width={300}
                    height={450}
                    src={data?.poster.url}
                    alt={data?.name}
                />
                <div className='movie-item__info'>
                    <span className='movie-item__title'>
                        <h1 className='movie-item__name'>{data?.name}</h1>
                        <div className='movie-item__year'>({data?.year})</div>
                    </span>
                    <div
                        className='movie-item__original-name'>{data?.alternativeName} {data?.ageRating ? data?.ageRating + '+' : ''}
                    </div>
                    <div className="movie-item__short-description">
                        {data?.shortDescription}
                    </div>
                    <div className='movie-item__about about'>
                        <h3>О фильме</h3>
                        <div className='about__row'>
                            <div className='about__title'>Год производства</div>
                            <div className='about__value'>{data?.year}</div>
                        </div>
                        <div className='about__row'>
                            <div className='about__title'>Страна</div>
                            <div className='about__value'>
                                {
                                    data?.countries &&
                                    getCountiesString(data.countries)
                                }
                            </div>
                        </div>
                        <div className='about__row'>
                            <div className='about__title'>Слоган</div>
                            <div className='about__value'>{data?.slogan || '-'}</div>
                        </div>
                        <div className='about__row'>
                            <div className='about__title'>Жанры</div>
                            <div className='about__value'>
                                {
                                    data?.genres &&
                                    getCountiesString(data.genres)

                                }
                            </div>
                        </div>
                        <div className='about__row'>
                            <div className='about__title'>Возраст</div>
                            <div className='about__value'>{data?.ageRating ? data?.ageRating + '+' : '-'}</div>
                        </div>
                        <div className='about__row'>
                            <div className='about__title'>Рейтинг MPAA</div>
                            <div className='about__value'>{data?.ratingMpaa?.toUpperCase() || '-'}</div>
                        </div>
                        <div className='about__row'>
                            <div className='about__title'>Время</div>
                            <div className='about__value'>{data?.movieLength ? data?.movieLength + ' минут' : ''}</div>
                        </div>
                    </div>
                </div>
                <div className='movie-item__rating'>
                    <div className='movie-item__score'>
                        <svg width="50px" height="50px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"
                             fill="#f86300">
                            <path
                                d="M96.5 20 66.1 75.733V20H40.767v152H66.1v-55.733L96.5 172h35.467C116.767 153.422 95.2 133.578 80 115c28.711 16.889 63.789 35.044 92.5 51.933v-30.4C148.856 126.4 108.644 115.133 85 105c23.644 3.378 63.856 7.889 87.5 11.267v-30.4L85 90c27.022-11.822 60.478-22.711 87.5-34.533v-30.4C143.789 41.956 108.711 63.11 80 80l51.967-60z"/>
                        </svg>
                        {data?.rating?.kp.toFixed(1)}
                    </div>
                    <div className='movie-item__score'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="50px" height="50px"
                             aria-label="IMDb" role="img"
                             viewBox="0 0 512 512">
                            <rect style={{fill: '#f5c518'}}
                                  width="512" height="512"
                                  rx="15%"
                                  fill="#f5c518"/>
                            <path
                                d="M104 328V184H64v144zM189 184l-9 67-5-36-5-31h-50v144h34v-95l14 95h25l13-97v97h34V184zM256 328V184h62c15 0 26 11 26 25v94c0 14-11 25-26 25zm47-118l-9-1v94c5 0 9-1 10-3 2-2 2-8 2-18v-56-12l-3-4zM419 220h3c14 0 26 11 26 25v58c0 14-12 25-26 25h-3c-8 0-16-4-21-11l-2 9h-36V184h38v46c5-6 13-10 21-10zm-8 70v-34l-1-11c-1-2-4-3-6-3s-5 1-6 3v57c1 2 4 3 6 3s6-1 6-3l1-12z"/>
                        </svg>
                        {data?.rating?.imdb.toFixed(1)}
                    </div>
                    <div className='movie-item__score'>
                        <span>Критики</span>
                        {data?.rating?.filmCritics}
                    </div>
                    <CustomButton height={'40px'} variant={ButtonVariant.alternate}>
                        В избранное
                    </CustomButton>
                    <CustomButton onClick={scrollToWatch} height={'40px'} variant={ButtonVariant.primary}>
                        Смотреть
                    </CustomButton>
                </div>
            </div>
            <div className={'hr'}></div>
            <h2 className='movie-item__section-title'>Описание</h2>
            <div className='movie-item__description'>
                {data?.description}
            </div>
            <div className={'hr'}></div>
            <h2 id='watch' className='movie-item__section-title'>Смотреть</h2>
            <KinoboxPlayer kpId={data?.id.toString()!}/>
            <div className={'hr'}></div>
            <h2 className='movie-item__section-title'>Съемочная группа</h2>
            <PersonsList persons={data?.persons!}/>
        </section>
    );
};

export default MovieItemPage;