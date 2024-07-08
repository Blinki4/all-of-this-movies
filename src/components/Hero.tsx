import React, {FC} from 'react';

interface HeroProps {
    title: string;
    image: string;
}

const Hero: FC<HeroProps> = ({title, image}) => {
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
                        <div className="hero__button-wrapper">
                            <button className='hero__button'>
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