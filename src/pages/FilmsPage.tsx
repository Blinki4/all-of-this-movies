import React, { FC, useEffect, useState } from 'react'
import KinopoiskApi from '../api/kinopoiskApi'
import { IMovie } from '../types/IMovie'
import MoviesList from '../components/MoviesList'
import { MovieCard } from '../components/MovieCard'

export const FilmsPage: FC = () => {
  const [movieList, setMovieList] = useState<IMovie[]>([])

  const fetchMovieList = async () => {
    const response = await KinopoiskApi.getTopMovies(10, 1)
    setMovieList(response)
  }

  useEffect(() => {
    fetchMovieList()
  }, [])

  console.log(movieList)

  return (
    <>
      <MoviesList
        moviesList={movieList}
        renderItem={(movie) => <MovieCard movie={movie} key={movie.id} />}
      />
    </>
  )
}
