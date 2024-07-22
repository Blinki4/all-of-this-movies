import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

interface HeroProps {
    title: string;
    image: string;
    description: string;
    id: number;
}

const Hero: FC<HeroProps> = ({title, image, description, id}) => {

    const navigateTo = useNavigate()

    return (
        <div>
            <section className='hero'>
                <div className='background-wrapper'>
                    <img className='hero__background-image' src={image} alt="backround"/>
                    <h1 className='main__title'>All of this movies</h1>
                    <div className='hero__info'>
                        <h2 className='hero__title'>
                            {title}
                        </h2>
                        <p className='hero__description'>
                            {description}
                        </p>
                        <div className="hero__button-wrapper">
                            <button className='hero__button' onClick={() => navigateTo('/movie/' + id)}>
                                О фильме
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;