'use client';

export default function MealOptionsSection() {
const meals = [
  {
    title: 'Spuntini Starters',
    image: '/menu/spuntini.jpg',
    description: 'A selection of light bites and classic Italian small starters to open your appetite.',
  },
  {
    title: 'Insalate Salads',
    image: '/menu/salads.jpg',
    description: 'Fresh seasonal greens with Mediterranean flair, herbs, and dressings.',
  },
  {
    title: 'Secondi Mains',
    image: '/menu/secondi.jpg',
    description: 'Hearty Italian main dishes featuring meat, seafood, and seasonal vegetables.',
  },
  {
    title: 'Salse Sauces',
    image: '/menu/salse.jpg',
    description: 'Homemade sauces to accompany your pasta or mains — from marinara to creamy truffle.',
  },
  {
    title: 'Paste Pasta',
    image: '/menu/pasta.jpg',
    description: 'Classic and contemporary pasta dishes made with love and authentic ingredients.',
  },
];


  return (
    <section className="relative py-16 px-6 text-center overflow-hidden">
      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-meal-section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ✨ Content */}
      <div className="relative z-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-parmesan mb-4">
          Explore Our Diverse Meal Options
        </h2>

        <p className="text-lg text-parmesan/90 mb-10">
          From wood-fired pizzas to creamy pastas and hand-picked wines — experience the richness of
          authentic Italian cuisine.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {meals.map((item, index) => (
            <div
              key={index}
              className="bg-black/80 rounded-xl overflow-hidden border border-parmesan transition-none cursor-pointer shadow-md hover:shadow-xl hover:scale-105 hover:brightness-125"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-bold text-marinara mb-2">{item.title}</h3>
                <p className="text-sm text-olive">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
