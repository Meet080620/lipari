'use client';

export default function GiftVoucherSection() {
  return (
    <section className="bg-[#4f140e] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-lg italic text-olive mb-2">Special Moments</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-marinara mb-4 leading-tight">
            Give the Gift of Taste <br /> or Book a Private Event
          </h2>

          {/* Decorative underline */}
          <div className="flex gap-2 mb-6">
            <div className="w-6 h-1 bg-lime" />
            <div className="w-6 h-1 bg-white" />
            <div className="w-6 h-1 bg-bolognese" />
          </div>

          <p className="text-ffff mb-6">
            Whether it's a birthday, anniversary, or just because — a Lipary gift voucher is always
            appreciated. Hosting something big? Our restaurant is available for private functions with custom menus
            and arrangements.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/book-function"
              className="px-6 py-3 border border-bolognese text-bolognese rounded-full font-semibold hover:bg-bolognese hover:text-parmesan transition"
            >
              Book a Function
            </a>
            <a
              href="/gift-voucher"
              className="px-6 py-3 border border-lime text-lime rounded-full font-semibold"
            >
              Buy Gift Voucher
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src="/vouchers/gift-function.jpg"
              alt="Gift and Function"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-parmesan p-4 text-center text-lg font-semibold">
              Celebrate Life, The Italian Way 🇮🇹
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
