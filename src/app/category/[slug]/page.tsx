import Link from "next/link";
import { getCategories } from "@/sanity/queries";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const categories = await getCategories();
  return (categories || [])
    .filter((cat: { name?: string }) => cat.name)
    .map((cat: { name: string }) => ({
      slug: cat.name.toLowerCase().replace(/\s+&?\s*/g, "-"),
    }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = (categories || []).find(
    (cat: { name: string }) =>
      cat.name.toLowerCase().replace(/\s+&?\s*/g, "-") === slug
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-sage-50">
      <nav className="bg-white/90 backdrop-blur-md shadow-sm py-4 px-[7vw] flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-semibold text-xl text-sage-900"
        >
          The Vita Pura
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sage-700 hover:text-olive transition-colors text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sage-700 hover:text-olive transition-colors text-sm font-medium"
          >
            Blog
          </Link>
        </div>
      </nav>

      <div className="max-w-[920px] mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-olive hover:text-olive-dark transition-colors text-sm font-medium mb-8 inline-block"
        >
          &larr; Back to home
        </Link>
        <h1 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900 mb-6">
          {category.name}
        </h1>
        <p className="text-lg text-sage-700 leading-relaxed mb-12 max-w-[600px]">
          Clean product picks, ingredient guides, and simple routines for your{" "}
          {category.name.toLowerCase()}.
        </p>

        <div className="bg-white rounded-2xl shadow-card p-10 text-center">
          <p className="text-sage-500 text-lg mb-4">
            Content coming soon.
          </p>
          <p className="text-sage-400 text-sm">
            Check back for product reviews, swap guides, and ingredient breakdowns.
          </p>
        </div>
      </div>
    </div>
  );
}
