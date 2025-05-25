'use client';

export default function JoinTeamForm() {
  return (
    <section className="bg-[#5d2019] text-white px-6 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg text-white/80">
          We’re always looking for passionate individuals to join our growing family. Submit your application below.
        </p>
      </div>

      <div className="bg-[#5c1a13] max-w-3xl mx-auto rounded-xl p-10 shadow-md border border-[#f6cdcd]">
        <h2 className="text-3xl font-bold mb-6 text-center">Apply Now</h2>

        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="border border-white/30 rounded px-4 py-2 w-full bg-transparent text-white placeholder:text-white/70"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="border border-white/30 rounded px-4 py-2 w-full bg-transparent text-white placeholder:text-white/70"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="border border-white/30 rounded px-4 py-2 w-full sm:col-span-2 bg-transparent text-white placeholder:text-white/70"
            />
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="w-full sm:col-span-2 border border-white/30 text-white file:bg-white file:text-[#4f140e] file:rounded file:px-4 file:py-1 file:border-none file:cursor-pointer bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#4f140e] py-3 px-6 rounded-full font-semibold hover:bg-white/80 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
