import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Su Arıtma ve Sağlıklı Yaşam Blogu",
  description:
    "Isparta su kalitesi, su arıtma cihazı seçimi, filtre değişim periyotları ve kireçli suyun etkileri hakkında bilgilendirici rehberler.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Su Arıtma ve Sağlıklı Yaşam Blogu | Kale Su Arıtma",
    description:
      "Isparta su kalitesi, cihaz seçimi ve filtre bakımı hakkında bilmeniz gereken her şey.",
    url: "https://ispartaaritmakale.vercel.app/blog",
  },
};

const categoryColors: Record<string, string> = {
  "isparta-suyu": "bc1",
  "satin-alma-rehberi": "bc2",
  "bakim-servis": "bc3",
  "karsilastirma": "bc4",
};

const categoryIcons: Record<string, string> = {
  "isparta-suyu": "🏔️",
  "satin-alma-rehberi": "💧",
  "bakim-servis": "🛠️",
  "karsilastirma": "💰",
};

const dateFormatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <section>
        <div className={styles.hero}>
          <div className={styles.heroBadge}>
            <span></span> Bilgi Paylaşımı & Sağlık Rehberi
          </div>
          <h1>
            Kale Su Arıtma <em>Bilgi Bankası</em>
          </h1>
          <p>
            {`Isparta'daki şebeke suyu kalitesi, arıtma sistemlerinin`}
            çalışma mekanizmaları ve eviniz için en doğru çözümler hakkında
            uzman yazılarımız.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className={styles.blogGrid}>
          {sorted.map((post) => (
            <article key={post.slug} className={styles.blogCard}>
              <div
                className={`${styles.blogCardVisual} ${styles[categoryColors[post.categorySlug] || "bc2"]}`}
              >
                {categoryIcons[post.categorySlug] || "💧"}
              </div>
              <div className={styles.blogCardContent}>
                <div className={styles.blogCardMeta}>
                  <span className={styles.tag}>{post.category}</span>
                  <time dateTime={post.date}>
                    {dateFormatter.format(new Date(post.date))}
                  </time>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <div className={styles.blogCardFooter}>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Okumaya Devam Et →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}