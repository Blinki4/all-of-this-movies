import React, { FC, useEffect, useState } from 'react'
import MoviesList from '../components/MoviesList'
import Hero from '../components/Hero'
import { useMovieStore } from '../store/movieStore'
import KinopoiskApi from '../api/kinopoiskApi'
import { useNavigate } from 'react-router-dom'
import { IMovie } from '../types/IMovie'
import RatingBadge from '../components/ui/RatingBadge'
import { MovieCard } from '../components/MovieCard'

const MainPage: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [series, setSeries] = useState<IMovie[]>([])

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {
    setMovies(await KinopoiskApi.getNewMovies(10, 1))
    setSeries(await KinopoiskApi.getNewSeries(10, 1))
  }
  //todo Переделать на хук

  //   if (isLoading) {
  //     return <h1>Загрузка, подождите</h1>
  //   }

  //   if (error) {
  //     return <h1>{error}</h1>
  //   }

  return (
    <main className="main-page">
      <Hero
        title={movies[0]?.name}
        image={movies[0]?.backdrop.url}
        id={movies[0]?.id}
        description={movies[0]?.shortDescription}
      />

      <section className="section trend">
        <div className="section__header">
          <h2 className="trend__title">Популярно</h2>
        </div>
        <div className="section__body">
          <ul className="trend__list">
            <MoviesList
              moviesList={movies}
              renderItem={(movie) => <MovieCard key={movie.id} movie={movie} />}
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
              renderItem={(movie) => <MovieCard key={movie.id} movie={movie} />}
            />
          </ul>
        </div>
      </section>
    </main>
  )
}

export default MainPage
