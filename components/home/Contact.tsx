import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactSection} id="iletisim">
      <div className={styles.contactSectionInner}>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>📞</div>
            <h3>Hemen Arayın, Hemen Kurulum</h3>
            <p>
              Isparta ve çevresinde aynı gün randevu ve kurulum hizmeti. Uzman
              ekibimizle her zaman yanınızdayız.
            </p>
            <a href="tel:+905462574773" className={styles.phoneLink}>
              +90 (546) 257 47 73
            </a>
            <a
              href="https://maps.google.com/?q=Kale+Su+Arıtma+Isparta"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnMaps}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {`Google Haritalar'da Gör`}
            </a>
            <p className={styles.hoursText}>
              Hafta içi 09:00–20:00 · Cumartesi 09:00–20:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}