import React, {FC} from 'react';


const MainPage: FC = () => {
    return (
        <main className='main-page'>
            <section className='hero'>
                <div className='background-wrapper'>
                    <img className='hero__background-image' src={"../images/spider-man-across-bg.jpg"} alt="backround"/>
                    <h1 className='main__title'>All of the movies</h1>
                    <div className='hero__info'>
                        <h2 className='hero__title'>
                            Человек паук: через вселенные
                        </h2>
                        <div className="hero__button-wrapper">
                            <button className='hero__button'>
                                О фильме
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainPage;