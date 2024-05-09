'use client';
import styles from '../app/css/hero.module.css';
import { useState, useEffect, useCallback } from 'react';

export default function Hero() {
    const images = [
        { original: '/carousel/C-IMG1.png', blurred: '/carousel/C-IMG1-blurred.jpg' },
        { original: '/carousel/C-IMG2.png', blurred: '/carousel/C-IMG2-blurred.jpg' },
        { original: '/carousel/C-IMG3.webp', blurred: '/carousel/C-IMG3-blurred.jpg' },
        { original: '/carousel/C-IMG4.webp', blurred: '/carousel/C-IMG4-blurred.jpg' },
        { original: '/carousel/C-IMG5.webp', blurred: '/carousel/C-IMG5-blurred.jpg' },
        { original: '/carousel/C-IMG6.webp', blurred: '/carousel/C-IMG6-blurred.jpg' }
    ];

    const [index] = useState(() => Math.floor(Math.random() * images.length));
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
        const imgBlurred = new Image();
        imgBlurred.src = images[index].blurred;
        imgBlurred.onload = () => {
            const img = new Image();
            img.src = images[index].original;
            img.onload = () => {
                setImageLoaded(true);
            };
        };
    }, [index, images]);

    const smoothScrollToZigzag = useCallback(() => {
        const zigzagElement = document.querySelector('#features');
        zigzagElement?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section
            className={styles.transitionEffect}
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                backgroundImage: `url(${imageLoaded ? images[index].original : images[index].blurred})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div
                className="relative flex-grow flex flex-col justify-center items-center"
                style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
            >
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <div className={styles.h1}>
                        <span>Welcome to</span>
                        <span>Fooocus</span>
                    </div>
                    <p
                        className="text-xl text-white-100 mb-8 text-center"
                        data-aos="fade-up"
                        data-aos-delay="2000"
                    ></p>
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <div>
                    <button onClick={smoothScrollToZigzag}>
                        <img
                            src="/images/arrow.png"
                            alt="Learn More"
                            className={styles.arrow}
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
