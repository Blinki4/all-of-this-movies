import React from 'react';

interface MoviesListProps<T> {
    moviesList: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function MoviesList<T>(props: MoviesListProps<T>) {
    return (
        <>
            {props.moviesList.map(props.renderItem)}
        </>
    )
};