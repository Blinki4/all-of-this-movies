import axios from 'axios'
import { serializeParams } from '../utils/serializeParams'
import { IMovies } from '../types/IMovies'
import { IMovie } from '../types/IMovie'

const API_KEY = process.env.REACT_APP_API_KEY as string

export default class KinopoiskApi {
  static apiKey: string = API_KEY
  static baseUrl: string = 'https://api.kinopoisk.dev/v1.4'

  static async getNewMovies(limit: number, page: number) {
    const params = new URLSearchParams()
    params.append('limit', limit.toString())
    params.append('page', page.toString())
    params.append('type', 'movie')
    params.append('rating.kp', '6-10')
    serializeParams(params, 'notNullFields', ['name'])
    const response = await axios.get<IMovies>(this.baseUrl + '/movie', {
      params,
      headers: {
        'X-API-KEY': this.apiKey,
      },
    })
    return response.data.docs
  }

  static async getMovie(id: string) {
    const response = await axios.get<IMovie>(this.baseUrl + `/movie/${id}`, {
      headers: {
        'X-API-KEY': this.apiKey,
      },
    })
    return response.data
  }

  static async getTopMovies(limit: number, page: number) {
    const response = await axios.get<IMovies>(this.baseUrl + `/movie`, {
      params: {
        lists: 'top250',
        limit: limit,
        page: page,
      },
      headers: {
        'X-API-KEY': this.apiKey,
      },
    })
    return response.data.docs
  }

  static async getNewSeries(limit: number, page: number) {
    const params = new URLSearchParams()
    params.append('limit', limit.toString())
    params.append('page', page.toString())
    params.append('rating.kp', '6-10')
    params.append('type', 'tv-series')
    serializeParams(params, 'notNullFields', ['name'])
    const response = await axios.get(this.baseUrl + '/movie', {
      params,
      headers: {
        'X-API-KEY': this.apiKey,
      },
    })
    return response.data.docs
  }
}
