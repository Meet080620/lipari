'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'About Us', href: '/about' },
  { name: 'Reservation', href: '/reservation' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const headerBgClass = isHome
    ? isScrolled
      ? 'bg-[#21270F] shadow-md'
      : 'bg-transparent'
    : 'bg-[#21270F] shadow-md';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${headerBgClass}`}
    >
      {/* Top Centered Logo */}
      <div className="w-full flex justify-center py-4">
        <h1 className="text-4xl font-extrabold tracking-wide italic text-parmesan">
          Lipary
        </h1>
      </div>

      {/* Bottom Navigation (Centered) */}
      <div className="max-w-7xl mx-auto flex justify-center items-center px-6 pb-4 border-t border-parmesan/20">
        <nav className="flex gap-7 text-md uppercase font-semibold tracking-wider pt-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition duration-200 ${
                  isActive
                    ? 'text-lime'
                    : 'text-parmesan hover:text-lime'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
