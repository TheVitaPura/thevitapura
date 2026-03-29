export const revalidate = 60; // refresh content from Sanity every 60 seconds

import PageClient from "@/components/PageClient";
import {
  getSiteSettings,
  getProducts,
  getGuides,
  getPrinciples,
  getCategories,
  getNavLinks,
} from "@/sanity/queries";

export default async function Home() {
  const [settings, products, guides, principles, categories, navLinks] =
    await Promise.all([
      getSiteSettings(),
      getProducts(),
      getGuides(),
      getPrinciples(),
      getCategories(),
      getNavLinks(),
    ]);

  return (
    <PageClient
      settings={settings}
      products={products ?? []}
      guides={guides ?? []}
      principles={principles ?? []}
      categories={categories ?? []}
      navLinks={navLinks ?? []}
    />
  );
}
