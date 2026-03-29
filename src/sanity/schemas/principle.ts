import { defineField, defineType } from "sanity";

export default defineType({
  name: "principle",
  title: "What We Look For",
  type: "document",
  fields: [
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Which icon to display",
      options: {
        list: [
          { title: "No Fragrance", value: "fragrance" },
          { title: "No Parabens", value: "parabens" },
          { title: "Biodegradable", value: "biodegradable" },
          { title: "Cruelty Free", value: "crueltyFree" },
        ],
      },
    }),
    defineField({
      name: "text",
      title: "Principle Text",
      type: "string",
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
