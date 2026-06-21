import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import styles from "./article.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Kale Su Arıtma`,
      description: post.description,
      url: `https://ispartaaritmakale.vercel.app/blog/${post.slug}`,
    },
  };
}

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className={styles.articleContainer}>
      <Link href="/blog" className={styles.backLink}>
        ← Bloga Geri Dön
      </Link>

      <header className={styles.articleHeader}>
        <div className={styles.articleMeta}>
          <span className={styles.tag}>{post.category}</span>
          <time dateTime={post.date}>
            {dateFormatter.format(new Date(post.date))}
          </time>
          <span>• {post.readTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p className={styles.intro}>{post.intro}</p>
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "Kale Su Arıtma",
            },
            publisher: {
              "@type": "Organization",
              name: "Kale Su Arıtma",
              logo: {
                "@type": "ImageObject",
                url: "https://ispartaaritmakale.vercel.app/kale-su-aritma-logo.webp",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://ispartaaritmakale.vercel.app/blog/${post.slug}`,
            },
          }),
        }}
      />

      <main className={styles.articleContent}>
        {post.contentSections.map((section, i) => {
          switch (section.type) {
            case "heading":
              return <h2 key={i}>{section.text}</h2>;
            case "paragraph":
              return (
                <p key={i} dangerouslySetInnerHTML={{ __html: section.text! }} />
              );
            case "list":
              return (
                <ul key={i}>
                  {section.items?.map((item, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );
            case "blockquote":
              return (
                <blockquote
                  key={i}
                  dangerouslySetInnerHTML={{ __html: section.text! }}
                />
              );
            case "cta":
              return (
                <section key={i} className={styles.articleCta}>
                  <h3>{section.ctaTitle}</h3>
                  <p>{section.ctaText}</p>
                  <a href="tel:+905462574773" className={styles.btnCtaCall}>
                    {section.ctaLabel}
                  </a>
                </section>
              );
            default:
              return null;
          }
        })}
      </main>
    </div>
  );
}