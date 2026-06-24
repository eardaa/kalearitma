export default function BlogLoading() {
  return (
    <section style={{ paddingTop: "120px", textAlign: "center" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "60px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Hero skeleton */}
        <div
          style={{
            width: "200px",
            height: "32px",
            borderRadius: "999px",
            background: "oklch(94% 0.012 250)",
          }}
        />
        <div
          style={{
            width: "min(420px, 80%)",
            height: "48px",
            borderRadius: "12px",
            background: "oklch(94% 0.012 250)",
          }}
        />
        <div
          style={{
            width: "min(520px, 90%)",
            height: "60px",
            borderRadius: "12px",
            background: "oklch(94% 0.012 250)",
          }}
        />

        {/* Blog cards skeleton */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            maxWidth: "1100px",
            width: "100%",
            marginTop: "40px",
          }}
        >
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                background: "var(--surface, #fff)",
                borderRadius: "var(--radius-xl, 28px)",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                boxShadow: "0 1px 0 oklch(0% 0 0 / 0.04), 0 3px 12px oklch(0% 0 0 / 0.04)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "20px",
                  background: "oklch(94% 0.012 250)",
                }}
              />
              <div
                style={{
                  width: "80px",
                  height: "16px",
                  borderRadius: "999px",
                  background: "oklch(94% 0.012 250)",
                }}
              />
              <div
                style={{
                  width: "90%",
                  height: "28px",
                  borderRadius: "8px",
                  background: "oklch(94% 0.012 250)",
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "48px",
                  borderRadius: "8px",
                  background: "oklch(94% 0.012 250)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}