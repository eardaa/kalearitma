import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        textAlign: "center",
        paddingTop: "200px",
        paddingBottom: "100px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "oklch(93% 0.03 210)",
          fontSize: "36px",
          marginBottom: "24px",
        }}
      >
        🔍
      </div>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(30px, 5vw, 50px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        Sayfa Bulunamadı
      </h1>
      <p
        style={{
          color: "var(--muted)",
          fontSize: "17px",
          marginTop: "16px",
          marginBottom: "8px",
          lineHeight: "1.6",
          maxWidth: "420px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfaya dönüp
        ihtiyacınız olan bilgiye ulaşabilirsiniz.
      </p>
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "32px",
        }}
      >
        <Link href="/" className="btn btn-primary">
          Ana Sayfaya Dön
        </Link>
        <Link href="/blog" className="btn btn-outline-light">
          Blog Yazılarını Oku
        </Link>
      </div>
    </section>
  );
}