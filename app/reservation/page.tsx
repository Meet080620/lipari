'use client';

import ReservationForm from '@/components/ReservationForm/ReservationForm';

export default function ReservationPage() {
  return (
    <main className="relative min-h-screen w-full text-[#1a1a1a] overflow-hidden">
      {/* 🎥 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/reservations.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10" />

      {/* 💬 Content + Form */}
      <div className="relative z-20 pt-10 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <section className="max-w-3xl mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#4f140e]">
            Reserve Your Italian Experience
          </h1>
          <p className="text-lg text-[#4f140e]/80">
            Whether it's a romantic date, family celebration, or dinner with friends —
            book your spot and savor every bite of Italy at Lipary.
          </p>
        </section>

        <ReservationForm />
      </div>
    </main>
  );
}
