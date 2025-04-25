import React, {FC, useEffect, useRef} from 'react';

interface KinoboxPlayerProps {
    kpId: string
}

const KinoboxPlayer: FC<KinoboxPlayerProps> = ({kpId}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kinobox.tv/kinobox.min.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (containerRef.current) {
                // @ts-ignore
                window.kbox(containerRef.current, {search: {kinopoisk: kpId}});
            }
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [kpId]);

    return (
        <section className='section'>
            <div ref={containerRef} className="kinobox_player"></div>
        </section>
    );
};

export default KinoboxPlayer;