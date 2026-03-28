import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "The Vita Pura",
    }),
    defineField({
      name: "tagline",
      title: "Hero Tagline",
      type: "string",
      initialValue: "Small swaps. calmer home.",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "seasonalTitle",
      title: "Seasonal Section Title",
      type: "string",
    }),
    defineField({
      name: "seasonalDescription",
      title: "Seasonal Section Description",
      type: "text",
      rows: 3,
    }),
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
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    }),
  ],
});
