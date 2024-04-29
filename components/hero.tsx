'use client';

import React from "react";
import styles from '../app/css/header.module.css';

export default function Hero() {
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
            position: 'relative'
        }}>
            {/* Image -- Temporary while carousel is developed */}
            <img src="/images/29fd179e-e3db-40a1-a53e-6de4b5daa508-0.png" alt="Header Style" style={{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1',
                animation: 'fade-in'
            }}/>

            {/* Hero content */}
            <div className="relative flex-grow flex flex-col justify-center items-center"
                 style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="h1 mb-4 text-center" data-aos-delay="1000" data-aos="fade-in"
                        style={{fontSize: '120px', whiteSpace: 'none', color: '#FFFFFF'}}>Welcome to Fooocus</h1>
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
                    <button onClick={smoothScrollToZigzag} className={styles.logoImage}>
                        <img src="/images/arrow.png" alt="Learn More"
                             style={{opacity: 1, width: '80px', height: '50px'}}
                        />
                    </button>
                </div>
            </div>

        </section>
    )
}
