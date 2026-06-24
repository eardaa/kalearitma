"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { testimonials } from "@/lib/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const total = testimonials.length;
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const goRef = useRef<(n: number) => void>(() => {});
  const startXRef = useRef(0);

  const go = useCallback(
    (n: number) => {
      const next = ((n % total) + total) % total;
      setIdx(next);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => goRef.current(next + 1), 5000);
    },
    [total]
  );

  useEffect(() => {
    goRef.current = go;
    timerRef.current = setTimeout(() => goRef.current(1), 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [go]);

  function handleTouchStart(e: React.TouchEvent) {
    startXRef.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const diff = startXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      go(idx + (diff > 0 ? 1 : -1));
    }
  }

  return (
    <section id="yorumlar">
      <div className="section-header">
        <div className="section-label">Müşteri Yorumları</div>
        <h2>{`Kale Su Arıtma'yı tercih edenler anlatıyor`}</h2>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
          <div
            className={styles.sliderSlides}
            style={{ transform: `translateX(-${idx * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((t, i) => (
              <div key={i} className={styles.sliderSlide}>
                <div className={styles.testimonialCard}>
                  <div className={styles.stars}>★★★★★</div>
                  <blockquote>{t.text}</blockquote>
                  <div className={styles.author}>
                    {t.author} <span>· {t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${styles.sliderArrow} ${styles.prev}`}
          aria-label="Önceki yorum"
          onClick={() => go(idx - 1)}
        >
          ‹
        </button>
        <button
          className={`${styles.sliderArrow} ${styles.next}`}
          aria-label="Sonraki yorum"
          onClick={() => go(idx + 1)}
        >
          ›
        </button>
        <div className={styles.sliderDots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.sliderDot} ${i === idx ? styles.active : ""}`}
              aria-label={`Yorum ${i + 1}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}