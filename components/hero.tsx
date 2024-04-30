'use client';
import styles from '../app/css/hero.module.css';
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
            <img src="/carousel/C-IMG-2.png" alt="Header Style" style={{
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
