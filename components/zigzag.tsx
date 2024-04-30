import Image from 'next/image'
import styles from "@/app/css/header.module.css";

export default function Zigzag() {
  return (
      <section id="features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-12xl text-center pb-12 md:pb-20 border border-transparent p-4 bg-transparent">
              <h2 className="h2 mb-4 text-white-100">AI Image Generation has never been easier <span
                  style={{
                    backgroundImage: `url(/gifs/text-gif-1.gif)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>(or cheaper).</span>
              </h2>
              <p className="text-xl max-w-10xl text-black-800"></p>
            </div>

            {/* Items */}
            <div className="grid gap-20">

              {/* 1st item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Video */}
                <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up">
                  <img src="/gifs/gif-tut1.gif" alt="Tutorial 1" className={`${styles.glow}`} style={{
                    position: 'relative',
                    width: '540px',
                    height: '400px',
                    objectFit: 'cover',
                    zIndex: '-1',
                    animation: 'fade-in',
                  }}/>
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                     data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter text-xl mb-2" style={{
                      backgroundImage: `url(/gifs/small-text-gif.gif)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>More speed. Less spend
                    </div>
                    <h3 className="h3 mb-3">We're the Cheapest.</h3>
                    <p className="text-xl text-gray-400 mb-4">Compared to our competitors, we offer the lowest prices for
                      quality AI
                      generation. That price? Free.</p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Join the Discord and get verified</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Create a Private Channel</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Begin generating for Free</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2nd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                    data-aos="fade-up">
                  <img src="/gifs/gif-tut2.gif" alt="Tutorial 2" className={`${styles.glow}`} style={{
                    position: 'relative',
                    width: '540px',
                    height: '400px',
                    objectFit: 'cover',
                    zIndex: '-1',
                    animation: 'fade-in',
                  }}/>
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                     data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                      <div className="font-architects-daughter text-xl mb-2" style={{
                        backgroundImage: `url(/gifs/small-text-gif.gif)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>More Art. Less Hassle
                      </div>
                    </div>
                    <h3 className="h3 mb-3">We're the Easiest.</h3>
                    <p className="text-xl text-gray-400 mb-4">Our Image Generation is built around the layman. Even if you
                      have never created text
                      prompts before, you can still create beatiful images.</p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Fast and Easy creation</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>No Prompt Engineering required</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Begin creating immediately</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3rd item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Video */}
                <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                    data-aos="fade-up">
                  <img src="/gifs/gif-tut2.gif" alt="Tutorial 2" className={`${styles.glow}`} style={{
                    position: 'relative',
                    width: '540px',
                    height: '400px',
                    objectFit: 'cover',
                    zIndex: '-1',
                    animation: 'fade-in',
                  }}/>
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                     data-aos="fade-right">
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                        <div className="font-architects-daughter text-xl mb-2" style={{
                          backgroundImage: `url(/gifs/small-text-gif.gif)`,
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>What you want. When you want
                        </div>
                      </div>
                    </div>
                    <h3 className="h3 mb-3">We're Flexible.</h3>
                    <p className="text-xl text-gray-400 mb-4">Fooocus is extremely modular by design, and new LORAs are
                      being added regularly.</p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>New styles and prompts added continuously</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Continue to create under your rules</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Join an ever-evolving community</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4th item */}
              <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div
                    className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                    data-aos="fade-up">
                  <Image src="/images/PromoImage.png" alt="Promo Image" className={`${styles.glow}`} width={540}
                         height={400}/>
                </div>
                {/* Content */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                     data-aos="fade-left">
                  <div className="md:pl-4 lg:pl-12 xl:pl-16">
                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                      <div className="font-architects-daughter text-xl mb-2" style={{
                        backgroundImage: `url(/gifs/small-text-gif.gif)`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>Cheaper art. For you.
                      </div>
                    </div>
                    <h3 className="h3 mb-3">Want to go further?</h3>
                    <p className="text-xl text-gray-400 mb-4">We plan to launch a Premium Package for those willing to
                      take their creativity to
                      the next level. Only $10 per month.</p>
                    <ul className="text-lg text-gray-400 -mb-2">
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Image to Image</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Custom LORA Packages</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-3 h-3 fill-current text-orange-300 mr-2 shrink-0" viewBox="0 0 12 12"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"/>
                        </svg>
                        <span>Many more features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
  )
}
