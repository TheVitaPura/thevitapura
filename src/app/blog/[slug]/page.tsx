import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/sanity/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return (posts || [])
    .filter((post: { slug?: { current: string } }) => post.slug?.current)
    .map((post: { slug: { current: string } }) => ({
      slug: post.slug.current,
    }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
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

      <article className="max-w-[720px] mx-auto px-6 py-16">
        {post.category && (
          <span className="inline-block px-3 py-1 bg-sage-100 text-olive text-xs font-medium rounded-full mb-4">
            {post.category}
          </span>
        )}
        <h1 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.05] text-sage-900 mb-4">
          {post.title}
        </h1>
        {post.publishedAt && (
          <p className="text-sage-500 text-sm mb-10">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}

        {post.body && (
          <div className="prose prose-sage max-w-none [&_p]:text-sage-700 [&_p]:leading-relaxed [&_h2]:font-display [&_h2]:text-sage-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:text-sage-900 [&_a]:text-olive [&_a]:underline [&_blockquote]:border-l-olive [&_blockquote]:text-sage-600 [&_ul]:text-sage-700 [&_ol]:text-sage-700 [&_li]:leading-relaxed">
            <PortableText value={post.body} />
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-sage-200">
          <Link
            href="/blog"
            className="text-olive hover:text-olive-dark transition-colors text-sm font-medium"
          >
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
