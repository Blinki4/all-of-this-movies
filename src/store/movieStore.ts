import {create, StateCreator} from 'zustand'
import {IMovie} from '../types/IMovie'
import {immer} from 'zustand/middleware/immer'
import KinopoiskApi from '../api/kinopoiskApi'
import {IMovies} from '../types/IMovies'

interface MovieState {
    isLoading: boolean;
    isSearch: boolean;
}

interface MovieActions {
    setIsLoading: (value: boolean) => void;
    setIsSearch: (value: boolean) => void;
}

export const useMovieStore = create<MovieState & MovieActions>((set) => ({
    isLoading: false,
    isSearch: false,

    setIsLoading: (value) => set({isLoading: value}),
    setIsSearch: (value) => set({isSearch: value}),
}))

