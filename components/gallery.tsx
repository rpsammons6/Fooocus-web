'use client';
import React, { useEffect, useRef } from 'react';
import styles from '../app/css/header.module.css';

export default function Features() {

  const imgRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const target = entry.target as HTMLImageElement;
        if (entry.isIntersecting) {
          target.src = target.dataset.src || '';
        } else {
          target.src = '';
        }
      });
    });

    imgRefs.current.forEach(img => observer.observe(img));

    return () => {
      imgRefs.current.forEach(img => observer.unobserve(img));
    };
  }, []);

  return (
      <section id="gallery">
        {/* Text Video */}
        <div className="max-w-full max-h-full px-0 sm:px-8 bg-transparent">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-12xl text-center pb-12 md:pb-20 border border-transparent p-4 bg-transparent">
              <h2 className="h2 mb-4 text-white-100">Experience Artistic <span
                  style={{
                    backgroundImage: `url(/gifs/text-gif-1.gif)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Innovation.</span>
              </h2>
              <p className="text-xl max-w-10xl text-black-800">Below are just a handful of the images created
                using <span
                    className={styles.boldText} //This is the emphasis for 'Fooocus'
                    style={{
                      backgroundImage: `url(/gifs/small-text-gif.gif)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>Fooocus</span>
              </p>
            </div>

            {/* Items */}
            <div
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none bg-transparent"
                data-aos-id-blocks>

              {/* 1st item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG1.webp"
                     alt="IMG1"/>
              </div>

              {/* 2nd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="000"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG2.jpg" alt="IMG2"/>
              </div>

              {/* 3rd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="000"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG3.webp" alt="IMG3"/>
              </div>

              {/* 4th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG4.webp" alt="IMG4"/>
              </div>

              {/* 5th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG5.webp"
                     alt="IMG5"/>
              </div>

              {/* 6th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG6.png" alt="IMG6"/>
              </div>

              {/* 7th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG7.webp" alt="IMG7"/>
              </div>

              {/* 8th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG8.png" alt="IMG8"/>
              </div>

              {/* 9th item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                   data-aos-anchor="[data-aos-id-blocks]">
                <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src="/gallery/IMG9.webp" alt="IMG9"/>
              </div>

            </div>

            <div data-aos="fade-up" data-aos-delay="600"
                 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px'}}>
              <a className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                 href="https://www.pinterest.jp/fooocusai/"
                 target="_blank"
                 rel="noopener noreferrer"
              >More Photos</a>
            </div>

          </div>
        </div>
      </section>
  )
}
