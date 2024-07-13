import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const Navbar: FC = () => {
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
                    <li className='navbar__item navbar__search'>
                        <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </li>
                </ul>
            </div>

        </header>
    );
};

export default Navbar;