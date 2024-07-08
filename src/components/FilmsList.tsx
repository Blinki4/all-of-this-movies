import React from 'react';

interface FilmsListProps<T> {
    filmsList: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function FilmsList<T>(props: FilmsListProps<T>) {
    return (
        <>
            {props.filmsList.map(props.renderItem)}
        </>
    )
};