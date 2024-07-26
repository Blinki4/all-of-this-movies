import React, {FC, useState} from 'react';
import {NavLink} from "react-router-dom";
import {useMovieStore} from "../store/movieStore";

const Navbar: FC = () => {

    const {isSearch, setIsSearch} = useMovieStore(state => state)

    return (
        <header className='navbar'>
            <div>
                <NavLink className='navbar__logo' to={'/'}>AOTM</NavLink>
            </div>

            <div className={'navbar__block'}>
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <NavLink className='navbar__link' to={'/films'}>Фильмы</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink className='navbar__link' to={'/series'}>Сериалы</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink className='navbar__link' to={'/people'}>Люди</NavLink>
                    </li>
                </ul>
            </div>

            <div className='navbar__block'>
                <ul className='navbar__list'>
                    <li className='navbar__item'>
                        <NavLink className='navbar__link' to={'/login'}>Войти</NavLink>
                    </li>
                    <li className='navbar__item navbar__search' onClick={() => {
                        setIsSearch(!isSearch)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-search">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </li>
                </ul>
            </div>

        </header>
    );
};

export default Navbar;