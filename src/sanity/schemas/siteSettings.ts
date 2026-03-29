import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // General
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "The Vita Pura",
    }),

    // Hero
    defineField({
      name: "heroHeadingWords",
      title: "Hero Heading Words",
      type: "string",
      description: "Space-separated words, e.g. 'Small swaps. calmer home.'",
      initialValue: "Small swaps. calmer home.",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "heroPrimaryCta",
      title: "Hero Primary CTA Text",
      type: "string",
      initialValue: "Browse the guides",
    }),
    defineField({
      name: "heroSecondaryCta",
      title: "Hero Secondary CTA Text",
      type: "string",
      initialValue: "See this week's picks",
    }),

    // Seasonal
    defineField({
      name: "seasonalLabel",
      title: "Seasonal Section Label",
      type: "string",
      initialValue: "Seasonal edit",
    }),
    defineField({
      name: "seasonalTitle",
      title: "Seasonal Section Title",
      type: "string",
      initialValue: "Spring refresh.",
    }),
    defineField({
      name: "seasonalDescription",
      title: "Seasonal Section Description",
      type: "text",
      rows: 3,
    }),

    // Featured Guide
    defineField({
      name: "featuredGuideTitle",
      title: "Featured Guide Title",
      type: "string",
    }),
    defineField({
      name: "featuredGuideDescription",
      title: "Featured Guide Description",
      type: "text",
      rows: 2,
    }),

    // Newsletter
    defineField({
      name: "newsletterHeadline",
      title: "Newsletter Headline",
      type: "string",
    }),
    defineField({
      name: "newsletterDescription",
      title: "Newsletter Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "newsletterSuccessMessage",
      title: "Newsletter Success Message",
      type: "string",
      initialValue: "Welcome! Check your inbox for a confirmation.",
    }),
    defineField({
      name: "newsletterButtonText",
      title: "Newsletter Button Text",
      type: "string",
      initialValue: "Join the list",
    }),

    // Contact / Footer
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "footerCopyright",
      title: "Footer Copyright Text",
      type: "string",
      initialValue: "The Vita Pura",
    }),
    defineField({
      name: "footerDisclaimer",
      title: "Footer Disclaimer Text",
      type: "string",
      initialValue: "Affiliate links support our work—thank you.",
    }),
  ],
});
