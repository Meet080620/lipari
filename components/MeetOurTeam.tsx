'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const team = [
  {
    name: 'Gianna Russo',
    role: 'Head Chef',
    image: '/avatars/david.jpg',
    description: 'Gianna leads the kitchen with authentic Italian passion and innovation.',
  },
  {
    name: 'Marco Bianchi',
    role: 'Sous Chef',
    image: '/staff/marco.jpg',
    description: 'Marco assists in crafting perfect pasta and sauces daily.',
  },
  {
    name: 'Isabella Conti',
    role: 'Pastry Chef',
    image: '/staff/isabella.jpg',
    description: 'Isabella prepares irresistible desserts with traditional flair.',
  },
  {
    name: 'Luca Romano',
    role: 'Sommelier',
    image: '/staff/luca.jpg',
    description: 'Luca pairs wines with dishes to elevate the dining experience.',
  },
  {
    name: 'Sofia Marino',
    role: 'Restaurant Manager',
    image: '/staff/sofia.jpg',
    description: 'Sofia ensures service excellence and manages daily operations.',
  },
];

export default function MeetOurTeam() {
  return (
    <section className="bg-[#f5f5f5] text-black text-marinara px-6 py-16 border-t border-b border-bolognese">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Meet the Team</h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={24}
          grabCursor={true}
          className="team-swiper"
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#000000] text-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-olive">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
