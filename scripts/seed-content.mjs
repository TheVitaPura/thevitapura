import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "fe1bro8o",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

async function seed() {
  console.log("Seeding Sanity content...\n");

  // Site Settings
  console.log("→ Site Settings");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "The Vita Pura",
    heroHeadingWords: "Small swaps. calmer home.",
    heroDescription:
      "Curated clean products for kitchen, bath, laundry, and air — reviewed so you don't have to.",
    heroPrimaryCta: "Browse the guides",
    heroSecondaryCta: "See this week's picks",
    seasonalLabel: "Seasonal edit",
    seasonalTitle: "Spring refresh.",
    seasonalDescription:
      "Open windows, lighter scents, and a few swaps that make the whole room feel new.",
    featuredGuideTitle: "The 10-Minute Bathroom Reset",
    featuredGuideDescription:
      "Low-waste tools + a cleaning routine that actually fits your week.",
    newsletterHeadline: "Get one clean swap a week.",
    newsletterDescription:
      "Join 12,000+ readers. We test products, explain ingredients, and share deals — no spam, ever.",
    newsletterSuccessMessage: "Welcome! Check your inbox for a confirmation.",
    newsletterButtonText: "Join the list",
    contactEmail: "hello@thevitapura.com",
    footerCopyright: "The Vita Pura",
    footerDisclaimer: "Affiliate links support our work — thank you.",
  });

  // Nav Links
  console.log("→ Nav Links");
  const navLinks = [
    { label: "Shop", href: "#picks", order: 1 },
    { label: "Guides", href: "#guides", order: 2 },
    { label: "About", href: "#about", order: 3 },
    { label: "Blog", href: "/blog", order: 4 },
    { label: "Newsletter", href: "#newsletter", order: 5 },
  ];
  for (const link of navLinks) {
    await client.create({
      _type: "navLink",
      ...link,
    });
  }

  // Categories (Shop by Room)
  console.log("→ Categories");
  const categories = [
    { name: "Kitchen", link: "#guides", order: 1 },
    { name: "Bathroom", link: "#guides", order: 2 },
    { name: "Laundry", link: "#guides", order: 3 },
    { name: "Air & Water", link: "#guides", order: 4 },
    { name: "Cleaning", link: "#guides", order: 5 },
    { name: "Baby", link: "#guides", order: 6 },
    { name: "Pets", link: "#guides", order: 7 },
  ];
  for (const cat of categories) {
    await client.create({
      _type: "category",
      ...cat,
    });
  }

  // Curated Picks (Products)
  console.log("→ Curated Picks");
  const products = [
    {
      tag: "Dish Soap",
      name: "Grove Co. Dish Soap",
      description: "Cuts grease without synthetic fragrance.",
      cta: "View on Amazon",
      link: "https://amazon.com",
      order: 1,
    },
    {
      tag: "Laundry",
      name: "Branch Basics Concentrate",
      description: "One bottle, loads of uses — unscented option.",
      cta: "View on Amazon",
      link: "https://amazon.com",
      order: 2,
    },
    {
      tag: "Air Care",
      name: "P.F. Candle Co. Room Spray",
      description: "Essential oil-based, no synthetic musks.",
      cta: "View on Amazon",
      link: "https://amazon.com",
      order: 3,
    },
  ];
  for (const prod of products) {
    await client.create({
      _type: "product",
      ...prod,
    });
  }

  // Principles (What We Look For)
  console.log("→ Principles");
  const principles = [
    { icon: "fragrance", text: "No synthetic fragrance or phthalates", order: 1 },
    { icon: "parabens", text: "No parabens or formaldehyde releasers", order: 2 },
    { icon: "biodegradable", text: "Biodegradable where possible", order: 3 },
    { icon: "crueltyFree", text: "Cruelty-free and transparent sourcing", order: 4 },
  ];
  for (const p of principles) {
    await client.create({
      _type: "principle",
      ...p,
    });
  }

  // Room Guides
  console.log("→ Room Guides");
  const guides = [
    {
      title: "Kitchen",
      description:
        "Dish soaps, cleaners, and food storage that skip the plastic and the perfume.",
      icon: "kitchen",
      order: 1,
    },
    {
      title: "Bathroom",
      description:
        "Personal care swaps with transparent ingredients — and refill options.",
      icon: "bathroom",
      order: 2,
    },
    {
      title: "Laundry",
      description:
        "Concentrates, dryer alternatives, and stain removers that actually work.",
      icon: "laundry",
      order: 3,
    },
  ];
  for (const g of guides) {
    await client.create({
      _type: "guide",
      ...g,
    });
  }

  // Blog Posts
  console.log("→ Blog Posts");
  const posts = [
    {
      title: "5 Kitchen Swaps You Can Make This Weekend",
      slug: { _type: "slug", current: "5-kitchen-swaps" },
      excerpt:
        "Simple switches for your dish soap, sponge, and food storage that take five minutes each.",
      category: "guide",
      publishedAt: new Date().toISOString(),
      body: [
        {
          _type: "block",
          _key: "intro1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "Your kitchen is the easiest room to start cleaning up. Most conventional dish soaps, sponges, and plastic wraps have simple, affordable alternatives that perform just as well. Here are five swaps you can make this weekend without changing your routine.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h1",
          style: "h2",
          children: [
            { _type: "span", _key: "s2", text: "1. Dish Soap" },
          ],
        },
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s3",
              text: "Look for plant-based formulas without synthetic fragrance. Brands like Grove Co. and Seventh Generation offer solid options that cut grease without the chemical cocktail.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h2",
          style: "h2",
          children: [
            { _type: "span", _key: "s4", text: "2. Sponges" },
          ],
        },
        {
          _type: "block",
          _key: "b2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s5",
              text: "Swap your synthetic sponge for a natural cellulose or coconut fiber scrubber. They last longer and break down naturally when you are done with them.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h3",
          style: "h2",
          children: [
            { _type: "span", _key: "s6", text: "3. Food Storage" },
          ],
        },
        {
          _type: "block",
          _key: "b3",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s7",
              text: "Glass containers with bamboo lids replace plastic Tupperware. Beeswax wraps handle the jobs that plastic wrap used to. Both last years.",
            },
          ],
        },
      ],
    },
    {
      title: "What Does 'Clean' Actually Mean?",
      slug: { _type: "slug", current: "what-does-clean-mean" },
      excerpt:
        "We break down the labels, certifications, and buzzwords so you know what to trust.",
      category: "tips",
      publishedAt: new Date(Date.now() - 86400000).toISOString(),
      body: [
        {
          _type: "block",
          _key: "intro2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s8",
              text: "Every brand claims to be clean, green, or natural these days. But those words have no legal definition. Here is how we evaluate products and what we actually look for when we say something is clean.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h4",
          style: "h2",
          children: [
            { _type: "span", _key: "s9", text: "Our Standards" },
          ],
        },
        {
          _type: "block",
          _key: "b4",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s10",
              text: "We check ingredient lists against databases like EWG and MADE SAFE. We look for transparency in sourcing. We test products ourselves before recommending them. If a brand cannot tell us exactly what is in their product, we do not feature it.",
            },
          ],
        },
      ],
    },
    {
      title: "Spring Cleaning Without the Chemicals",
      slug: { _type: "slug", current: "spring-cleaning-no-chemicals" },
      excerpt:
        "A room-by-room checklist for deep cleaning with ingredients you can actually pronounce.",
      category: "seasonal",
      publishedAt: new Date(Date.now() - 172800000).toISOString(),
      body: [
        {
          _type: "block",
          _key: "intro3",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s11",
              text: "Spring cleaning does not require an arsenal of harsh chemicals. A few simple ingredients — vinegar, baking soda, castile soap, and essential oils — can handle nearly every job in your home. Here is our room-by-room approach.",
            },
          ],
        },
        {
          _type: "block",
          _key: "h5",
          style: "h2",
          children: [
            { _type: "span", _key: "s12", text: "The Kitchen" },
          ],
        },
        {
          _type: "block",
          _key: "b5",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s13",
              text: "Start with the fridge. A paste of baking soda and water handles stuck-on spills. Wipe down shelves with a vinegar-water spray. For the oven, skip the self-clean cycle and use baking soda overnight instead.",
            },
          ],
        },
      ],
    },
  ];
  for (const post of posts) {
    await client.create({
      _type: "blogPost",
      ...post,
    });
  }

  console.log("\nDone! All placeholder content has been seeded.");
  console.log("Go to thevitapura.com/studio to edit everything.");
}

seed().catch(console.error);
