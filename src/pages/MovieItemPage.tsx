import React, {FC, useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {IMovie} from "../types/IMovie";
import axios from "axios";
import KinopoiskApi from "../api/kinopoiskApi";

type MovieItemParams = {
    id: string
}

const MovieItemPage: FC = () => {

    const [movie, setMovie] = useState<null | IMovie>(null)
    const params = useParams<MovieItemParams>()
    const navigateTo = useNavigate()

    const getMovie = async () => {
        const response = await axios.get(KinopoiskApi.baseUrl + `/movie/${params.id}`, {
            headers: {
                'X-API-KEY': 'A79KAPT-Z90MT84-NJ6H62R-H6MHJZD',
            }
        })
        setMovie(response.data)
    }

    useEffect(() => {
        getMovie()
    }, []);

    return (
        <div>
            <h1>{movie?.name}</h1>
        </div>
    );
};

export default MovieItemPage;