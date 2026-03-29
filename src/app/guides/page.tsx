import Link from "next/link";
import { getGuides } from "@/sanity/queries";

export const revalidate = 60;

export default async function GuidesPage() {
  const guides = await getGuides();

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
          <Link href="/" className="text-sage-700 hover:text-olive transition-colors text-sm font-medium">Home</Link>
          <Link href="/blog" className="text-sage-700 hover:text-olive transition-colors text-sm font-medium">Blog</Link>
          <Link href="/guides" className="text-olive text-sm font-medium">Guides</Link>
        </div>
      </nav>

      <div className="max-w-[920px] mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-olive hover:text-olive-dark transition-colors text-sm font-medium mb-8 inline-block"
        >
          &larr; Back to home
        </Link>
        <h1 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900 mb-4">
          All Guides
        </h1>
        <p className="text-lg text-sage-700 leading-relaxed mb-12 max-w-[600px]">
          Room-by-room guides with product picks, ingredient notes, and simple routines.
        </p>

        {guides && guides.length > 0 ? (
          <div className="space-y-6">
            {guides.map((guide: { _id: string; title: string; description: string }) => (
              <Link
                key={guide._id}
                href={`/guides/${guide.title.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                className="block p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow group"
              >
                <h2 className="font-display font-semibold text-2xl text-sage-900 mb-2 group-hover:text-olive transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sage-600 leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sage-500">No guides yet. Add some in the Studio!</p>
        )}
      </div>
    </div>
  );
}
