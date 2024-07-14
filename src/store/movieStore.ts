import {create, StateCreator} from "zustand";
import {IMovie} from "../types/IMovie";
import {immer} from "zustand/middleware/immer";
import KinopoiskApi from "../api/kinopoiskApi";


interface MovieState {
    movies: IMovie[];
    isLoading: boolean;
    error: string,
}


interface MovieActions {
    addMovie: (movie: IMovie) => void;
    setMovies: (movies: IMovie[]) => void;
    getNewMovies: (limit: number, page: number) => void;
}


export const useMovieStore = create<MovieState & MovieActions>((set) => ({
    movies: [],
    isLoading: false,
    error: '',

    getNewMovies: async (limit, page) => {
        set({isLoading: true})
        try {
            const response = await KinopoiskApi.getNewMovies(limit, page)
            set({movies: response})
        } catch (e: unknown) {
            if (typeof e === 'string') {
                set({error: e})
            } else if (e instanceof Error) {
                set({error: e.message})
            }
        } finally {
            set({isLoading: false})
        }
    },

    setMovies: () => {
    },
    addMovie: () => {
    },
}))

// @ts-ignore
// export const useMovieStore = create<MovieState & MovieActions>()(immer((set) => ({
//     movies: [],
//     isLoading: false,
//     error: '',
//
//     getNewMovies: (limit, page) => set(async (state) => {
//         state.isLoading = true;
//         try {
//             const response = await KinopoiskApi.getNewMovies(limit, page)
//             set({movies: response})
//         } catch (e: unknown) {
//             if (typeof e === "string") {
//                 state.error = e
//             } else if (e instanceof Error) {
//                 state.error = e.message
//             }
//         } finally {
//             state.isLoading = false;
//         }
//     }),
//
//     addMovie: (movie) => set(state => {
//         state.movies.push(movie)
//     }),
//
//     setMovies: (movies) => set(state => {
//         state.movies = [...state.movies, ...movies]
//     }),
// })))


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
