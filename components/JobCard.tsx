'use client';

type JobCardProps = {
  title: string;
  location: string;
  description: string;
};

export default function JobCard({ title, location, description }: JobCardProps) {
  return (
    <div className="bg-[#48c5d8] border border-bolognese rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-2 text-marinara">{title}</h2>
        <p className="text-sm text-bolognese font-semibold mb-3">{location}</p>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <a
        href="mailto:hr@lipary.com"
        className="mt-6 inline-block bg-bolognese text-parmesan px-5 py-2 rounded-full font-semibold text-sm hover:bg-marinara transition"
      >
        Apply Now
      </a>
    </div>
  );
}
