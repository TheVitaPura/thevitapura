import Link from "next/link";
import { getBlogPosts } from "@/sanity/queries";

export const revalidate = 60; // refresh content every 60 seconds

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
            className="text-olive text-sm font-medium"
          >
            Blog
          </Link>
        </div>
      </nav>

      <div className="max-w-[920px] mx-auto px-6 py-16">
        <h1 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.0] text-sage-900 mb-4">
          Blog
        </h1>
        <p className="text-lg text-sage-700 leading-relaxed mb-12 max-w-[600px]">
          Guides, reviews, and clean living tips — tested and explained.
        </p>

        {posts && posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map(
              (post: {
                _id: string;
                title: string;
                slug: { current: string };
                excerpt: string;
                category: string;
                publishedAt: string;
              }) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug?.current}`}
                  className="block p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      {post.category && (
                        <span className="inline-block px-3 py-1 bg-sage-100 text-olive text-xs font-medium rounded-full mb-3">
                          {post.category}
                        </span>
                      )}
                      <h2 className="font-display font-semibold text-2xl text-sage-900 mb-2 group-hover:text-olive transition-colors">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sage-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                    {post.publishedAt && (
                      <span className="text-sage-400 text-sm whitespace-nowrap">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    )}
                  </div>
                </Link>
              )
            )}
          </div>
        ) : (
          <p className="text-sage-500">No posts yet. Add some in the Studio!</p>
        )}
      </div>
    </div>
  );
}
