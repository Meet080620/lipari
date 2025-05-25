'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center text-white px-4">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/italian-banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero content */}
      <div className="z-20 text-center max-w-xl">
        <h1 className="text-3xl md:text-6xl font-extrabold text-[#ffffff] leading-tight drop-shadow">
          <Typewriter
            words={['Experience Authentic Italian Cuisine']}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </h1>

        <p className="mt-4 text-base md:text-lg text-[#eceae9] opacity-0 animate-fade-in delay-1000">
          Handmade pasta, wood-fired pizza, and rich Italian flavors in every bite.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fade-in delay-[1500ms]">
          <a
            href="/reservation"
            className="px-6 py-3 border-2 border-bolognese text-bolognese rounded-full font-semibold hover:bg-bolognese hover:text-parmesan transition"
          >
            Book Table
          </a>
          <a
            href="/menu"
            className="px-6 py-3 border-2 border-bolognese text-bolognese rounded-full font-semibold hover:bg-bolognese hover:text-parmesan transition"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
