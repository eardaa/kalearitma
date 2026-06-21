"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastScrolled = false;
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 40;
          if (scrolled !== lastScrolled && navRef.current) {
            lastScrolled = scrolled;
            navRef.current.classList.toggle(styles.scrolled!, scrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={styles.nav} ref={navRef} aria-label="Ana menü">
      <Link href="/" className={styles.navBrand} aria-label="Kale Su Arıtma ana sayfa">
        <Image
          className={styles.navLogo}
          src="/kale-su-aritma-logo.webp"
          alt="Kale Su Arıtma logosu"
          width={42}
          height={42}
          priority
        />
        Kale Su Arıtma
      </Link>
      <div className={styles.navLinks}>
        <Link href="/#faydalar">Faydalar</Link>
        <Link href="/#urunler">Ürünler</Link>
        <Link href="/#yorumlar">Yorumlar</Link>
        <Link href="/#iletisim">İletişim</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <a href="tel:+905462574773" className={styles.navCta}>📞 Hemen Ara</a>
    </nav>
  );
}