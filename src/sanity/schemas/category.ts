import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Shop by Room",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link URL",
      type: "string",
      description: "Where this button goes when clicked (e.g. /blog, #picks, or a full URL)",
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
