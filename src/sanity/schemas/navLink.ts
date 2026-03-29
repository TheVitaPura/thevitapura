import { defineField, defineType } from "sanity";

export default defineType({
  name: "navLink",
  title: "Navigation Link",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "Link URL",
      type: "string",
      description: "e.g. #picks, #guides, /about",
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
