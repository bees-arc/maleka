import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PageantSection from "@/components/PageantSection";
import AdvocacySection from "@/components/AdvocacySection";
import CareerSection from "@/components/CareerSection";
import PersonalSection from "@/components/PersonalSection";
import ContactSection from "@/components/ContactSection";
import ArticleGrid from "@/components/ArticleGrid";
import { ARTICLES } from "@/data/posts";

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section: A Life Built on Resilience */}
      <AboutSection />

      {/* 3. Pageant Journey: Mrs Universe Central America 2026 */}
      <PageantSection />

      {/* 4. Advocacy Platform: A Voice for the Whole Woman */}
      <AdvocacySection />

      {/* 5. Career & Expertise: Clinical & Aesthetic Medicine */}
      <CareerSection />

      {/* 6. Personal: Family, Romeo & Youth Mentorship */}
      <PersonalSection />

      {/* 7. Recent Articles & Press Stories */}
      <ArticleGrid
        title="Articles & Platform Insights"
        subtitle="Thoughts on Healthcare & Empowerment"
        articles={ARTICLES}
        columns={3}
        hasBackground={true}
      />

      {/* 8. Contact & Appearance Inquiries */}
      <ContactSection />
    </div>
  );
}
