import React, { FC, useEffect, useRef, useState } from 'react'
import KinopoiskApi from '../api/kinopoiskApi'
import { IMovie } from '../types/IMovie'
import MoviesList from '../components/MoviesList'
import { MovieCard } from '../components/MovieCard'

export const FilmsPage: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [page, setPage] = useState(1)
  const lastElement = useRef<HTMLDivElement | null>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  const fetchMovies = async () => {
    const response = await KinopoiskApi.getTopMovies(10, page)
    setMovies([...movies, ...response])
  }

  useEffect(() => {
    const callback = function () {
      setPage((prev) => prev + 1)
    }
    observer.current = new IntersectionObserver(callback)
    observer.current.observe(lastElement.current!)
  }, [])

  useEffect(() => {
    fetchMovies()
  }, [page])

  return (
    <>
      <section className="section--hidden-x">
        <div className="films__list">
          <MoviesList
            moviesList={movies}
            renderItem={(movie) => <MovieCard movie={movie} key={movie.id} />}
          />
          <div ref={lastElement}></div>
        </div>
      </section>
    </>
  )
}
