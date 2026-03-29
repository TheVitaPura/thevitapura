import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "fe1bro8o",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

async function updateLinks() {
  const categories = await client.fetch('*[_type == "category"]{ _id, name }');

  for (const cat of categories) {
    const slug = cat.name.toLowerCase().replace(/\s+&?\s*/g, "-");
    await client.patch(cat._id).set({ link: `/category/${slug}` }).commit();
    console.log(`Updated: ${cat.name} → /category/${slug}`);
  }

  console.log("\nDone! All categories now link to their own pages.");
}

updateLinks().catch(console.error);
