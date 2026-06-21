import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className={styles.hero}>
        <div className={styles.heroBadge}>
          <span></span> {`Isparta'nın Su Arıtma Uzmanı — 7/24 Hizmet`}
        </div>
        <h1>
          {`Isparta'da`} <em>temiz su</em> artık musluğunuzda
        </h1>
        <p>
          Klor, kireç ve ağır metallerden arındırılmış, yumuşacık içme suyu.
          Ücretsiz kurulum ile hemen sahip olun.
        </p>
        <div className={styles.heroActions}>
          <a href="tel:+905462574773" className="btn btn-primary">
            📞 Hemen Ara
          </a>
          <a href="#urunler" className="btn btn-outline-light">
            Cihazları İncele
          </a>
          <span className={styles.micro}></span>
        </div>
      </div>
    </section>
  );
}