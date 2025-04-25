import React, {FC, useState} from 'react';
import KinopoiskApi from "../api/kinopoiskApi";
import useDebounce from "../hooks/useDebouncedCallback";
import {IMovie} from "../types/IMovie";
import RatingBadge from "./ui/RatingBadge";
import {useNavigate} from "react-router-dom";
import {useMovieStore} from "../store/movieStore";
import Loader from "./ui/Loader";

interface SearchFormProps {
    visible: boolean;
}

const SearchForm: FC<SearchFormProps> = ({visible}) => {

    const [searchQuery, setSearchQuery] = useState<string>('')
    const [searchedMovies, setSearchedMovies] = useState<IMovie[]>([])
    const {isLoading, setIsLoading, isSearch, setIsSearch} = useMovieStore(state => state)
    const navigateTo = useNavigate()

    const onMovieClick = (id: string) => {
        navigateTo('/movie/' + id)
        setIsSearch(false)
    }


    const search = async () => {
        try {
            setIsLoading(true)
            const response = await KinopoiskApi.searchMovie(5, 1, searchQuery)
            setSearchedMovies(response)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    const debouncedSearch = useDebounce(search, 1000)

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
        debouncedSearch()
    }


    return (
        <div
            style={isSearch ? {display: "block"} : {display: "none"}}
            className='search-form__wrapper'>
            <form className='search-form'>
                <input
                    className='search-form__input input'
                    type="text"
                    value={searchQuery}
                    onChange={inputHandler}
                    placeholder='Поиск'
                />
            </form>

            {isLoading ? <Loader/> :

                <div className='search-form__list'>
                    {searchedMovies.map((movie: IMovie) =>
                        <div className='searched-movie' key={movie?.id}
                             onClick={() => onMovieClick(movie.id.toString())}>
                            <img
                                className='searched-movie__poster'
                                src={movie?.poster?.url}
                                alt={movie?.name}
                            />
                            <div className='searched-movie__info'>
                                <div className='searched-movie__name'>
                                    {movie?.name}
                                </div>
                                <div className='searched-movie__bottom'>
                                    <div className='searched-movie__rating'>
                                        <RatingBadge rating={movie?.rating?.kp}/>
                                    </div>
                                    <div className='searched-movie__year'>
                                        {movie?.year}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }

        </div>
    );
};

export default SearchForm;