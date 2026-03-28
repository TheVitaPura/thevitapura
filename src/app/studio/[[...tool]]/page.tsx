"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@/sanity/schemas";

const config = defineConfig({
  name: "the-vita-pura",
  title: "The Vita Pura",
  projectId: "fe1bro8o",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
