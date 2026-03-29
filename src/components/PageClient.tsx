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

export interface SiteSettingsData {
  siteName?: string;
  heroHeadingWords?: string;
  heroDescription?: string;
  heroPrimaryCta?: string;
  heroSecondaryCta?: string;
  seasonalLabel?: string;
  seasonalTitle?: string;
  seasonalDescription?: string;
  featuredGuideTitle?: string;
  featuredGuideDescription?: string;
  newsletterHeadline?: string;
  newsletterDescription?: string;
  newsletterSuccessMessage?: string;
  newsletterButtonText?: string;
  contactEmail?: string;
  footerCopyright?: string;
  footerDisclaimer?: string;
}

export interface ProductData {
  _id: string;
  tag: string;
  name: string;
  description: string;
  link?: string;
  cta: string;
}

export interface GuideData {
  _id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PrincipleData {
  _id: string;
  icon: string;
  text: string;
}

export interface CategoryData {
  _id: string;
  name: string;
  link?: string;
}

export interface NavLinkData {
  _id: string;
  label: string;
  href: string;
}

interface PageClientProps {
  settings: SiteSettingsData | null;
  products: ProductData[];
  guides: GuideData[];
  principles: PrincipleData[];
  categories: CategoryData[];
  navLinks: NavLinkData[];
}

export default function PageClient({
  settings,
  products,
  guides,
  principles,
  categories,
  navLinks,
}: PageClientProps) {
  return (
    <>
      <Navigation
        siteName={settings?.siteName}
        links={navLinks}
      />
      <div className="grain-overlay" />
      <main>
        <HeroSection
          headingWords={settings?.heroHeadingWords}
          description={settings?.heroDescription}
          primaryCta={settings?.heroPrimaryCta}
          secondaryCta={settings?.heroSecondaryCta}
        />
        <CategorySection categories={categories} />
        <CuratedPicksSection products={products} />
        <PrinciplesSection principles={principles} />
        <SeasonalSection
          label={settings?.seasonalLabel}
          title={settings?.seasonalTitle}
          description={settings?.seasonalDescription}
          featuredGuideTitle={settings?.featuredGuideTitle}
          featuredGuideDescription={settings?.featuredGuideDescription}
        />
        <RoomGuidesSection guides={guides} />
        <NewsletterSection
          headline={settings?.newsletterHeadline}
          description={settings?.newsletterDescription}
          successMessage={settings?.newsletterSuccessMessage}
          buttonText={settings?.newsletterButtonText}
        />
        <FooterSection
          contactEmail={settings?.contactEmail}
          copyright={settings?.footerCopyright}
          disclaimer={settings?.footerDisclaimer}
        />
      </main>
    </>
  );
}
