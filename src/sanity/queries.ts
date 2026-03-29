import { client } from "./client";

// Fetch all product picks, ordered
export async function getProducts() {
  return client.fetch(
    `*[_type == "product"] | order(order asc) {
      _id, tag, name, description, link, cta
    }`
  );
}

// Fetch room guides, ordered
export async function getGuides() {
  return client.fetch(
    `*[_type == "guide"] | order(order asc) {
      _id, title, description, icon
    }`
  );
}

// Fetch all blog posts
export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, excerpt, coverImage, category, publishedAt
    }`
  );
}

// Fetch single blog post by slug
export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, excerpt, coverImage, category, body, publishedAt
    }`,
    { slug }
  );
}

// Fetch site settings (singleton)
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      siteName, heroHeadingWords, heroDescription,
      heroPrimaryCta, heroSecondaryCta,
      seasonalLabel, seasonalTitle, seasonalDescription,
      featuredGuideTitle, featuredGuideDescription,
      newsletterHeadline, newsletterDescription,
      newsletterSuccessMessage, newsletterButtonText,
      contactEmail, footerCopyright, footerDisclaimer
    }`
  );
}

// Fetch principles, ordered
export async function getPrinciples() {
  return client.fetch(
    `*[_type == "principle"] | order(order asc) {
      _id, icon, text
    }`
  );
}

// Fetch categories, ordered
export async function getCategories() {
  return client.fetch(
    `*[_type == "category"] | order(order asc) {
      _id, name, link
    }`
  );
}

// Fetch navigation links, ordered
export async function getNavLinks() {
  return client.fetch(
    `*[_type == "navLink"] | order(order asc) {
      _id, label, href
    }`
  );
}
