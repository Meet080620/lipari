'use client';

import { motion } from 'framer-motion';

type Dish = {
  name: string;
  image: string;
  description: string;
  ingredients: string[];
  price: string;
  weight: string;
  icons?: { label: string; icon: string }[];
  prepTime?: string;
  calories?: string;
  cuisine?: string;
};

export default function DishShowcase({
  dish,
  reverse = false,
}: {
  dish: Dish;
  reverse?: boolean;
}) {
  if (!dish) return null;

  const directionX = reverse ? 100 : -100;

  return (
<motion.section
  initial={{ opacity: 0, x: reverse ? 100 : -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="w-full bg-parmesan text-marinara overflow-hidden"
>


      <div
        className={`flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } w-full min-h-[80vh] md:min-h-[600px] border-b border-bolognese`}
      >
        {/* 🍝 Details Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-16">
          <p className="text-bolognese tracking-wider text-sm font-light mb-1">Pizza</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#ff0000]">{dish.name}</h1>

          {/* 🧾 Quick Info */}
          <div className="flex flex-wrap items-center gap-3 mb-4 text-bolognese text-sm font-semibold">
            {dish.weight && <span>{dish.weight}</span>}
            {dish.prepTime && <span>⏱ {dish.prepTime}</span>}
            {dish.calories && <span>🔥 {dish.calories}</span>}
            {dish.cuisine && <span>🌍 {dish.cuisine}</span>}
            {dish.icons?.map((icon, i) => (
              <span key={i} title={icon.label}>
                {icon.icon}
              </span>
            ))}
          </div>

          {/* 📖 Description */}
          <p className="text-md tracking-wider mb-2">
            <strong>Description:</strong> {dish.description}
          </p>

          {/* 🧂 Ingredients */}
          <p className="text-md tracking-wider mb-4">
            <strong>Ingredients:</strong> {dish.ingredients.join(', ')}
          </p>

          {/* 💵 Price + Action */}
          <div className="flex items-center gap-6 mt-4">
            <span className="text-3xl font-bold text-emerald-600">{dish.price}</span>
            <button className="bg-bolognese text-parmesan px-5 py-2 rounded-full font-semibold hover:bg-marinara transition">
              Add to Cart 🛒
            </button>
          </div>
        </div>

        {/* 🖼️ Image Section */}
<div className="w-full md:w-1/2 relative">
  <div className="aspect-[4/3] md:h-full">
    <img
      src={dish.image}
      alt={dish.name}
      className="w-full h-full object-cover object-center rounded-none md:rounded-r-lg"
    />
  </div>
</div>


      </div>
    </motion.section>
  );
}
