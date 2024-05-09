import "@/app/css/header.module.css";
import styles from "@/app/css/header.module.css";
import React from "react";
import Link from "next/link";

export default function DiscordPrompt() {
  return (
      <section>
        <div className="full-width">

          {/* Background illustration */}
          <div className={`${styles.headerGradient} py-10 px-8 md:py-16 md:px-12`} data-aos="fade-up">
            <div className="absolute top-0 pointer-events-none" aria-hidden="true">
            </div>

            <div className="relative flex flex-col lg:flex-row justify-center items-center">

              {/* CTA content */}
              <div className="flex flex-col items-center mb-4 lg:mb-0 text-center lg:text-center lg:w-1/2">
                <div>
                  <h3 className="h3 text-center text-white-100 mb-3 shadow-text">
                      <span>Begin creating now</span>
                  </h3>
                  <p className="text-white-100 text-lg"></p>
                </div>

                {/*Discord Button*/}
                <div>
                  <Link
                      href="https://discord.gg/VhKqMzKDdE"
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
