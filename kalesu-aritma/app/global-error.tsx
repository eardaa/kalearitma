"use client";

import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
          background: "oklch(99% 0.001 240)",
          color: "oklch(16% 0.015 250)",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "32px 24px",
            textAlign: "center",
            gap: "20px",
          }}
        >
          <div style={{ fontSize: "56px" }}>🛟</div>
          <h1
            style={{
              fontSize: "clamp(24px, 5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Beklenmeyen bir hata oluştu
          </h1>
          <p
            style={{
              color: "oklch(44% 0.014 250)",
              fontSize: "16px",
              lineHeight: "1.6",
              maxWidth: "480px",
            }}
          >
            Sistemsel bir sorun oluştu. Lütfen sayfayı yenileyin veya biraz sonra tekrar deneyin. Sorun devam ederse bizimle iletişime geçin.
          </p>
          <button
            onClick={reset}
            style={{
              padding: "14px 32px",
              borderRadius: "999px",
              border: "none",
              background: "oklch(55% 0.17 210)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 20px oklch(55% 0.17 210 / 0.22)",
            }}
          >
            Sayfayı Yenile
          </button>
          <Link
            href="/"
            style={{
              color: "oklch(44% 0.014 250)",
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </body>
    </html>
  );
}