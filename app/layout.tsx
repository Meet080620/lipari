import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header';
import PageWrapper from '@/components/PageWrapper';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: '500' });

export const metadata = {
  title: 'Lipary Restaurant',
  description: 'Authentic Italian Cuisine',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-white text-gray-900`}>
        <PageWrapper>
          <Header />
          <main className="pt-28">{children}</main> {/* 👈 pushes content below fixed header */}
          <Footer/>
        </PageWrapper>
      </body>
    </html>
  );
}
