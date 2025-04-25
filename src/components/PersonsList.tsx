import React, {FC} from 'react';
import {IMoviePerson} from "../types/IMovie";

interface PersonsListProps {
    persons: IMoviePerson[];
}

const PersonsList: FC<PersonsListProps> = ({persons}) => {

    if (!persons) {
        return <h1>Нет информации о съемочнйо группе</h1>
    }

    return (
        <div className='movie-item persons'>
            {persons.map((person) =>
                <div key={person.id} className='persons-item'>
                    <img className='persons__photo' src={person.photo} alt={person.name}/>
                    <div className='persons__name'>
                        {person.name}
                    </div>
                    <div className='persons__role'>
                        {person.description}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonsList;