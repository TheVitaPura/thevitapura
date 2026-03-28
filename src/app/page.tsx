"use client";

import Navigation from "@/components/Navigation";
import HeroSection from "@/sections/HeroSection";
import CategorySection from "@/sections/CategorySection";
import CuratedPicksSection from "@/sections/CuratedPicksSection";
import PrinciplesSection from "@/sections/PrinciplesSection";
import SeasonalSection from "@/sections/SeasonalSection";
import RoomGuidesSection from "@/sections/RoomGuidesSection";
import NewsletterSection from "@/sections/NewsletterSection";
import FooterSection from "@/sections/FooterSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="grain-overlay" />
      <main>
        <HeroSection />
        <CategorySection />
        <CuratedPicksSection />
        <PrinciplesSection />
        <SeasonalSection />
        <RoomGuidesSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </>
  );
}
