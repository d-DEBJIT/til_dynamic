// app/page.tsx
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import OurGlobalAssociates from '../components/OurGlobalAssociates';
import MachineryGallery from '../components/MachineryGallery/MachineryGallery'; // Import Server Component
import NewsInsights from '../components/NewsInsights/NewsInsights';
import BlogSection from '../components/BlogSection';
import RegionalOffices from '../components/RegionalOffices';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <OurGlobalAssociates />
      <MachineryGallery /> {/* Use Server Component without props */}
      <NewsInsights />
      <BlogSection />
      <RegionalOffices />
      <Testimonials />
    </>
  );
}