'use client';
import styles from '../app/css/hero.module.css';
import {useState, useEffect} from 'react';

export default function Hero() {
    const images = [
       ' /carousel/C-IMG1.png',
        ' /carousel/C-IMG2.png',
        '/carousel/C-IMG3.webp',
        '/carousel/C-IMG4.webp',
        '/carousel/C-IMG5.webp',
        '/carousel/C-IMG6.webp'

    ]

    const [index, setIndex] = useState(Math.floor(Math.random() * images.length));

    const smoothScrollToZigzag = () => {
        const zigzagElement = document.querySelector('#features');
        zigzagElement?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            backgroundImage: `url(${images[index]})`, // Set the background image to the randomly selected image
            backgroundSize: 'cover', // Cover the entire section with the image
            backgroundPosition: 'center' // Center the image
        }}>
            {/* Carousel */}
            <div className="slideshow">
            </div>

            {/* Hero content */}
            <div className="relative flex-grow flex flex-col justify-center items-center"
                 style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <div className={styles.h1}>
                        <span>Welcome to</span>
                        <span>Fooocus</span>
                    </div>
                    <p className="text-xl text-white-100 mb-8 text-center" data-aos="fade-up" data-aos-delay="2000"></p>
                </div>

            </div>

            <div style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div>
                    {/*Arrow */}
                    <button onClick={smoothScrollToZigzag}>
                        <img src="/images/arrow.png" alt="Learn More"
                             className={styles.arrow}
                        />
                    </button>
                </div>
            </div>

        </section>
    )
}
