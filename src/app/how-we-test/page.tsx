import Link from "next/link";

export default function HowWeTestPage() {
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
        </div>
      </nav>

      <div className="max-w-[720px] mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-olive hover:text-olive-dark transition-colors text-sm font-medium mb-8 inline-block"
        >
          &larr; Back to home
        </Link>

        <h1 className="font-display font-semibold text-[clamp(34px,3.6vw,52px)] leading-[1.05] text-sage-900 mb-6">
          How We Test
        </h1>

        <div className="space-y-8 text-sage-700 leading-relaxed">
          <p className="text-lg">
            Every product we recommend goes through a real-world evaluation. No sponsored placements, no pay-to-play. Here is our process.
          </p>

          <div>
            <h2 className="font-display font-semibold text-2xl text-sage-900 mb-3">
              1. Ingredient Review
            </h2>
            <p>
              We check every ingredient against databases like EWG Skin Deep and MADE SAFE. We flag synthetic fragrances, parabens, formaldehyde releasers, phthalates, and anything with limited transparency.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-2xl text-sage-900 mb-3">
              2. Performance Testing
            </h2>
            <p>
              Clean does not mean it gets a pass on actually working. We test dish soaps on baked-on grease, laundry detergents on real stains, and air care products in closed rooms. If it does not perform, we do not recommend it.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-2xl text-sage-900 mb-3">
              3. Sourcing and Transparency
            </h2>
            <p>
              We look at where ingredients come from, whether the brand publishes full ingredient lists, and how they handle third-party certifications. Brands that hide behind proprietary blends get flagged.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-2xl text-sage-900 mb-3">
              4. Environmental Impact
            </h2>
            <p>
              Packaging matters. We prioritize products with recyclable, compostable, or refillable packaging. Biodegradable formulas get extra points. We note when a product has room to improve.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-2xl text-sage-900 mb-3">
              5. Value Assessment
            </h2>
            <p>
              Clean products should not require a second mortgage. We calculate cost per use and compare against conventional alternatives so you know exactly what the swap costs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-card p-8 mt-12">
            <h3 className="font-display font-semibold text-xl text-sage-900 mb-3">
              Our Standards
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-olive shrink-0" />
                No synthetic fragrance or phthalates
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-olive shrink-0" />
                No parabens or formaldehyde releasers
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-olive shrink-0" />
                Biodegradable where possible
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-olive shrink-0" />
                Cruelty-free and transparent sourcing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
