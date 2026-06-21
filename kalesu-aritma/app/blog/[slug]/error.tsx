"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section style={{ paddingTop: "120px", textAlign: "center" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "80px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "8px" }}>⚠️</div>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 700 }}>
          Blog yazısı yüklenirken bir hata oluştu
        </h1>
        <p
          style={{
            color: "var(--muted, oklch(44% 0.014 250))",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          Yazı yüklenirken beklenmeyen bir sorun oluştu. Lütfen tekrar deneyin
          veya blog anasayfasına dönün.
        </p>
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={reset}
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: "none",
              background: "var(--accent, oklch(55% 0.17 210))",
              color: "#fff",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Tekrar Dene
          </button>
          <Link
            href="/blog"
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: "1.5px solid var(--border, oklch(90% 0.006 250))",
              background: "transparent",
              color: "var(--fg, oklch(16% 0.015 250))",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Bloga Geri Dön
          </Link>
        </div>
      </div>
    </section>
  );
}