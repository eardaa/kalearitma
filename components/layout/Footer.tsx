import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.footerBrand}>© 2026 Kale Su Arıtma — Isparta</Link>
      <div className={styles.footerLinks}>
        <Link href="/#faydalar">Faydalar</Link>
        <Link href="/#urunler">Ürünler</Link>
        <Link href="/#yorumlar">Yorumlar</Link>
        <Link href="/#iletisim">İletişim</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </footer>
  );
}