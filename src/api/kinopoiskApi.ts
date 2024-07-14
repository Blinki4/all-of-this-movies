import axios from "axios";
import {serializeParams} from "../utils/serializeParams";
import {getCurrentYear} from "../utils/getCurrentYear";
import {IMovies} from "../types/IMovies";

const API_KEY = process.env.REACT_APP_API_KEY as string

export default class KinopoiskApi {

    static apiKey: string = API_KEY
    static baseUrl: string = 'https://api.kinopoisk.dev/v1.4'

    static async getNewMovies(limit: number, page: number) {
        const params = new URLSearchParams()
        params.append('limit', limit.toString())
        params.append('page', page.toString());
        params.append('poster.url', '!null')
        params.append('year', getCurrentYear().toString())
        params.append('rating.kp', '7-10')
        serializeParams(params, 'notNullFields', ['name', 'id', 'poster.url', 'releaseYears.start'])
        serializeParams(params, 'selectFields', ['id', 'name', 'poster', 'backdrop', 'type', 'releaseYears'])
        const response = await axios.get<IMovies>(this.baseUrl + '/movie', {
            params,
            headers: {
                'X-API-KEY': this.apiKey
            },
        })
        return response.data.docs;
    }

    // static async getNewSeries(limit: number, page: number) {
    //     const params = new URLSearchParams()
    //     params.append('limit', limit.toString())
    //     params.append('page', page.toString());
    //     params.append('poster.url', '!null')
    //     params.append('year', getCurrentYear().toString())
    //     params.append('rating.kp', '7-10')
    //     params.append('type', 'tv-series')
    //     serializeParams(params, 'notNullFields', ['name', 'id', 'poster.url', 'releaseYears.start'])
    //     serializeParams(params, 'selectFields', ['id', 'name', 'poster', 'backdrop', 'type', 'releaseYears'])
    //     const response = await axios.get(this.baseUrl + '/movie', {
    //         params,
    //         headers: {
    //             'X-API-KEY': this.apiKey
    //         },
    //     })
    //     return response.data.docs;
    // }
}

