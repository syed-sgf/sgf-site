import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Starting Gate Financial`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <main className="blog-post-page">
      {/* Article Header */}
      <header className="blog-post-header">
        <div className="blog-post-header-inner">
          <div className="blog-post-meta">
            <span className="blog-post-category">{post.category}</span>
            <span className="blog-post-date">{formattedDate}</span>
          </div>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-excerpt">{post.excerpt}</p>
        </div>
      </header>

      {/* Article Body */}
      <div className="blog-post-body-wrap">
        <article className="blog-post-body prose">
          <MDXRemote source={post.content} />
        </article>

        {/* Soft CTA */}
        <aside className="blog-post-cta-box">
          <p className="blog-post-cta-label">Ready to discuss your options?</p>
          <h3 className="blog-post-cta-heading">
            Schedule a Consultation with SGF
          </h3>
          <p className="blog-post-cta-body">
            Every financing situation is different. SGF works with business
            owners to identify the right structure — not just the fastest
            approval.
          </p>
          <Link href="/contact" className="blog-post-cta-btn">
            Schedule a Consultation →
          </Link>
        </aside>

        {/* Back Link */}
        <div className="blog-post-back">
          <Link href="/blog" className="blog-post-back-link">
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </main>
  );
}
