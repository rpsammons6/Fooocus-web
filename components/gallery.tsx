'use client';
import 'react-photo-view/dist/react-photo-view.css';
import React, { useEffect, useRef } from 'react';
import styles from '../app/css/gallery.module.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function Features() {
  const imgRefs = useRef<HTMLImageElement[]>([]);

  // Define images array
  const images = [
    { src: '/gallery/IMG1.webp' },
    { src: '/gallery/IMG2.webp' },
    { src: '/gallery/IMG3.webp' },
    { src: '/gallery/IMG4.webp' },
    { src: '/gallery/IMG5.webp' },
    { src: '/gallery/IMG6.png' },
    { src: '/gallery/IMG7.webp' },
    { src: '/gallery/IMG8.webp' },
    { src: '/gallery/IMG9.webp' },

  ];

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
    }, {
      rootMargin: '400px 0px'  // Load images 400px before they come into view
    });

    imgRefs.current.forEach(img => observer.observe(img));

    return () => {
      imgRefs.current.forEach(img => observer.unobserve(img));
    };
  }, []);

  return (
      <section id="gallery">
        <div className="max-w-full max-h-full px-0 sm:px-8 bg-transparent">
          <div className="py-12 md:py-20">
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
                    className={styles.boldText}
                    style={{
                      color: '#e97431'
                    }}
                >Fooocus</span>
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none bg-transparent" data-aos-id-blocks>
              <PhotoProvider>
                {/* Map through images array to generate PhotoView components */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        data-aos-anchor="[data-aos-id-blocks]"
                    >
                      <PhotoView src={image.src}>
                        <img
                            ref={el => el && imgRefs.current.push(el)}
                            className={`${styles.hoverScale} ${styles.hoverGlow}`}
                            data-src={image.src}
                            alt={`IMG${index + 1}`}
                        />
                      </PhotoView>
                    </div>
                ))}
              </PhotoProvider>
            </div>

            <div
                data-aos="fade-up"
                data-aos-delay="600"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px' }}
            >
              <a
                  className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                  href="https://www.pinterest.jp/fooocusai/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                More Photos
              </a>
            </div>

          </div>
        </div>
      </section>
  )
}
