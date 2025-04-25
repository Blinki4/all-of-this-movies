import {create} from 'zustand'

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

