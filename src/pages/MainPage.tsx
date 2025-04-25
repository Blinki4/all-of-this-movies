import React, {FC, useEffect, useState} from 'react'
import MoviesList from '../components/MoviesList'
import Hero from '../components/Hero'
import KinopoiskApi from '../api/kinopoiskApi'
import {IMovie} from '../types/IMovie'
import {MovieCard} from '../components/MovieCard'
import {useMovieStore} from "../store/movieStore";
import Loader from "../components/ui/Loader";

const MainPage: FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [series, setSeries] = useState<IMovie[]>([])
    const [error, setError] = useState('')
    const {isLoading, setIsLoading} = useMovieStore(state => state)

    useEffect(() => {
        fetchAll()
    }, [])

    const fetchAll = async () => {
        try {
            setIsLoading(true)
            setMovies(await KinopoiskApi.getNewMovies(10, 1))
            setSeries(await KinopoiskApi.getNewSeries(10, 1))
        } catch (e: any) {
            setError(e)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <main className="main-page">
            <Hero
                title={movies[2]?.name}
                image={movies[2]?.backdrop?.url}
                id={movies[2]?.id}
                description={movies[2]?.shortDescription}
            />

            <section className="section trend">
                <div className="section__header">
                    <h2 className="trend__title">Популярно</h2>
                </div>
                <div className="section__body">
                    <ul className="trend__list">
                        <MoviesList
                            moviesList={movies}
                            renderItem={(movie) => <MovieCard key={movie.id} movie={movie}/>}
                        />
                    </ul>
                </div>
            </section>

            <section className="section trend">
                <div className="section__header">
                    <h2 className="trend__title">Сериалы</h2>
                </div>
                <div className="section__body">
                    <ul className="trend__list">
                        <MoviesList
                            moviesList={series}
                            renderItem={(movie) => <MovieCard key={movie.id} movie={movie}/>}
                        />
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default MainPage
