'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from '../app/css/header.module.css';
import ImageViewer from 'react-simple-image-viewer';

export default function Gallery() {
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const [currentImage, setCurrentImage] = useState(1);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "/gallery/IMG1.webp",
    "/gallery/IMG2.jpg",
    "/gallery/IMG3.webp",
    "/gallery/IMG4.webp",
    "/gallery/IMG5.webp",
    "/gallery/IMG6.png",
    "/gallery/IMG7.webp",
    "/gallery/IMG8.png",
    "/gallery/IMG9.webp"
  ];

  const openImageViewer = useCallback((index: number) => {
    console.log(`Opening image viewer for image at index ${index}`);
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

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
                data-aos="fade-up"
                data-aos-anchor="#gallery">
              {images.map((src, index) => (
                  <div className="relative flex flex-col items-center">
                    <img className={`${styles.hoverScale} ${styles.hoverGlow}`} src={src}
                         alt={`IMG${index + 1}`} onClick={() => openImageViewer(index)}/>
                  </div>
              ))}
            </div>

            <div className="imageViewer">
              {isViewerOpen && (
                  <ImageViewer
                      src={images}
                      currentIndex={currentImage}
                      onClose={closeImageViewer}
                      disableScroll={false}
                      backgroundStyle={{
                        backgroundColor: "rgba(0,0,0,0.9)"
                      }}
                      closeOnClickOutside={true}
                  />
              )}
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
