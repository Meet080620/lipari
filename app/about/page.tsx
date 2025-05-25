'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function AboutPage() {
  return (
    <main className="pt-10 pb-20 px-6 bg-[#5c1a13] text-marinara">
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Story</h1>
            <Typewriter
              words={['Born in the heart of Italy, Lipary brings traditional recipes to modern plates. Every dish /n we serve is a tribute to family kitchens, fresh ingredients, and the passion of our chefs.']}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
        {/* <p className="text-lg text-olive">
          Born in the heart of Italy, Lipary brings traditional recipes to modern plates. Every dish
          we serve is a tribute to family kitchens, fresh ingredients, and the passion of our chefs.
        </p> */}
      </section>

      {/* History + Values Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* 🍽️ Background Video */}
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-md w-full h-full object-cover"
          >
            <source src="/about/kitchen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* ✍️ Text with Typewriter Heading */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <Typewriter
              words={['Tradition Meets Innovation']}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </h2>
          <p className="mb-4">
            At Lipary, we believe in the timeless power of comfort food—with a twist.
            Our chefs honor tradition while embracing creativity, using seasonal and local produce
            to craft unforgettable meals.
          </p>
          <p>
            Whether you're savoring pasta with truffle oil or a rustic wood-fired pizza,
            every bite tells a story of heritage and heart.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#5c1a13] py-10 px-10 rounded-xl max-w-7xl mx-auto shadow border border-bolognese">
        <h2 className="text-3xl font-bold text-center mb-6">Why People Love Lipary</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-marinara text-base">
          <li>🍝 Authentic handmade pasta & sauces</li>
          <li>🍕 Wood-fired pizzas with gourmet toppings</li>
          <li>🍷 Curated selection of fine Italian wines</li>
          <li>❤️ Warm, welcoming ambiance & service</li>
          <li>🌿 Locally-sourced and organic ingredients</li>
          <li>🏆 Led by award-winning chefs & sommeliers</li>
        </ul>
      </section>
    </main>
  );
}
