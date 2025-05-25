'use client';

export default function AmbienceShowcase() {
  return (
    <section className="bg-[#4f140e] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="max-w-xl text-left">
          <p className="text-lg italic text-olive mb-2">Private Moment</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-marinara mb-4">
            Our Restaurant
          </h2>

          {/* Italian flag divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-1 bg-lime" />
            <div className="w-6 h-1 bg-white" />
            <div className="w-6 h-1 bg-bolognese" />
          </div>

          <p className="text-marinara mb-4">
            Step into an atmosphere that blends rustic charm with modern elegance. At Lipary, every
            table tells a story of tradition, warmth, and world-class cuisine.
          </p>

          <p className="text-marinara mb-8">
            Whether you're planning a quiet dinner or a lively gathering, our restaurant is your home
            for authentic Italian moments.
          </p>

          <a
            href="/reservation"
            className="inline-block border border-bolognese text-bolognese px-6 py-3 rounded-full font-semibold hover:bg-bolognese hover:text-parmesan transition"
          >
            Book a Table
          </a>
        </div>

        {/* Right Images */}
        <div className="relative w-full max-w-md h-auto">
          <img
            src="/ambience/main.jpg"
            alt="Elegant Dining"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="/ambience/overlay.jpg"
            alt="Italian Dish"
            className="absolute -bottom-10 -right-10 w-48 rounded-lg shadow-xl border-4 border-parmesan"
          />
        </div>
      </div>
    </section>
  );
}
