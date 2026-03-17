import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: 'Programs' | 'Industries' | 'Tools';
  tags: string[];
  relatedProgram?: string;
  relatedIndustry?: string;
  relatedCalculator?: string;
  draft: boolean;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        excerpt: data.excerpt ?? '',
        category: data.category ?? 'Programs',
        tags: data.tags ?? [],
        relatedProgram: data.relatedProgram,
        relatedIndustry: data.relatedIndustry,
        relatedCalculator: data.relatedCalculator,
        draft: data.draft ?? false,
        content,
      } as BlogPost;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    category: data.category ?? 'Programs',
    tags: data.tags ?? [],
    relatedProgram: data.relatedProgram,
    relatedIndustry: data.relatedIndustry,
    relatedCalculator: data.relatedCalculator,
    draft: data.draft ?? false,
    content,
  };
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}
