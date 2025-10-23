import React from 'react';
import Hero from '../../components/Hero';
import AboutSection from '../../components/AboutSection';
import MachineryGallery from '../../components/MachineryGallery/MachineryGallery';
import OurGlobalAssociates from '../../components/OurGlobalAssociates';
import NewsInsights from '../../components/NewsInsights/NewsInsights';
import BlogSection from '../../components/BlogSection';
import RegionalOffices from '../../components/RegionalOffices';
import Testimonials from '../../components/Testimonials';

const Page = () => {
  return (
    <main className="pt-[56px] lg:pt-[60px]">
      <Hero />
      <AboutSection />
      <OurGlobalAssociates />
      <MachineryGallery />
      <NewsInsights />
      <BlogSection />
      <RegionalOffices />
      <Testimonials />
    </main>
  );
};

export default Page;
