import { defineField, defineType } from "sanity";

export default defineType({
  name: "guide",
  title: "Room Guide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Room Name",
      type: "string",
      description: "e.g. Kitchen, Bathroom, Laundry",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "kitchen, bathroom, or laundry",
      options: {
        list: [
          { title: "Kitchen", value: "kitchen" },
          { title: "Bathroom", value: "bathroom" },
          { title: "Laundry", value: "laundry" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
