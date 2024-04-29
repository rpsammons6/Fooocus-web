'use client';
import Link from 'next/link';

export default function Hero() {
    const smoothScrollToFeatures = () => {
        const featuresElement = document.querySelector('#features');
        featuresElement?.scrollIntoView({ behavior: 'smooth' });
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
            {/* Video */}
            <video autoPlay muted loop id="myVideo" disablePictureInPicture style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: '-1',
                animation: 'fade-in',
            }}>
                <source src="/videos/herovideo.mp4" type="video/mp4"/>
            </video>

            {/* Hero content */}
            <div className="relative flex-grow flex flex-col justify-center items-center"
                 style={{position: 'absolute', top: '50%', transform: 'translateY(-50%)'}}>

                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="h1 mb-4 text-center" data-aos-delay="500" data-aos="fade-in"
                        style={{fontSize: '80px', whiteSpace: 'none', color: '#FFFFFF'}}>Pricing</h1>
                    <p className="text-xl text-white-100 mb-8 text-center" data-aos="fade-up" data-aos-delay="550"> Where top-tier AI meets unbeatable value.</p>
                        <p className="text-xl text-white-100 mb-8 text-center" data-aos="fade-up" data-aos-delay="550"> Dive into the future of generative imaging.</p>
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
            </div>

        </section>
    )
}