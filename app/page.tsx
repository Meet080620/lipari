'use client';

import FoodCarousel from '@/components/FoodCarousel';
import Testimonials from '@/components/Testimonials';
import GiftVoucherSection from '@/components/GiftVoucherSection';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';
import AmbienceShowcase from '@/components/AmbienceShowcase';
import MealOptionsSection from '@/components/MealOptionsSection';
import HeroSection from '@/components/HeroSection';
export default function HomePage() {
  return (
    <>
<HeroSection/>
<AmbienceShowcase/>
<MealOptionsSection/>
<GiftVoucherSection/>
<FoodCarousel/>
<Testimonials/>
<LocationHours/>

    </>
  );
}
