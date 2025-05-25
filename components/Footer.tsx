'use client';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#21270F] shadow-md text-parmesan px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-extrabold text-lime italic mb-3">Lipary 🍝</h3>
          <p className="text-sm text-parmesan/70">
            Authentic Italian taste, served with warmth. Thank you for sharing your moments with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-bolognese mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-lime">Home</a></li>
            <li><a href="/menu" className="hover:text-lime">Menu</a></li>
            <li><a href="/reservation" className="hover:text-lime">Reservation</a></li>
            <li><a href="/jobs" className="hover:text-lime">Jobs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold text-bolognese mb-3">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>📍 10 Union St, Geelong CBD</li>
            <li>📞 (03) 5222 5600</li>
            <li>✉️ hello@lipary.com</li>
          </ul>
        </div>

        
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-parmesan/20 pt-4 text-center text-xs text-parmesan/60">
        © {new Date().getFullYear()} Lipary Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
