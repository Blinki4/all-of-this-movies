import React, {FC, useEffect, useLayoutEffect, useRef, useState} from 'react'
import KinopoiskApi from '../api/kinopoiskApi'
import {IMovie} from '../types/IMovie'
import MoviesList from '../components/MoviesList'
import {MovieCard} from '../components/MovieCard'
import {useMovieStore} from "../store/movieStore";
import Loader from "../components/ui/Loader";

export const FilmsPage: FC = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [page, setPage] = useState(1)
    const {isLoading, setIsLoading} = useMovieStore(state => state)
    const lastElement = useRef<HTMLDivElement | null>(null)
    const observer = useRef<IntersectionObserver | null>(null)


    const fetchMovies = async () => {
        try {
            setIsLoading(true)
            const response = await KinopoiskApi.getTopMovies(20, page)
            setMovies([...movies, ...response])
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const callback = function () {
            if (isLoading) {
                return
            }
            console.log('триггер')
            setPage((prev) => prev + 1)
        }
        observer.current = new IntersectionObserver(callback)
        observer.current.observe(lastElement.current!)
    }, [])


    useEffect(() => {
        if (isLoading) {
            return
        }
        fetchMovies()
    }, [page])


    return (
        <>
            <section className="section--hidden-x">
                <div className="films__list">
                    <MoviesList
                        moviesList={movies}
                        renderItem={(movie) => <MovieCard movie={movie} key={movie.id}/>}
                    />
                    {isLoading && <Loader/>}
                    <div ref={lastElement}></div>
                </div>
            </section>
        </>
    )
}
