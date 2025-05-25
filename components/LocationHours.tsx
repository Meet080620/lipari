'use client';

export default function LocationHours() {
  return (
    <section className="bg-[#4f140e] text-parmesan py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Google Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-parmesan">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196.10134308477933!2d144.3610114757798!3d-38.14899346270817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4141c7aa771fd%3A0xa89e75e6e125a45c!2sLipari%20Cafe%20Bar%20Restaurant!5e0!3m2!1sen!2sau!4v1748049337835!5m2!1sen!2sau" // replace with your actual embed URL
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0 w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right: Hours */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-marinara">
            Location & Opening Hours
          </h2>
          <p className="text-parmesan/80 mb-6">
            Visit us at our cozy Italian location. Enjoy authentic dishes every day of the week.
          </p>

          <ul className="text-parmesan text-sm space-y-3">
            <li className="flex justify-between border-b border-parmesan/20 pb-1">
              <span>Monday</span> <span>5:00 PM – 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-parmesan/20 pb-1">
              <span>Tuesday</span> <span>5:00 PM – 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-parmesan/20 pb-1">
              <span>Wednesday</span> <span>5:00 PM – 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-parmesan/20 pb-1">
              <span>Thursday</span> <span>5:00 PM – 10:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-parmesan/20 pb-1">
              <span>Friday</span> <span>5:00 PM – 11:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-parmesan/20 pb-1">
              <span>Saturday</span> <span>12:00 PM – 11:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span> <span>12:00 PM – 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
