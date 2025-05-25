'use client';

import { FaStar } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const testimonials = [
  {
    name: 'Emily Thompson',
    role: 'Food Blogger',
    avatar: '/avatars/emily.jpg',
    rating: 5,
    message: 'Exceptional food and service. The ambiance made my evening unforgettable!',
  },
  {
    name: 'Marco Bianchi',
    role: 'Chef',
    avatar: '/avatars/marco.jpg',
    rating: 5,
    message: 'Authentic Italian flavors — reminds me of my hometown in Naples. Highly recommend!',
  },
  {
    name: 'Sophie Laurent',
    role: 'Tourist',
    avatar: '/avatars/sophie.jpg',
    rating: 4,
    message: 'Fresh pasta, amazing wine selection, and charming staff. What else do you need?',
  },
  {
    name: 'David Kim',
    role: 'Photographer',
    avatar: '/avatars/david.jpg',
    rating: 5,
    message: 'A visual and culinary treat! I captured some of the best food shots here.',
  },
  {
    name: 'Anya Petrova',
    role: 'Food Critic',
    avatar: '/avatars/anya.jpg',
    rating: 5,
    message: 'Five stars for presentation, flavor, and hospitality. A gem in the city.',
  },
  {
    name: 'Lucas Müller',
    role: 'Traveler',
    avatar: '/avatars/lucas.jpg',
    rating: 4,
    message: 'Booked a function for a group. Everything was top-notch and organized beautifully.',
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Heading and Subtitle */}
      <section className="bg-[#4f140e] py-16 px-6 md:px-12 text-center">
        <p className="text-4xl uppercase tracking-wide text-bolognese mb-2">Testimonials</p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-marinara mb-4">
  <Typewriter
    words={['Over 100+ people trust us']}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</h2>
        <p className="text-marinara/80 max-w-xl mx-auto">
          Indulge in our fine Italian cuisine, where every meal is a handcrafted experience worth sharing.
        </p>
      </section>

      {/* Testimonials Grid on Video Background */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        {/* 🎥 Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/testimonials-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />

        {/* Grid content */}
        <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-black/60 border border-parmesan rounded-lg p-6 shadow-xl"
            >
              <div className="flex gap-1 text-lime mb-3">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < item.rating ? 'text-lime' : 'text-gray-500'}
                  />
                ))}
              </div>
              <p className="text-parmesan text-sm mb-6">{item.message}</p>
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full border border-parmesan"
                />
                <div>
                  <p className="text-parmesan font-bold text-sm">{item.name}</p>
                  <p className="text-olive text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
