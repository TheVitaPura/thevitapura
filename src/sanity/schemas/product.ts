import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Curated Picks",
  type: "document",
  fields: [
    defineField({
      name: "tag",
      title: "Category Tag",
      type: "string",
      description: "e.g. Dish Soap, Laundry, Air Care",
    }),
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "link",
      title: "Product Link (Amazon, etc.)",
      type: "url",
    }),
    defineField({
      name: "cta",
      title: "Button Text",
      type: "string",
      initialValue: "View on Amazon",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
