export default function BlogPostLoading() {
  return (
    <section style={{ paddingTop: "120px" }}>
      <div
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "60px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        {/* Back link skeleton */}
        <div
          style={{
            width: "140px",
            height: "20px",
            borderRadius: "999px",
            background: "oklch(94% 0.012 250)",
          }}
        />

        {/* Meta skeleton */}
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              width: "70px",
              height: "24px",
              borderRadius: "999px",
              background: "oklch(94% 0.012 250)",
            }}
          />
          <div
            style={{
              width: "120px",
              height: "24px",
              borderRadius: "999px",
              background: "oklch(94% 0.012 250)",
            }}
          />
        </div>

        {/* Title skeleton */}
        <div
          style={{
            width: "90%",
            height: "48px",
            borderRadius: "12px",
            background: "oklch(94% 0.012 250)",
          }}
        />

        {/* Intro skeleton */}
        <div
          style={{
            width: "100%",
            height: "80px",
            borderRadius: "12px",
            background: "oklch(94% 0.012 250)",
          }}
        />

        {/* Content lines skeleton */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            style={{
              width: i % 4 === 0 ? "40%" : i % 3 === 0 ? "100%" : "85%",
              height: i % 3 === 0 ? "32px" : "16px",
              borderRadius: i % 3 === 0 ? "8px" : "999px",
              background: "oklch(94% 0.012 250)",
            }}
          />
        ))}
      </div>
    </section>
  );
}