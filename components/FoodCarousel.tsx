'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const dishes = [
  { name: 'Truffle Pasta', image: '/dishes/truffle-pasta.jpg' },
  { name: 'Margherita Pizza', image: '/dishes/margherita.jpg' },
  { name: 'Tiramisu Delight', image: '/dishes/tiramisu.jpg' },
  { name: 'Antipasto Platter', image: '/dishes/antipasto.jpg' },
  { name: 'Seafood Risotto', image: '/dishes/risotto.png' },
];

export default function FoodCarousel() {
  return (
    <section className="bg-black pt-10 pb-0 px-0">
      <h2 className="text-3xl md:text-5xl font-extrabold text-parmesan text-center mb-10">
        A Feast for Your Eyes
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
        style={{ marginBottom: '-2px' }}
      >
        {dishes.map((dish, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[500px]">
              <img
                src={dish.image}
                alt={dish.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-3xl font-bold text-parmesan drop-shadow-lg">
                  {dish.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
