import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Financing Insights | Starting Gate Financial',
  description:
    'Educational articles on SBA loans, commercial real estate financing, MCA, equipment financing, and capital structure for small business owners.',
};

const CATEGORIES = ['All', 'Programs', 'Industries', 'Tools'] as const;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category ?? 'All';
  const allPosts = getAllPosts();
  const posts =
    activeCategory === 'All'
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <p className="blog-eyebrow">SGF Insights</p>
          <h1>Business Financing &amp; Capital Structure</h1>
          <p className="blog-hero-sub">
            Educational resources for business owners navigating SBA loans,
            commercial real estate, equipment financing, and working capital.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-filter-bar">
        <div className="blog-filter-inner">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={cat === 'All' ? '/blog' : `/blog?category=${cat}`}
              className={`blog-filter-btn${activeCategory === cat ? ' active' : ''}`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="blog-grid-section">
        <div className="blog-grid-inner">
          {posts.length === 0 ? (
            <p className="blog-empty">No posts in this category yet.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <span className="blog-card-category">{post.category}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-date">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      timeZone: 'UTC',
                    })}
                  </span>
                  <span className="blog-card-cta">Read Article →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
