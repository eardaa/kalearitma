import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section id="faydalar">
      <div className="section-header">
        <div className="section-label">Neden Su Arıtma?</div>
        <h2>Sağlığınız musluktan başlar</h2>
        <p>
          Damacana taşımaya son. Kesintisiz, taptaze içme suyu her an elinizin
          altında.
        </p>
      </div>
      <div className={styles.benefitsGrid}>
        <div className={styles.benefitCard}>
          <div className={`${styles.benefitIcon} ${styles.bi1}`}>💧</div>
          <h3>Kireç ve Klordan Arınmış</h3>
          <p>
            Isparta suyunun sert yapısından kaynaklanan kireci %98 oranında
            filtreler. Çayınızın rengi ve tadı değişecek.
          </p>
        </div>
        <div className={styles.benefitCard}>
          <div className={`${styles.benefitIcon} ${styles.bi2}`}>💰</div>
          <h3>Damacanadan Daha Ekonomik</h3>
          <p>
            Ayda ortalama 120-180 ₺ damacana masrafı yerine sınırsız temiz su.
            Cihaz kendini 12 ayda amorti eder.
          </p>
        </div>
        <div className={styles.benefitCard}>
          <div className={`${styles.benefitIcon} ${styles.bi3}`}>🛡️</div>
          <h3>Ücretsiz Kurulum & Bakım</h3>
          <p>
            Uzman ekip tarafından 1 saatte kurulum. 2 yıl garanti ve Isparta içi
            yerinde servis hizmeti.
          </p>
        </div>
      </div>
    </section>
  );
}