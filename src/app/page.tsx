import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { BusinessAreas } from '@/components/sections/BusinessAreas';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { MissionVision } from '@/components/sections/MissionVision';
import { Advantages } from '@/components/sections/Advantages';
import { ContactNewsletter } from '@/components/sections/ContactNewsletter';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Advantages />
      <BusinessAreas />
      <ProductShowcase />
      <ContactNewsletter />
      {/* Other sections will be added here */}
      <Footer />
    </>
  );
}
