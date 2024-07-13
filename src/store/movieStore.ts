import {create, StateCreator} from "zustand";
import {IMovie} from "../types/IMovie";
import {immer} from "zustand/middleware/immer";


interface MovieState {
    movies: IMovie[];
    isLoading: boolean;
    error: string,
    count: number
}


interface MovieActions {
    addMovie: (movie: IMovie) => void;
    setMovies: (movies: IMovie[]) => void;

}


// @ts-ignore
export const useMovieStore = create<MovieState & MovieActions>()(immer((set) => ({
    movies: [],
    isLoading: false,
    error: '',
    

    addMovie: (movie) => set(state => {
        state.movies.push(movie)
    }),

    setMovies: (movies) => set(state => {
        state.movies = [...state.movies, ...movies]
    }),


})))


// type ImmerStateCreator<T> = StateCreator<
//     T,
//     [["zustand/immer", never], never],
//     [],
//     T
// >;
//
// const useMovieStore: ImmerStateCreator<MovieState & MovieActions> = (set) => ({
//     movies: [],
//     isLoading: false,
//     error: '',
//     addMovie: (movie) => set(state => {
//         state.movies.push(movie)
//     }),
//
//     setMovies: (movies) => set(state => {
//         state.movies = [...state.movies, ...movies]
//     }),
// })
