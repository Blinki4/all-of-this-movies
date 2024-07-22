import React, { FC } from 'react'
import { IMovie } from '../types/IMovie'
import RatingBadge from './ui/RatingBadge'
import { useNavigate } from 'react-router-dom'

interface MovieCardProps {
  movie: IMovie
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const navigateTo = useNavigate()

  const onMovieClick = (id: string) => {
    navigateTo('/movie/' + id)
  }

  return (
    <li
      key={movie.id}
      className="trend__item film"
      onClick={() => onMovieClick(movie.id.toString())}
    >
      <img
        className="film__image"
        draggable={false}
        width={150}
        height={225}
        src={movie?.poster?.url}
        alt=""
      />
      <div className="film__info">
        <a className="film__name" href="">
          {movie?.name}
        </a>
        <div className="rating">
          <RatingBadge rating={movie?.rating.kp} />
          <p className="film__date">{movie?.year}</p>
        </div>
      </div>
    </li>
  )
}
