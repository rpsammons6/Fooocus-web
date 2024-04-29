import "@/app/css/header.module.css";
import styles from "@/app/css/header.module.css";
import React from "react";
import Link from "next/link";

export default function Newsletter() {
  return (
      <section>
        <div className="full-width">

          {/* CTA box */}
          <div className="relative bg-orange-300 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
            {/* Video background */}
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
              <source src="/videos/herovideo.mp4" type="video/mp4"/>
            </video>

            {/* Background illustration */}
            <div className="absolute top-0 pointer-events-none" aria-hidden="true">
            </div>

            <div className="relative flex flex-col lg:flex-row justify-center items-center">

              {/* CTA content */}
              <div className="flex flex-col items-center mb-4 lg:mb-0 text-center lg:text-center lg:w-1/2">
                <div>
                  <h3 className="h3 text-center text-white-100 mb-3 shadow-text">
                      <span className={styles.boldText} style={{
                        backgroundImage: `url(/gifs/text-gif-1.gif)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>Begin creating now</span>
                  </h3>
                  <p className="text-white-100 text-lg"></p>
                </div>

                {/*Discord Button*/}
                <div>
                  <Link
                      href="https://discord.gg/uHH4y2eEUQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-sm ${styles.logoImage} ml-0 py-0 h-full`}
                  >
                    <img src="/images/discord-button-white.png" className={styles.imageSize} alt="Discord" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}
