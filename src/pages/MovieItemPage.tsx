import React, {FC} from 'react';
import {useParams} from "react-router-dom";
import KinopoiskApi from "../api/kinopoiskApi";
import useFetching from "../hooks/useFetching";


type MovieItemParams = {
    id: string
}

const MovieItemPage: FC = () => {


    const params = useParams<MovieItemParams>()
    const [data, isLoading, error] = useFetching(async () => await KinopoiskApi.getMovie(params.id!))


    if (isLoading) {
        return <h1>Загрузка фильма, подождите...</h1>
    }

    if (error) {
        return <h1 className='error'>{error}</h1>
    }


    return (
        <div>
            <h1>{data?.name}</h1>
        </div>
    );
};

export default MovieItemPage;