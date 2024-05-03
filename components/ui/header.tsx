'use client'
import React, { useMemo } from 'react';
import { lazy } from 'react';
import Link from 'next/link'
import useScrollPosition from '../../hooks/useScrollPosition';
import styles from '../../app/css/header.module.css';

const MobileMenu = lazy(() => import('./mobile-menu'));

export default function Header() {
  const scrollPos = useScrollPosition(); // use the custom hook

  const opacity = useMemo(() => scrollPos === 0 ? 0 : Math.min(scrollPos / 100, 1), [scrollPos]);

  const headerClass = useMemo(() => `z-30 py-0 h-16 ${scrollPos >= 0 ? 'fixed top-0 w-full' : ''}`, [scrollPos]);

  return (
      <header className={`z-30 py-0 h-16 ${styles.headerGradient} ${scrollPos >= 0 ? 'fixed top-0 w-full' : ''}`} data-aos-delay="1000"
              style={{
                backgroundColor: scrollPos === 0 ? 'transparent' : `rgba(255, 165, 0, ${opacity})`,
                boxShadow: '0px 30px 70px rgba(0, 0, 0, 0.5)'
              }}>

        {/* Header content */}
        <div className="max-w-6xl mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            <div className="shrink-0 mr-4 flex items-center">
              {/* Logo */}
              <Link href="/" className="logoImage" aria-label="Cruip">
                <img src="/images/FooocusLogo_BaseTrans.png" className={`${styles.logoImage} w-20 h-20`} alt="FooocusLogo"/>
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow h-full">
              {/* Desktop links */}
              <ul className="flex grow justify-end flex-wrap items-center py-0 h-full "> {/* Set height to full */}
                <li className="h-full" data-aos-delay="1050" data-aos="fade-down">
                  <Link
                      href="https://discord.gg/VhKqMzKDdE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                  >
                    Discord
                  </Link>
                </li>
                <li className="h-full" data-aos-delay="1100" data-aos="fade-down">
                  <Link
                      href="#gallery"
                      className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                  >
                    Gallery
                  </Link>
                </li>
                <li className="h-full" data-aos-delay="1150" data-aos="fade-down">
                  <Link
                      href="http://docs.f4services.live"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                  >
                    Documentation
                  </Link>
                </li>
                <li className="h-full" data-aos-delay="1200" data-aos="fade-down">
                  <Link
                      href="/about"
                      className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                  >
                    About Us
                  </Link>
                </li>
                <li className="h-full" data-aos-delay="1250" data-aos="fade-down">
                  <Link
                      href="/signin"
                      className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                  >
                    Sign in
                  </Link>
                </li>
                <li className="h-full" data-aos-delay="1300" data-aos="fade-down">
                  <Link href="/signup"
                        className={`btn-sm ${styles.buttonStyle} ml-0 py-0 h-full`}
                  >
                    Sign up
                  </Link>
                </li>
              </ul>
            </nav>

            <MobileMenu/>

          </div>
        </div>
      </header>
  )
}