import axios from "axios";
import {serializeParams} from "../utils/serializeParams";
import {getCurrentYear} from "../utils/getCurrentYear";

export default class KinopoiskApi {

    static apiKey: string = 'VCCBQAT-4S0M72V-HXNAXR2-QP1D14D';
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
        const response = await axios.get(this.baseUrl + '/movie', {
            params,
            headers: {
                'X-API-KEY': this.apiKey
            },
        })
        console.log(response.data.docs)
        return response.data;
    }
}

